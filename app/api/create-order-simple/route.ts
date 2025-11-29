import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Handle both JSON and FormData
    let body: any
    const contentType = request.headers.get('content-type')
    
    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData()
      body = Object.fromEntries(formData.entries())
      
      // Parse JSON fields
      if (body.social_links) {
        body.social_links = JSON.parse(body.social_links)
      }
    } else {
      body = await request.json()
    }
    
    console.log('Content-Type:', contentType)
    console.log('Body keys:', Object.keys(body))
    console.log('Body.logo type:', typeof body.logo)
    console.log('Body.payment_screenshot type:', typeof body.payment_screenshot)
    
    console.log('Received body:', body)
    console.log('Body.logo:', body.logo)
    console.log('Body.payment_screenshot:', body.payment_screenshot)
    
    // Extract order data
    const {
      owner_name,
      company_name,
      mobile,
      email,
      address,
      pincode,
      location,
      category,
      services,
      desc_short,
      desc_long,
      logo_url,
      gst_number,
      website_style,
      primary_color,
      social_links,
      plan,
      payment_type,
      payment_screenshot_url,
      base_price,
      gst_amount,
      total_amount
    } = body

    // Validate required fields
    if (!owner_name || !company_name || !email || !address || !pincode || !location || !category || !plan || !payment_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // First, get or create user in simple_users table
    let userId: string
    
    try {
      // Try to find existing user by email
      const { data: existingUser, error: findError } = await supabase
        .from('simple_users')
        .select('id')
        .eq('email', email.toLowerCase().trim())
        .single()

      if (findError && findError.code !== 'PGRST116') {
        throw findError
      }

      if (existingUser) {
        userId = existingUser.id
        console.log('Found existing user:', userId)
      } else {
        // Create new user
        const { data: newUser, error: createError } = await supabase
          .from('simple_users')
          .insert({
            first_name: owner_name.split(' ')[0] || owner_name,
            last_name: owner_name.split(' ').slice(1).join(' ') || '',
            email: email.toLowerCase().trim(),
            phone: mobile || null
          })
          .select('id')
          .single()

        if (createError) {
          console.error('Error creating user:', createError)
          return NextResponse.json(
            { error: `Failed to create user: ${createError.message}` },
            { status: 500 }
          )
        }

        userId = newUser.id
        console.log('Created new user:', userId)
      }
    } catch (error: any) {
      console.error('Error with user creation/lookup:', error)
      return NextResponse.json(
        { error: `User management error: ${error.message}` },
        { status: 500 }
      )
    }

    // Handle file uploads
    let finalLogoUrl = logo_url || null
    let finalPaymentScreenshotUrl = payment_screenshot_url || null

    // Create admin client for file uploads
    let adminSupabase
    try {
      adminSupabase = createAdminClient()
      console.log('Admin client created successfully')
    } catch (error) {
      console.error('Failed to create admin client:', error)
      console.log('Falling back to regular client for file uploads')
      adminSupabase = supabase
    }

    // Upload logo if provided
    console.log('Checking logo upload:', {
      hasLogo: !!body.logo,
      logoType: typeof body.logo,
      isFile: body.logo instanceof File,
      logoName: body.logo?.name
    })
    
    if (body.logo && body.logo instanceof File) {
      try {
        const logoFileName = `logo_${Date.now()}_${body.logo.name}`
        console.log('Uploading logo to:', `logo/${userId}/${logoFileName}`)
        
        const { data: logoUploadData, error: logoUploadError } = await adminSupabase.storage
          .from('orders')
          .upload(`logo/${userId}/${logoFileName}`, body.logo, {
            cacheControl: '3600',
            upsert: false
          })

        if (logoUploadError) {
          console.error('Error uploading logo:', logoUploadError)
        } else {
          const { data: logoPublicData } = adminSupabase.storage
            .from('orders')
            .getPublicUrl(`logo/${userId}/${logoFileName}`)
          finalLogoUrl = logoPublicData.publicUrl
          console.log('Logo uploaded successfully:', finalLogoUrl)
        }
      } catch (error) {
        console.error('Error processing logo upload:', error)
      }
    } else {
      console.log('Logo not uploaded - not a File instance')
    }

    // Upload payment screenshot if provided
    console.log('Checking payment screenshot upload:', {
      hasScreenshot: !!body.payment_screenshot,
      screenshotType: typeof body.payment_screenshot,
      isFile: body.payment_screenshot instanceof File,
      screenshotName: body.payment_screenshot?.name
    })
    
    if (body.payment_screenshot && body.payment_screenshot instanceof File) {
      try {
        const screenshotFileName = `payment_${Date.now()}_${body.payment_screenshot.name}`
        console.log('Uploading payment screenshot to:', `payment/${userId}/${screenshotFileName}`)
        
        const { data: screenshotUploadData, error: screenshotUploadError } = await adminSupabase.storage
          .from('orders')
          .upload(`payment/${userId}/${screenshotFileName}`, body.payment_screenshot, {
            cacheControl: '3600',
            upsert: false
          })

        if (screenshotUploadError) {
          console.error('Error uploading payment screenshot:', screenshotUploadError)
        } else {
          const { data: screenshotPublicData } = adminSupabase.storage
            .from('orders')
            .getPublicUrl(`payment/${userId}/${screenshotFileName}`)
          finalPaymentScreenshotUrl = screenshotPublicData.publicUrl
          console.log('Payment screenshot uploaded successfully:', finalPaymentScreenshotUrl)
        }
      } catch (error) {
        console.error('Error processing payment screenshot upload:', error)
      }
    } else {
      console.log('Payment screenshot not uploaded - not a File instance')
    }

    // Create order data
    const orderData = {
      user_id: userId,
      owner_name,
      company_name,
      mobile,
      email,
      address,
      pincode,
      location,
      category,
      services,
      desc_short: desc_short || '',
      desc_long: desc_long || desc_short || '', // Use desc_short as fallback if desc_long not provided
      logo_url: finalLogoUrl || null,
      gst_number: gst_number || null,
      website_style: website_style || null,
      primary_color: primary_color || null,
      facebook_url: social_links?.facebook || null,
      instagram_url: social_links?.instagram || null,
      linkedin_url: social_links?.linkedin || null,
      whatsapp_number: social_links?.whatsapp || null,
      youtube_url: social_links?.youtube || null,
      plan,
      payment_type,
      base_price,
      gst_amount,
      total_amount,
      payment_screenshot_url: finalPaymentScreenshotUrl,
      payment_status: payment_type === 'upi' ? 'pending' : 'completed',
      status: 'pending'
    }

    console.log('Creating order with data:', orderData)

    // Insert order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert(orderData)
      .select('id')
      .single()

    if (orderError) {
      console.error('Error creating order:', orderError)
      return NextResponse.json(
        { error: `Failed to create order: ${orderError.message}` },
        { status: 500 }
      )
    }

    console.log('Order created successfully:', order.id)

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Order created successfully'
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

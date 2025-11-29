import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Create Supabase client only when needed, not at module level
function createSupabaseAdmin() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('Supabase environment variables are missing');
  }
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // For simple auth, we'll use email/phone from query params instead of JWT
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');

    const supabaseAdmin = createSupabaseAdmin();
    const { id } = await params;
    const orderId = id;

    // If email/phone provided, verify user first
    let userId: string | null = null;
    if (email || phone) {
      let userQuery = supabaseAdmin
        .from('simple_users')
        .select('id');

      if (email) {
        userQuery = userQuery.eq('email', email.toLowerCase().trim());
      } else if (phone) {
        userQuery = userQuery.eq('phone', phone.trim());
      }

      const { data: users } = await userQuery;
      if (users && users.length > 0) {
        userId = users[0].id;
      }
    }

    // Fetch specific order with ALL details
    let orderQuery = supabaseAdmin
      .from('orders')
      .select(`
        id,
        user_id,
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
        hours,
        logo_url,
        gst_number,
        website_style,
        primary_color,
        domain_preference,
        facebook_url,
        instagram_url,
        linkedin_url,
        whatsapp_number,
        youtube_url,
        plan,
        base_price,
        gst_amount,
        total_amount,
        payment_screenshot_url,
        status,
        created_at,
        updated_at,
        orders_images (
          id,
          image_url,
          image_name,
          created_at
        )
      `)
      .eq('id', orderId);

    // If we have userId, filter by it for security
    if (userId) {
      orderQuery = orderQuery.eq('user_id', userId);
    }

    const { data, error } = await orderQuery.single();

    if (error) {
      console.error('order details: fetch error', error);
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ order: data });
  } catch (err) {
    console.error('order details: unexpected error', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}


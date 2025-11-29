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

export async function GET(request: NextRequest) {
  try {
    const supabaseAdmin = createSupabaseAdmin();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');

    if (!email && !phone) {
      return NextResponse.json({ 
        error: 'Email or phone number is required' 
      }, { status: 400 });
    }

    // Find user in simple_users table
    let userQuery = supabaseAdmin
      .from('simple_users')
      .select('id, first_name, last_name, email, phone, created_at');

    if (email) {
      userQuery = userQuery.eq('email', email.toLowerCase().trim());
    } else if (phone) {
      userQuery = userQuery.eq('phone', phone.trim());
    }

    const { data: users, error: userError } = await userQuery;

    if (userError) {
      console.error('view-orders: user lookup error', userError);
      return NextResponse.json({ 
        error: 'Failed to find user' 
      }, { status: 500 });
    }

    if (!users || users.length === 0) {
      return NextResponse.json({ 
        error: 'No user found with the provided email or phone' 
      }, { status: 404 });
    }

    const user = users[0];

    // Get orders for this user
    const { data: orders, error: ordersError } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (ordersError) {
      console.error('view-orders: orders lookup error', ordersError);
      return NextResponse.json({ 
        error: 'Failed to fetch orders' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at
      },
      orders: orders || []
    });

  } catch (err) {
    console.error('view-orders: unexpected error', err);
    return NextResponse.json({ 
      error: 'Unexpected error: ' + (err as Error).message 
    }, { status: 500 });
  }
}

// Add CORS headers for direct form submissions
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


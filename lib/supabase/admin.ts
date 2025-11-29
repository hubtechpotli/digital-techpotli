import { createClient } from '@supabase/supabase-js'

// Create a Supabase client with service role key for admin operations
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseServiceKey) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is not set in environment variables')
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for file uploads')
  }
  
  console.log('Creating admin client with service role key')
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}


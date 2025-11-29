import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Safe client creation function - only when actually needed
function createSupabaseClientSafe() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  })
}

// Only create client when actually needed (not during prerendering)
let supabaseInstance: any = null

function getSupabaseClient() {
  // Skip during build/prerendering
  if (typeof window === 'undefined') {
    return null
  }
  
  if (!supabaseInstance) {
    supabaseInstance = createSupabaseClientSafe()
  }
  return supabaseInstance
}

// Safe exports that won't trigger during prerendering
export const supabase = getSupabaseClient()

// Export createClient function for backward compatibility
export const createClient = () => {
  if (typeof window === 'undefined') {
    return null // Return null during SSR/prerendering
  }
  return getSupabaseClient()
}


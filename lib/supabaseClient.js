console.log('Cursor patch applied: lib/supabaseClient.js');
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Handle missing environment variables gracefully
function createSafeSupabaseClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase environment variables not found. Creating placeholder client.');
    // Return a mock client that doesn't crash the app
    return {
      auth: { 
        signIn: () => Promise.reject(new Error('Supabase not configured')),
        signInWithPassword: () => Promise.reject(new Error('Supabase not configured')),
        signUp: () => Promise.reject(new Error('Supabase not configured')),
        getUser: () => Promise.reject(new Error('Supabase not configured')),
        signOut: () => Promise.reject(new Error('Supabase not configured')),
        getSession: () => Promise.resolve({ data: { session: null }, error: null })
      },
      from: () => ({ 
        select: () => ({ data: [], error: new Error('Supabase not configured') }),
        insert: () => ({ data: [], error: new Error('Supabase not configured') }),
        update: () => ({ data: [], error: new Error('Supabase not configured') }),
        delete: () => ({ data: [], error: new Error('Supabase not configured') })
      }),
      rpc: () => Promise.reject(new Error('Supabase not configured'))
    };
  }
  
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

export const supabase = createSafeSupabaseClient();
// Cast to `any` for TypeScript build-time compatibility when environment variables are missing
// This prevents the union type (real client | mock) from causing missing-method type errors.
export default /** @type {any} */ (supabase);


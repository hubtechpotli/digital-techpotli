/**
 * Simple Authentication Service (No Passwords)
 * Handles user authentication without password verification
 */

import { supabase } from '@/lib/supabaseClient'

export interface SimpleUser {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  created_at: string
  is_new_user?: boolean
}

export interface AuthResult {
  user: SimpleUser | null
  session_token: string | null
  error: string | null
  is_new_user: boolean
}

export class SimpleAuthService {
  /**
   * Sign in or sign up user with basic details
   */
  static async signIn(
    firstName: string,
    lastName: string,
    email: string,
    phone?: string
  ): Promise<AuthResult> {
    try {
      // First, try to call the database function
      try {
        const { data, error } = await supabase.rpc('get_or_create_simple_user_v2', {
          p_first_name: firstName.trim(),
          p_last_name: lastName.trim(),
          p_email: email.trim().toLowerCase(),
          p_phone: phone?.trim() || null
        })

        if (error) {
          console.error('Database function error:', error)
          // If the function doesn't exist, fall back to direct table operations
          if (error.message.includes('function') && error.message.includes('does not exist')) {
            return await this.signInFallback(firstName, lastName, email, phone)
          }
          
          return {
            user: null,
            session_token: null,
            error: `Database error: ${error.message || 'Unknown error'}`,
            is_new_user: false
          }
        }

        if (!data || data.length === 0) {
          return {
            user: null,
            session_token: null,
            error: 'Authentication failed. Please try again.',
            is_new_user: false
          }
        }

        const userData = data[0]
        const isNewUser = userData.is_new_user

        // Create a session token
        const { data: sessionData, error: sessionError } = await supabase.rpc('create_user_session', {
          p_user_id: userData.user_id
        })

        if (sessionError) {
          console.error('Session creation error:', sessionError)
          // If session function doesn't exist, create a simple token
          const simpleToken = this.generateSimpleToken()
          
          const user: SimpleUser = {
            id: userData.user_id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            phone: userData.phone,
            created_at: userData.created_at,
            is_new_user: isNewUser
          }

          // Store session in localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('simple_auth_token', simpleToken)
            localStorage.setItem('simple_auth_user', JSON.stringify(user))
          }

          return {
            user,
            session_token: simpleToken,
            error: null,
            is_new_user: isNewUser
          }
        }

        const user: SimpleUser = {
          id: userData.user_id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          phone: userData.phone,
          created_at: userData.created_at,
          is_new_user: isNewUser
        }

        // Store session in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('simple_auth_token', sessionData)
          localStorage.setItem('simple_auth_user', JSON.stringify(user))
        }

        return {
          user,
          session_token: sessionData,
          error: null,
          is_new_user: isNewUser
        }
      } catch (rpcError) {
        console.error('RPC call failed, trying fallback:', rpcError)
        return await this.signInFallback(firstName, lastName, email, phone)
      }
    } catch (error: any) {
      console.error('Authentication error:', error)
      return {
        user: null,
        session_token: null,
        error: 'An unexpected error occurred. Please try again.',
        is_new_user: false
      }
    }
  }

  // Fallback method when database functions don't exist
  private static async signInFallback(
    firstName: string,
    lastName: string,
    email: string,
    phone?: string
  ): Promise<AuthResult> {
    try {
      // Check if simple_users table exists by trying to query it
      const { data: existingUsers, error: tableError } = await supabase
        .from('simple_users')
        .select('id, first_name, last_name, email, phone, created_at')
        .eq('email', email.trim().toLowerCase())
        .limit(1)

      if (tableError) {
        console.error('Table access error:', tableError)
        return {
          user: null,
          session_token: null,
          error: 'Database not properly configured. Please contact support.',
          is_new_user: false
        }
      }

      let userId: string
      let isNewUser = false

      if (existingUsers && existingUsers.length > 0) {
        // User exists, update their info
        const existingUser = existingUsers[0]
        userId = existingUser.id
        
        const { error: updateError } = await supabase
          .from('simple_users')
          .update({
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            phone: phone?.trim() || existingUser.phone,
            updated_at: new Date().toISOString()
          })
          .eq('id', userId)

        if (updateError) {
          console.error('Update error:', updateError)
        }
      } else {
        // Create new user
        const { data: newUser, error: insertError } = await supabase
          .from('simple_users')
          .insert([{
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            email: email.trim().toLowerCase(),
            phone: phone?.trim() || null
          }])
          .select('id, first_name, last_name, email, phone, created_at')
          .single()

        if (insertError) {
          console.error('Insert error:', insertError)
          return {
            user: null,
            session_token: null,
            error: 'Failed to create user account. Please try again.',
            is_new_user: false
          }
        }

        userId = newUser.id
        isNewUser = true
      }

      // Generate a simple session token
      const sessionToken = this.generateSimpleToken()

      const user: SimpleUser = {
        id: userId,
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        created_at: new Date().toISOString(),
        is_new_user: isNewUser
      }

      // Store session in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('simple_auth_token', sessionToken)
        localStorage.setItem('simple_auth_user', JSON.stringify(user))
      }

      return {
        user,
        session_token: sessionToken,
        error: null,
        is_new_user: isNewUser
      }
    } catch (error: any) {
      console.error('Fallback authentication error:', error)
      return {
        user: null,
        session_token: null,
        error: 'Authentication failed. Please try again.',
        is_new_user: false
      }
    }
  }

  // Generate a simple session token
  private static generateSimpleToken(): string {
    return 'simple_' + Math.random().toString(36).substring(2) + Date.now().toString(36)
  }

  /**
   * Validate current session
   */
  static async validateSession(sessionToken?: string): Promise<AuthResult> {
    try {
      const token = sessionToken || (typeof window !== 'undefined' ? localStorage.getItem('simple_auth_token') : null)
      
      if (!token) {
        return {
          user: null,
          session_token: null,
          error: 'No session found',
          is_new_user: false
        }
      }

      // Try to validate using database function first
      try {
        const { data, error } = await supabase.rpc('validate_session', {
          p_session_token: token
        })

        if (error) {
          console.error('Session validation error:', error)
          // If function doesn't exist, fall back to localStorage validation
          if (error.message.includes('function') && error.message.includes('does not exist')) {
            return this.validateSessionFallback(token)
          }
          
          return {
            user: null,
            session_token: null,
            error: 'Session validation failed',
            is_new_user: false
          }
        }

        if (!data || data.length === 0 || !data[0].is_valid) {
          // Clear invalid session
          if (typeof window !== 'undefined') {
            localStorage.removeItem('simple_auth_token')
            localStorage.removeItem('simple_auth_user')
          }
          
          return {
            user: null,
            session_token: null,
            error: 'Session expired or invalid',
            is_new_user: false
          }
        }

        const userData = data[0]
        const user: SimpleUser = {
          id: userData.user_id,
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          phone: userData.phone,
          created_at: new Date().toISOString(),
          is_new_user: false
        }

        return {
          user,
          session_token: token,
          error: null,
          is_new_user: false
        }
      } catch (rpcError) {
        console.error('RPC validation failed, trying fallback:', rpcError)
        return this.validateSessionFallback(token)
      }
    } catch (error: any) {
      console.error('Session validation error:', error)
      return {
        user: null,
        session_token: null,
        error: 'Session validation failed',
        is_new_user: false
      }
    }
  }

  // Fallback session validation using localStorage
  private static validateSessionFallback(token: string): AuthResult {
    try {
      if (typeof window === 'undefined') {
        return {
          user: null,
          session_token: null,
          error: 'No session found',
          is_new_user: false
        }
      }

      const userStr = localStorage.getItem('simple_auth_user')
      const storedToken = localStorage.getItem('simple_auth_token')

      if (!userStr || !storedToken || storedToken !== token) {
        // Clear invalid session
        localStorage.removeItem('simple_auth_token')
        localStorage.removeItem('simple_auth_user')
        
        return {
          user: null,
          session_token: null,
          error: 'Session expired or invalid',
          is_new_user: false
        }
      }

      const user = JSON.parse(userStr)
      
      return {
        user,
        session_token: token,
        error: null,
        is_new_user: false
      }
    } catch (error) {
      console.error('Fallback session validation error:', error)
      return {
        user: null,
        session_token: null,
        error: 'Session validation failed',
        is_new_user: false
      }
    }
  }

  /**
   * Get current user from localStorage
   */
  static getCurrentUser(): SimpleUser | null {
    if (typeof window === 'undefined') return null
    
    try {
      const userStr = localStorage.getItem('simple_auth_user')
      return userStr ? JSON.parse(userStr) : null
    } catch (error) {
      console.error('Error parsing user data:', error)
      return null
    }
  }

  /**
   * Sign out user
   */
  static async signOut(): Promise<void> {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('simple_auth_token') : null
      
      if (token) {
        try {
          // Try to mark session as inactive in database
          await supabase
            .from('user_sessions')
            .update({ is_active: false })
            .eq('session_token', token)
        } catch (error) {
          console.error('Database sign out error:', error)
          // Continue with localStorage cleanup even if database operation fails
        }
      }
    } catch (error) {
      console.error('Sign out error:', error)
    } finally {
      // Always clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('simple_auth_token')
        localStorage.removeItem('simple_auth_user')
      }
    }
  }

  /**
   * Check if user is authenticated
   */
  static isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false
    
    const token = localStorage.getItem('simple_auth_token')
    const user = localStorage.getItem('simple_auth_user')
    
    return !!(token && user)
  }

  /**
   * Get session token
   */
  static getSessionToken(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('simple_auth_token')
  }
}

export default SimpleAuthService


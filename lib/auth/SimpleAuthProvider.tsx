"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { SimpleAuthService, SimpleUser } from './simple-auth'

interface SimpleAuthContextType {
  user: SimpleUser | null
  loading: boolean
  signIn: (firstName: string, lastName: string, email: string, phone?: string) => Promise<{ success: boolean; error?: string; isNewUser?: boolean }>
  signOut: () => Promise<void>
  isAuthenticated: boolean
}

const SimpleAuthContext = createContext<SimpleAuthContextType | undefined>(undefined)

export function useSimpleAuth() {
  const context = useContext(SimpleAuthContext)
  if (context === undefined) {
    throw new Error('useSimpleAuth must be used within a SimpleAuthProvider')
  }
  return context
}

interface SimpleAuthProviderProps {
  children: ReactNode
}

export function SimpleAuthProvider({ children }: SimpleAuthProviderProps) {
  const [user, setUser] = useState<SimpleUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Check if we're on the order page - skip authentication for order creation
  const [isOrderPage, setIsOrderPage] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if current path is order page
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      const isOrder = path.includes('/dashboard/order') && !path.includes('/dashboard/orders')
      setIsOrderPage(isOrder)
      console.log('Current path:', path, 'Is order page:', isOrder)
      
      // If it's the order page, immediately set loading to false
      if (isOrder) {
        setLoading(false)
      }
    }
  }, [])

  // Initialize auth state
  useEffect(() => {
    // Only initialize when mounted
    if (!mounted) return
    
    // Skip authentication for order page
    if (isOrderPage) {
      console.log('Skipping authentication for order page')
      setLoading(false)
      return
    }

    const initializeAuth = async () => {
      // Set a timeout to prevent infinite loading
      const timeoutId = setTimeout(() => {
        console.log('Auth initialization timeout - setting loading to false')
        setLoading(false)
      }, 3000) // 3 second timeout

      try {
        // Check if user is already logged in
        const currentUser = SimpleAuthService.getCurrentUser()
        const token = SimpleAuthService.getSessionToken()
        
        console.log('Auth initialization - currentUser:', !!currentUser, 'token:', !!token)
        
        if (currentUser && token) {
          // Validate the session with timeout
          try {
            const result = await Promise.race([
              SimpleAuthService.validateSession(token),
              new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Session validation timeout')), 2000)
              )
            ]) as any
            
            if (result.user && !result.error) {
              console.log('Session validated successfully for user:', result.user.email)
              setUser(result.user)
            } else {
              console.log('Session validation failed:', result.error)
              // Session is invalid, clear it
              await SimpleAuthService.signOut()
              setUser(null)
            }
          } catch (validationError) {
            console.log('Session validation error or timeout:', validationError)
            setUser(null)
          }
        } else {
          console.log('No current user or token found')
          setUser(null)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        setUser(null)
      } finally {
        clearTimeout(timeoutId)
        setLoading(false)
      }
    }

    initializeAuth()
  }, [mounted, isOrderPage])

  const signIn = async (
    firstName: string,
    lastName: string,
    email: string,
    phone?: string
  ): Promise<{ success: boolean; error?: string; isNewUser?: boolean }> => {
    try {
      setLoading(true)
      
      const result = await SimpleAuthService.signIn(firstName, lastName, email, phone)
      
      if (result.user && !result.error) {
        setUser(result.user)
        return {
          success: true,
          isNewUser: result.is_new_user
        }
      } else {
        return {
          success: false,
          error: result.error || 'Authentication failed'
        }
      }
    } catch (error: any) {
      console.error('Sign in error:', error)
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.'
      }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      setLoading(true)
      await SimpleAuthService.signOut()
      setUser(null)
    } catch (error) {
      console.error('Sign out error:', error)
    } finally {
      setLoading(false)
    }
  }

  const value: SimpleAuthContextType = {
    user,
    loading: loading || !mounted,
    signIn,
    signOut,
    isAuthenticated: !!user && mounted
  }

  return (
    <SimpleAuthContext.Provider value={value}>
      {children}
    </SimpleAuthContext.Provider>
  )
}

export default SimpleAuthProvider


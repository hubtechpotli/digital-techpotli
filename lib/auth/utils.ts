import { AuthError } from './types'

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long')
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  return {
    valid: errors.length === 0,
    errors
  }
}

export const formatAuthError = (error: any): AuthError => {
  if (!error) return { message: 'An unknown error occurred' }
  
  // Handle Supabase auth errors
  if (error.message) {
    const message = error.message.toLowerCase()
    
    if (message.includes('invalid login credentials')) {
      return { message: 'Invalid email or password', field: 'email' }
    }
    
    if (message.includes('email not confirmed')) {
      return { message: 'Please check your email and click the verification link', field: 'email' }
    }
    
    if (message.includes('user not found')) {
      return { message: 'No account found with this email address', field: 'email' }
    }
    
    if (message.includes('password')) {
      return { message: 'Password is incorrect', field: 'password' }
    }
    
    if (message.includes('too many requests')) {
      return { message: 'Too many attempts. Please wait a few minutes before trying again' }
    }
    
    if (message.includes('email already registered')) {
      return { message: 'An account with this email already exists', field: 'email' }
    }
    
    if (message.includes('weak password')) {
      return { message: 'Password is too weak. Please choose a stronger password', field: 'password' }
    }
    
    return { message: error.message }
  }
  
  return { message: 'An unexpected error occurred' }
}

export const getAuthRedirectUrl = (): string => {
  if (typeof window === 'undefined') return '/dashboard'
  
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get('redirect') || '/dashboard'
}

export const isProtectedRoute = (pathname: string): boolean => {
  const protectedRoutes = ['/dashboard', '/profile', '/settings', '/orders']
  return protectedRoutes.some(route => pathname.startsWith(route))
}

export const isAuthRoute = (pathname: string): boolean => {
  const authRoutes = ['/auth/simple', '/auth/signup', '/auth/forgot-password', '/auth/reset-password']
  return authRoutes.some(route => pathname.startsWith(route))
}

export const createAuthHeaders = (session: any) => {
  if (!session?.access_token) return {}
  
  return {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json'
  }
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}


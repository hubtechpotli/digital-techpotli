import { User, Session } from '@supabase/supabase-js'

export interface AuthUser extends User {
  // Add any custom user properties here
  role?: 'user' | 'admin' | 'seller'
  profile?: {
    first_name?: string
    last_name?: string
    phone?: string
    business_name?: string
  }
}

export interface AuthSession extends Session {
  user: AuthUser
}

export interface AuthState {
  user: AuthUser | null
  session: AuthSession | null
  loading: boolean
  error: string | null
  initialized: boolean
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string, metadata?: any) => Promise<{ error: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
  updateProfile: (updates: Partial<AuthUser['profile']>) => Promise<{ error: any }>
  refreshSession: () => Promise<void>
  checkAuthStatus: () => Promise<boolean>
}

export interface LoginFormData {
  email: string
  password: string
  remember?: boolean
}

export interface SignUpFormData {
  email: string
  password: string
  confirmPassword: string
  firstName?: string
  lastName?: string
  phone?: string
  businessName?: string
  acceptTerms: boolean
}

export interface AuthError {
  message: string
  code?: string
  field?: string
}


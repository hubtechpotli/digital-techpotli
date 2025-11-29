'use client';
import { useEffect, useState, Suspense, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { AlertCircle, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react'
import { validateEmail, validatePassword } from '@/lib/auth/utils'
import Image from 'next/image'

function LoginContent() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isValidating, setIsValidating] = useState(false)
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const params = useSearchParams()
  const redirectTo = params?.get('redirect') ?? '/dashboard'

  useEffect(() => {
    const q = typeof window !== 'undefined' ? (window.location.search + window.location.hash) : '';
    if (!q.includes('redirect') && !q.includes('access_token') && !q.includes('type=')) return;
    let cancelled = false;

    async function handleRedirectSession() {
      try {
        // Optimized session check - single call instead of polling
        const { data, error } = await supabase.auth.getSession();
        if (data?.session && !cancelled) {
          router.replace(redirectTo);
          return;
        }
      } catch (err) {
        console.error('handleRedirectSession error', err);
      }
    }

    // Immediate check without delays
    handleRedirectSession();
    return () => { cancelled = true; };
  }, [router, redirectTo]);

  // Optimized real-time validation - reduced delay
  useEffect(() => {
    const validateForm = async () => {
      setIsValidating(true)
      const newErrors: Record<string, string> = {}

      // Email validation
      if (formData.email) {
        if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address'
        }
      }

      // Password validation
      if (formData.password) {
        const passwordValidation = validatePassword(formData.password)
        if (!passwordValidation.valid) {
          newErrors.password = passwordValidation.errors[0]
        }
      }

      setErrors(newErrors)
      setIsValidating(false)
    }

    // Reduced timeout for faster validation
    const timeoutId = setTimeout(validateForm, 150)
    return () => clearTimeout(timeoutId)
  }, [formData.email, formData.password])

  const handleInputChange = useCallback((field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear specific field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }, [errors])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Final validation
    const newErrors: Record<string, string> = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else {
      const passwordValidation = validatePassword(formData.password)
      if (!passwordValidation.valid) {
        newErrors.password = passwordValidation.errors[0]
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Perform actual authentication
    setLoading(true)
    setError(null)
    
    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      })
      
      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }
      
      if (data.user) {
        // Check if email is confirmed
        if (!data.user.email_confirmed_at) {
          setError('Please check your email and confirm your account before signing in.')
          setLoading(false)
          return
        }
        
        // Get session after successful login
        const { data: sessionData } = await supabase.auth.getSession()
        
        if (sessionData?.session) {
          // Instant redirect - no delays
          try {
            await router.replace(redirectTo)
          } catch (err) {
            console.error('Router.replace error:', err)
            // Fallback to window.location
            if (typeof window !== 'undefined') {
              window.location.href = redirectTo
            }
          }
        } else {
          // Instant fallback redirect
          if (typeof window !== 'undefined') {
            window.location.href = redirectTo
          }
        }
      }
    } catch (err: any) {
      setError('An unexpected error occurred. Please try again.')
      console.error('Login error:', err)
    } finally {
      setLoading(false)
    }
  }, [formData.email, formData.password, router, redirectTo])

  const isFormValid = useMemo(() => 
    formData.email && formData.password && Object.keys(errors).length === 0,
    [formData.email, formData.password, errors]
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            {/* Techpotli Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/New_Techpotli_Logo_(2)[2][2].png"
                alt="Techpotli Logo"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your Techpotli account
            </p>
            {redirectTo !== '/dashboard' && (
              <p className="mt-1 text-xs text-blue-600">
                You'll be redirected after login
              </p>
            )}
          </div>
          
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className={`pr-10 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    {formData.email && !errors.email && validateEmail(formData.email) && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-500" />
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Enter your password"
                      className={`pr-10 ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.remember}
                      onCheckedChange={(checked) => handleInputChange('remember', checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <Link 
                    href="/auth/forgot-password" 
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                    prefetch={true}
                  >
                    Forgot password?
                  </Link>
                </div>

                {errors.general && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-600">{errors.general}</p>
                  </div>
                )}

                {error && !errors.general && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading || !isFormValid || isValidating}
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Signing in...
                    </div>
                  ) : isValidating ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Validating...
                    </div>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link 
                    href="/auth/signup" 
                    className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    prefetch={true}
                  >
                    Sign up here
                  </Link>
                </p>
                <p className="text-sm text-gray-600">
                  Need to confirm your email?{' '}
                  <Link 
                    href="/auth/check-email" 
                    className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    prefetch={true}
                  >
                    Resend confirmation
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}


"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSimpleAuth } from '@/lib/auth/SimpleAuthProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, User, Mail, Phone, ArrowRight, Loader2, AlertCircle, Home, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

// Force dynamic rendering for instant loading
export const dynamic = 'force-dynamic'

export default function FastAuthPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  
  // Safely get auth context with fallback
  let authContext
  let signIn: (firstName: string, lastName: string, email: string, phone?: string) => Promise<{ success: boolean; error?: string; isNewUser?: boolean }>
  
  try {
    authContext = useSimpleAuth()
    signIn = authContext.signIn
  } catch (error) {
    // If auth context is not available, create a fallback signIn function
    signIn = async () => {
      // Try to use the service directly
      try {
        const { SimpleAuthService } = await import('@/lib/auth/simple-auth')
        const result = await SimpleAuthService.signIn(
          formData.firstName,
          formData.lastName,
          formData.email,
          formData.phone || undefined
        )
        return {
          success: !!result.user && !result.error,
          error: result.error ?? undefined,
          isNewUser: result.is_new_user
        }
      } catch (err: any) {
        return { success: false, error: 'Authentication service not available. Please refresh the page.' }
      }
    }
  }
  const router = useRouter()

  // Mount check for instant loading
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle mobile back button
  useEffect(() => {
    const handlePopState = () => {
      router.push('/')
    }

    // Add popstate listener for mobile back button
    window.addEventListener('popstate', handlePopState)
    
    // Push a state to enable back button detection
    window.history.pushState({ page: 'signin' }, '', window.location.href)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [router])

  // Go to home page function
  const goToHome = () => {
    router.push('/')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    
    // Also clear general errors when user starts typing
    if (errors.general) {
      setErrors(prev => ({
        ...prev,
        general: ''
      }))
    }
    
    // Real-time validation for better UX
    if (name === 'phone' && value.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/
      const cleanPhone = value.replace(/[\s\-\(\)]/g, '')
      
      if (!phoneRegex.test(value) || cleanPhone.length < 8 || cleanPhone.length > 16) {
        setErrors(prev => ({
          ...prev,
          phone: 'Please enter a valid phone number (8-16 digits)'
        }))
      } else {
        // Clear phone error if validation passes
        setErrors(prev => ({
          ...prev,
          phone: ''
        }))
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Improved phone validation - more flexible
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      
      if (!phoneRegex.test(formData.phone) || cleanPhone.length < 8 || cleanPhone.length > 16) {
        newErrors.phone = 'Please enter a valid phone number (8-16 digits)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    
    try {
      const result = await signIn(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone || undefined
      )

      if (result.success) {
        setIsNewUser(result.isNewUser || false)
        setSuccess(true)
        
        // Instant redirect - no delay
        router.push('/dashboard')
      } else {
        setErrors({ general: result.error || 'Authentication failed' })
      }
    } catch (error: any) {
      setErrors({ general: 'An unexpected error occurred. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = () => {
    // Check required fields
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      return false
    }
    
    // Check email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return false
    }
    
    // Check phone validation only if phone is provided
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      
      if (!phoneRegex.test(formData.phone) || cleanPhone.length < 8 || cleanPhone.length > 16) {
        return false
      }
    }
    
    return true
  }

  // Show loading state only briefly - reduce timeout
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }
  
  // Don't wait for auth provider - show form immediately
  // The auth provider loading shouldn't block the sign-in page

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {isNewUser ? 'Welcome!' : 'Welcome Back!'}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isNewUser 
                    ? 'Your account has been created successfully.' 
                    : 'You have been logged in successfully.'
                  }
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span>Redirecting to dashboard...</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header with Home Button */}
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            size="sm"
            onClick={goToHome}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToHome}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
        </div>

        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image
              src="/New_Techpotli_Logo_(2)[2][2].png"
              alt="Techpotli Logo"
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Techpotli</h1>
          <p className="text-gray-600 mt-2">Enter your details to continue</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">
              No password required! Just enter your details and you're in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <Alert variant="destructive">
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
                      required
                      autoComplete="given-name"
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`pl-10 ${errors.lastName ? 'border-red-500' : ''}`}
                      required
                      autoComplete="family-name"
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    required
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                    autoComplete="tel"
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <Button
                type="submit"
                className={`w-full h-12 text-lg font-semibold transition-all duration-200 ${
                  !isFormValid() || loading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                }`}
                disabled={!isFormValid() || loading}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>Sign In</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                By signing in, you agree to our{' '}
                <a href="/terms" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Need help? Contact us at{' '}
            <a href="mailto:info@techpotli.com" className="text-blue-600 hover:underline">
              info@techpotli.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
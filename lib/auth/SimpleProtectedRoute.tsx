'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSimpleAuth } from './SimpleAuthProvider'
import { Loader2, AlertCircle } from 'lucide-react'

interface SimpleProtectedRouteProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  redirectTo?: string
}

export function SimpleProtectedRoute({ 
  children, 
  fallback,
  redirectTo = '/auth/simple'
}: SimpleProtectedRouteProps) {
  // Safely get auth context with fallback
  let authContext
  try {
    authContext = useSimpleAuth()
  } catch (error) {
    // Auth context not available yet, use fallback values
    authContext = {
      user: null,
      loading: true,
      isAuthenticated: false
    }
  }
  
  const { user, loading, isAuthenticated } = authContext
  const router = useRouter()
  const [showLoading, setShowLoading] = useState(true)

  // Add timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false)
      // If still loading after 3 seconds, redirect to sign in
      if (loading) {
        router.push(redirectTo)
      }
    }, 3000)

    return () => clearTimeout(timeout)
  }, [loading, router, redirectTo])

  // Update showLoading when loading state changes
  useEffect(() => {
    if (!loading) {
      setShowLoading(false)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [user, loading, isAuthenticated, router, redirectTo])

  if (loading && showLoading) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-2xl">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Authentication Required</h2>
            <p className="text-gray-600 mb-6">Please sign in to view your orders.</p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '/auth/simple'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign In
              </button>
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-all duration-300"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default SimpleProtectedRoute


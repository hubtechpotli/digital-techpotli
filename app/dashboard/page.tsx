"use client"

console.log('Cursor patch applied: app/dashboard/page.tsx');

import React, { useEffect, useState } from 'react';
import { useSimpleAuth } from '@/lib/auth/SimpleAuthProvider';
import { SimpleProtectedRoute } from '@/lib/auth/SimpleProtectedRoute';
import { CacheStats } from "@/components/cache-stats"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import Image from 'next/image';

// Force dynamic rendering to avoid auth context issues during static generation
export const dynamic = 'force-dynamic'

function DashboardContent() {
  // Safely get auth context with fallback
  let authContext
  try {
    authContext = useSimpleAuth()
  } catch (error) {
    // Auth context not available yet, use fallback values
    authContext = {
      user: null,
      loading: true
    }
  }
  
  const { user, loading } = authContext;
  const [profile, setProfile] = useState<any>(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showLoading, setShowLoading] = useState(true);

  // Add timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(false);
      setProfileLoading(false);
    }, 3000); // 3 second timeout

    return () => clearTimeout(timeout);
  }, []);

  // Load user profile from simple auth
  useEffect(() => {
    if (user) {
      setProfile({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        created_at: user.created_at
      });
      setProfileLoading(false);
      setShowLoading(false);
    } else {
      setProfileLoading(false);
    }
  }, [user]);

  // Update showLoading when loading state changes
  useEffect(() => {
    if (!loading) {
      setShowLoading(false);
    }
  }, [loading]);

  // Debug logging removed for production

  if ((loading || profileLoading) && showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Remove the authentication check - let users see the dashboard and redirect on card click

  // Function to handle card clicks - redirect to sign-in if not authenticated
  const handleCardClick = (targetPath: string) => {
    if (!user) {
      // Instant redirect to sign-in page
      window.location.href = '/auth/simple';
    } else {
      // Instant navigation to the target path
      window.location.href = targetPath;
    }
  };

  // User found, rendering content
  
  // Type assertion for user
  const typedUser = user as any;
  
  // Debug logging removed for production

  // Simple auth - no email confirmation required

  // Show error message if there was a profile loading error
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="bg-white/90 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-2xl">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Loading Error</h2>
            <p className="text-gray-600 mb-6">
              There was an error loading your profile: {error}
            </p>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.reload()
                }
              }}
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {user && <DashboardHeader user={typedUser} profile={profile} />}
        <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 pt-16 sm:pt-20">
          <div className="space-y-4 sm:space-y-6">
            {/* Welcome Section - Compact */}
            <div className="text-center mb-6 sm:mb-8 relative">
              {/* Subtle Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
              
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">
                {user ? (
                  <>Welcome back, <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">{profile?.full_name || profile?.first_name || typedUser?.user_metadata?.full_name || typedUser?.email?.split('@')[0] || 'User'}</span>!</>
                ) : (
                  <>Welcome to <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">Techpotli</span>!</>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
                {user ? 'Manage your website projects and track your orders with ease.' : 'Sign in to access your dashboard and manage your website projects.'}
              </p>
            </div>

            {/* Action Cards Section - Mobile First */}
            <div className="max-w-4xl mx-auto">
              {/* Compact Action Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 sm:gap-4">
                {/* Keep only Create New Order Card */}
                <div 
                  className="group relative cursor-pointer"
                  onClick={() => handleCardClick('/dashboard/order')}
                >
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 truncate">Create Order</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                          Start a new website project
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Cache Statistics (Development Only) */}
        <CacheStats />
      </div>
    )
}

export default function DashboardPage() {
  return (
    <SimpleProtectedRoute>
      <DashboardContent />
    </SimpleProtectedRoute>
  )
}
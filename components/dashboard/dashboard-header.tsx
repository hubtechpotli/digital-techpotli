"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { User, Menu, X, LogOut, Package } from "lucide-react"
import { useSimpleAuth } from "@/lib/auth/SimpleAuthProvider"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  user: any
  profile: any | null
}

export function DashboardHeader({ user, profile }: DashboardHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { signOut } = useSimpleAuth()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  return (
    <>
      <header className="fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between h-16 pl-4 pr-6">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            {/* Techpotli Logo */}
            <div className="relative">
              <div className="flex items-center">
                <Image
                  src="/New_Techpotli_Logo_(2)[2][2].png"
                  alt="Techpotli Logo"
                  width={180}
                  height={50}
                  className="h-8 lg:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Desktop Navigation and Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Orders Button */}
            <Link href="/dashboard/orders">
              <button
                className="button-54"
                role="button"
              >
                <Package className="w-4 h-4 mr-2" />
                <span>Orders</span>
              </button>
            </Link>

            {/* User Profile Dropdown */}
            <div className="relative group">
              <button
                className="button-54 flex items-center"
                role="button"
              >
                <User className="w-4 h-4 mr-2" />
                <span>{profile?.full_name || user.email?.split('@')[0] || 'User'}</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile Settings
                  </Link>
                  <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account Settings
                  </Link>
                  <hr className="my-2" />
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2 inline" />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="button-54"
              role="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-200/30 rounded-2xl shadow-2xl p-6">
            <div className="space-y-4">
              {/* Orders Button */}
              <Link href="/dashboard/orders" className="block">
                <button
                  className="button-54 w-full justify-center"
                  role="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Package className="w-4 h-4 mr-2" />
                  <span>Orders</span>
                </button>
              </Link>

              {/* User Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600">Logged in as:</p>
                  <p className="font-semibold text-gray-800">{profile?.full_name || user.email}</p>
                </div>
                
                {/* Profile Actions */}
                <div className="space-y-2">
                  <Link href="/dashboard/profile" className="block">
                    <button
                      className="button-54 w-full justify-center"
                      role="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      <span>Profile</span>
                    </button>
                  </Link>
                  
                  <button
                    onClick={() => {
                      handleSignOut()
                      setIsMobileMenuOpen(false)
                    }}
                    className="button-54 w-full justify-center text-red-600"
                    role="button"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DashboardHeader
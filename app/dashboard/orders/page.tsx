"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { useSimpleAuth } from "@/lib/auth/SimpleAuthProvider"
import { SimpleProtectedRoute } from "@/lib/auth/SimpleProtectedRoute"
import { 
  Package, 
  Calendar, 
  DollarSign, 
  Building2,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Home
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Order {
  id: string
  owner_name: string
  company_name: string
  plan: string
  total_amount: number
  status: string
  created_at: string
  logo_url?: string
  orders_images?: Array<{
    id: string
    image_url: string
    image_name: string
  }>
}

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  confirmed: { label: "Confirmed", color: "bg-blue-100 text-blue-800", icon: CheckCircle },
  in_progress: { label: "In Progress", color: "bg-orange-100 text-orange-800", icon: AlertCircle },
  completed: { label: "Completed", color: "bg-green-100 text-green-800", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: XCircle },
}

function OrdersPageContent() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  
  // Use SimpleAuth - user is guaranteed to be authenticated due to SimpleProtectedRoute
  const { user, loading: authLoading } = useSimpleAuth()

  // Handle hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !authLoading && user) {
      fetchOrders()
    }
  }, [mounted, authLoading, user])

  const fetchOrders = async () => {
    try {
      if (!user) {
        setError('User information not available')
        setLoading(false)
        return
      }

      // Use the view-orders API endpoint with user's email and phone
      const params = new URLSearchParams()
      if (user.email) params.append('email', user.email)
      if (user.phone) params.append('phone', user.phone)

      const response = await fetch(`/api/view-orders?${params.toString()}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch orders')
      }

      setOrders(data.orders || [])
    } catch (error) {
      console.error('Error fetching orders:', error)
      setError('Failed to load orders')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusConfig = (status: string) => {
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
  }

  if (!mounted || authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Loading your orders...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {mounted && user && <DashboardHeader user={user} profile={user} />}
        <div className="flex items-center justify-center min-h-screen pt-24">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="bg-white/90 backdrop-blur-xl rounded-xl p-8 border border-white/20 shadow-2xl">
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Orders</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              <div className="space-y-3">
                <Button 
                  onClick={fetchOrders} 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Try Again
                </Button>
                <Button 
                  onClick={() => window.location.href = '/dashboard'} 
                  variant="outline" 
                  className="w-full"
                >
                  Back to Dashboard
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {mounted && user && <DashboardHeader user={user} profile={user} />}
      <div className="container mx-auto px-6 py-8 pt-24">
        {/* Back to Dashboard Button */}
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link href="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Orders</h1>
          <p className="text-gray-600">Track and manage your website orders</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-6">
            <p className="text-red-800 font-medium">Error</p>
            <p className="text-red-700 text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Create New Order Button */}
        <div className="mb-6">
          <Link href="/dashboard/order" prefetch={true}>
            <Button className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Create New Order
            </Button>
          </Link>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Package className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-800 mb-2">No Orders Yet</h3>
              <p className="text-slate-600 mb-6">You haven't created any orders yet.</p>
              <Link href="/dashboard/order" prefetch={true}>
                <Button>Create Your First Order</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => {
              const status = getStatusConfig(order.status)
              const StatusIcon = status.icon
              
              return (
                <Card key={order.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {order.logo_url ? (
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-100">
                            <Image
                              src={order.logo_url}
                              alt="Company logo"
                              fill
                              className="object-cover"
                              sizes="40px"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = '<div class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>';
                                }
                              }}
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-slate-400" />
                          </div>
                        )}
                        <div>
                          <CardTitle className="text-lg">{order.company_name}</CardTitle>
                          <CardDescription>{order.owner_name}</CardDescription>
                        </div>
                      </div>
                      <Badge className={`${status.color} flex items-center gap-1`}>
                        <StatusIcon className="w-3 h-3" />
                        {status.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Plan:</span>
                      <Badge variant="outline">{order.plan.toUpperCase()}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Total Amount:</span>
                      <span className="font-semibold text-green-600">₹{order.total_amount}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Created:</span>
                      <span className="text-slate-500">{formatDate(order.created_at)}</span>
                    </div>
                    
                    {order.orders_images && order.orders_images.length > 0 && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Images:</span>
                        <span className="text-slate-500">{order.orders_images.length} uploaded</span>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/dashboard/orders/${order.id}`}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default function OrdersPage() {
  return (
    <SimpleProtectedRoute>
      <OrdersPageContent />
    </SimpleProtectedRoute>
  )
}

// Force dynamic rendering to prevent hydration issues
export const dynamic = 'force-dynamic'


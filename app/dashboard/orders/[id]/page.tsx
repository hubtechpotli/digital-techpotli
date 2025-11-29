"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { useSimpleAuth } from "@/lib/auth/SimpleAuthProvider"
import { SimpleProtectedRoute } from "@/lib/auth/SimpleProtectedRoute"
import { 
  ArrowLeft,
  Building2,
  Calendar,
  DollarSign,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Loader2,
  Image as ImageIcon,
  Phone,
  Mail,
  MapPin,
  Globe,
  Palette,
  Clock as TimeIcon,
  FileText,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
  Home
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface OrderDetails {
  id: string
  user_id: string
  owner_name: string
  company_name: string
  mobile: string
  email: string
  address: string
  pincode: string
  location: string
  category: string
  services: string
  desc_short: string
  desc_long: string
  logo_url?: string
  gst_number?: string
  website_style?: string
  primary_color?: string
  
  facebook_url?: string
  instagram_url?: string
  linkedin_url?: string
  whatsapp_number?: string
  youtube_url?: string
  plan: string
  base_price: number
  gst_amount: number
  total_amount: number
  payment_screenshot_url?: string
  status: string
  created_at: string
  updated_at: string
  orders_images?: Array<{
    id: string
    image_url: string
    image_name: string
    created_at: string
  }>
}

const statusConfig = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  confirmed: { label: "Confirmed", color: "bg-blue-100 text-blue-800", icon: CheckCircle },
  in_progress: { label: "In Progress", color: "bg-orange-100 text-orange-800", icon: AlertCircle },
  completed: { label: "Completed", color: "bg-green-100 text-green-800", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: XCircle },
}

function OrderDetailsPageContent() {
  const params = useParams()
  const router = useRouter()
  const [order, setOrder] = useState<OrderDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useSimpleAuth()

  useEffect(() => {
    if (params.id && user) {
      fetchOrderDetails(params.id as string)
    }
  }, [params.id, user])

  const fetchOrderDetails = async (orderId: string) => {
    try {
      if (!user) {
        setError('Please sign in to view order details')
        setLoading(false)
        return
      }

      // Build query params with user email/phone for authentication
      const params = new URLSearchParams()
      if (user.email) params.append('email', user.email)
      if (user.phone) params.append('phone', user.phone)

      const response = await fetch(`/api/orders/${orderId}?${params.toString()}`)
      const data = await response.json()
      
      if (response.ok) {
        setOrder(data.order)
      } else {
        setError(data.error || 'Failed to fetch order details')
      }
    } catch (error) {
      setError('Failed to fetch order details')
      console.error('Order details fetch error:', error)
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {user && <DashboardHeader user={user} profile={user} />}
        <div className="flex items-center justify-center min-h-screen pt-24">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Loading order details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {user && <DashboardHeader user={user} profile={user} />}
        <div className="container mx-auto px-6 py-8 pt-24">
          <div className="mb-6">
            <Button variant="outline" asChild className="mb-4">
              <Link href="/dashboard/orders">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Orders
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="text-red-500 mb-4">
                <XCircle className="w-12 h-12 mx-auto" />
              </div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">Order Not Found</h2>
              <p className="text-slate-600 mb-4">{error || 'The order you are looking for does not exist.'}</p>
              <Button onClick={() => router.push('/dashboard/orders')}>
                View All Orders
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const status = getStatusConfig(order.status)
  const StatusIcon = status.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {user && <DashboardHeader user={user} profile={user} />}
      <div className="container mx-auto px-6 py-8 pt-24">
        {/* Header */}
        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard/orders">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Orders
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">
                <Home className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Details</h1>
          <p className="text-gray-600">Complete information about your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Order Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {order.logo_url ? (
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100">
                        <Image
                          src={order.logo_url}
                          alt="Company logo"
                          fill
                          className="object-cover"
                          sizes="64px"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center"><svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>';
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-slate-400" />
                      </div>
                    )}
                    <div>
                      <CardTitle className="text-2xl">{order.company_name}</CardTitle>
                      <CardDescription className="text-lg">{order.owner_name}</CardDescription>
                    </div>
                  </div>
                  <Badge className={`${status.color} flex items-center gap-2 px-3 py-1`}>
                    <StatusIcon className="w-4 h-4" />
                    {status.label}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">Plan</label>
                    <p className="text-lg font-semibold">{order.plan.toUpperCase()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Total Amount</label>
                    <p className="text-lg font-semibold text-green-600">₹{order.total_amount}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Created</label>
                    <p className="text-sm text-slate-500">{formatDate(order.created_at)}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Last Updated</label>
                    <p className="text-sm text-slate-500">{formatDate(order.updated_at)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Business Information
                </CardTitle>
                <CardDescription>Complete business details provided by the customer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Mobile Number
                    </label>
                    <p className="text-slate-700 mt-1">{order.mobile}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <p className="text-slate-700 mt-1">{order.email}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Complete Address
                    </label>
                    <p className="text-slate-700 mt-1">{order.address}, {order.location} - {order.pincode}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Business Category</label>
                    <p className="text-slate-700 mt-1">{order.category}</p>
                  </div>
                  {/* Operating hours removed from UI */}
                </div>
              </CardContent>
            </Card>

            {/* Services & Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Services & Description
                </CardTitle>
                <CardDescription>Detailed information about the business services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Services Offered</label>
                  <p className="text-slate-700 mt-1">{order.services}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Short Description</label>
                  <p className="text-slate-700 mt-1">{order.desc_short}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Detailed Description</label>
                  <p className="text-slate-700 mt-1 leading-relaxed">{order.desc_long}</p>
                </div>
              </CardContent>
            </Card>

            {/* Branding & Design Preferences */}
            {(order.website_style || order.primary_color || order.gst_number) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    Branding & Design Preferences
                  </CardTitle>
                  <CardDescription>Design and branding preferences for the website</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.website_style && (
                      <div>
                        <label className="text-sm font-medium text-slate-600">Website Style</label>
                        <p className="text-slate-700 mt-1 capitalize">{order.website_style}</p>
                      </div>
                    )}
                    {order.primary_color && (
                      <div>
                        <label className="text-sm font-medium text-slate-600">Primary Color</label>
                        <div className="flex items-center gap-2 mt-1">
                          <div 
                            className="w-6 h-6 rounded border border-slate-300" 
                            style={{ backgroundColor: order.primary_color }}
                          ></div>
                          <p className="text-slate-700">{order.primary_color}</p>
                        </div>
                      </div>
                    )}
                    {/* Domain preference removed */}
                    {order.gst_number && (
                      <div>
                        <label className="text-sm font-medium text-slate-600">GST Number</label>
                        <p className="text-slate-700 mt-1">{order.gst_number}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Social Media Links */}
            {(order.facebook_url || order.instagram_url || order.linkedin_url || order.whatsapp_number || order.youtube_url) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Social Media Links
                  </CardTitle>
                  <CardDescription>Social media presence and contact information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.facebook_url && (
                      <div className="flex items-center gap-3">
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <a 
                          href={order.facebook_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          Facebook Page
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {order.instagram_url && (
                      <div className="flex items-center gap-3">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        <a 
                          href={order.instagram_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-pink-600 hover:text-pink-800 flex items-center gap-1"
                        >
                          Instagram Profile
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {order.linkedin_url && (
                      <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-blue-700" />
                        <a 
                          href={order.linkedin_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-700 hover:text-blue-900 flex items-center gap-1"
                        >
                          LinkedIn Profile
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {order.whatsapp_number && (
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        <a 
                          href={`https://wa.me/${order.whatsapp_number}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-600 hover:text-green-800 flex items-center gap-1"
                        >
                          WhatsApp: {order.whatsapp_number}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    {order.youtube_url && (
                      <div className="flex items-center gap-3">
                        <Youtube className="w-5 h-5 text-red-600" />
                        <a 
                          href={order.youtube_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-600 hover:text-red-800 flex items-center gap-1"
                        >
                          YouTube Channel
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>Order pricing and payment details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">Base Price</label>
                    <p className="text-lg font-semibold text-slate-700">₹{order.base_price}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">GST (18%)</label>
                    <p className="text-lg font-semibold text-slate-700">₹{order.gst_amount}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Total Amount</label>
                    <p className="text-lg font-semibold text-green-600">₹{order.total_amount}</p>
                  </div>
                </div>
                {order.payment_screenshot_url && (
                  <div>
                    <label className="text-sm font-medium text-slate-600">Payment Screenshot</label>
                    <div className="mt-2">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            window.open(order.payment_screenshot_url, '_blank')
                          }
                        }}
                        className="flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Payment Screenshot
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Uploaded Images */}
            {order.orders_images && order.orders_images.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Uploaded Images ({order.orders_images.length})
                  </CardTitle>
                  <CardDescription>Images you've uploaded for this project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {order.orders_images.map((image) => (
                      <div key={image.id} className="relative group">
                        <div className="relative w-full h-32 rounded-lg overflow-hidden bg-slate-100">
                          <Image
                            src={image.image_url}
                            alt={image.image_name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                            sizes="(max-width: 768px) 50vw, 33vw"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-slate-100 rounded-lg flex items-center justify-center"><svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
                              }
                            }}
                          />
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-medium text-slate-700 truncate">{image.image_name}</p>
                          <p className="text-xs text-slate-500">{formatDate(image.created_at)}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => {
                            if (typeof window !== 'undefined') {
                              window.open(image.image_url, '_blank')
                            }
                          }}
                        >
                          <Eye className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Order Created</p>
                      <p className="text-xs text-slate-500">{formatDate(order.created_at)}</p>
                    </div>
                  </div>
                  {order.status === 'confirmed' && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Order Confirmed</p>
                        <p className="text-xs text-slate-500">Your order has been confirmed</p>
                      </div>
                    </div>
                  )}
                  {order.status === 'in_progress' && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Work In Progress</p>
                        <p className="text-xs text-slate-500">Development has started</p>
                      </div>
                    </div>
                  )}
                  {order.status === 'completed' && (
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Order Completed</p>
                        <p className="text-xs text-slate-500">Your project is ready</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrderDetailsPage() {
  return (
    <SimpleProtectedRoute>
      <OrderDetailsPageContent />
    </SimpleProtectedRoute>
  )
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'


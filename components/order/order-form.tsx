"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from '@/lib/supabaseClient'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface Service {
  id: string
  name: string
  description: string
  base_price: number
  category: string
  features: string[]
}

interface OrderFormProps {
  user: SupabaseUser
  services: Service[]
}

interface FormData {
  // Business Information
  businessName: string
  businessType: string
  contactPerson: string
  phone: string
  email: string
  address: string

  // Service Selection
  serviceId: string
  selectedService?: Service

  // Technical Requirements
  domainPreference: string
  hostingPreference: string
  specialRequirements: string
  additionalFeatures: string[]

  // Calculated
  totalAmount: number
}

const additionalFeatureOptions = [
  { id: "seo", label: "SEO Optimization", price: 2000 },
  { id: "analytics", label: "Google Analytics Setup", price: 500 },
  { id: "social", label: "Social Media Integration", price: 1000 },
  { id: "ssl", label: "SSL Certificate", price: 1500 },
  { id: "backup", label: "Automated Backups", price: 1000 },
  { id: "maintenance", label: "6 Months Maintenance", price: 5000 },
]

export function OrderForm({ user, services }: OrderFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    businessType: "",
    contactPerson: "",
    phone: "",
    email: user.email || "",
    address: "",
    serviceId: "",
    domainPreference: "",
    hostingPreference: "shared",
    specialRequirements: "",
    additionalFeatures: [],
    totalAmount: 0,
  })

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...updates }

      // Calculate total amount
      const selectedService = services.find((s) => s.id === updated.serviceId)
      let total = selectedService?.base_price || 0

      // Add additional features cost
      updated.additionalFeatures.forEach((featureId) => {
        const feature = additionalFeatureOptions.find((f) => f.id === featureId)
        if (feature) total += feature.price
      })

      updated.totalAmount = total
      updated.selectedService = selectedService

      return updated
    })
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user.id,
          service_id: formData.serviceId,
          business_name: formData.businessName,
          business_type: formData.businessType,
          contact_person: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          domain_preference: formData.domainPreference,
          hosting_preference: formData.hostingPreference,
          special_requirements: formData.specialRequirements,
          additional_features: formData.additionalFeatures,
          total_amount: formData.totalAmount,
          status: "pending",
          payment_status: "pending",
        })
        .select()
        .single()

      if (orderError) throw orderError

      // Send user notification
      await fetch("/api/notifications/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          orderId: order.id,
          title: "Order Submitted Successfully",
          message: `Your order for ${formData.businessName} has been submitted. We'll review it and contact you within 24 hours.`,
          type: "success",
        }),
      })

      // Send team notification
      await fetch("/api/notifications/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: order.id,
          event: "new_order",
          orderData: {
            business_name: formData.businessName,
            service_name: formData.selectedService?.name,
            total_amount: formData.totalAmount,
            contact_person: formData.contactPerson,
            phone: formData.phone,
          },
        }),
      })

      router.push("/order/success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.businessName && formData.businessType && formData.contactPerson && formData.phone
      case 2:
        return formData.serviceId
      case 3:
        return formData.domainPreference && formData.hostingPreference
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <div className="space-y-8">
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-800">
            {currentStep === 1 && "Business Information"}
            {currentStep === 2 && "Service Selection"}
            {currentStep === 3 && "Technical Requirements"}
            {currentStep === 4 && "Review & Confirm"}
          </CardTitle>
          <CardDescription className="text-slate-600">
            {currentStep === 1 && "Tell us about your business and contact details"}
            {currentStep === 2 && "Choose the perfect website package for your needs"}
            {currentStep === 3 && "Specify your technical preferences and requirements"}
            {currentStep === 4 && "Review your order details before submission"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-slate-700 font-medium">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  placeholder="Your business name"
                  value={formData.businessName}
                  onChange={(e) => updateFormData({ businessName: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-slate-700 font-medium">
                  Business Type *
                </Label>
                <Select
                  value={formData.businessType}
                  onValueChange={(value) => updateFormData({ businessType: value })}
                >
                  <SelectTrigger className="border-slate-200 focus:border-blue-500">
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ISP">Internet Service Provider</SelectItem>
                    <SelectItem value="Trader">Trading Business</SelectItem>
                    <SelectItem value="Hotel">Hotel/Hospitality</SelectItem>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="Retail">Retail Store</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-slate-700 font-medium">
                  Contact Person *
                </Label>
                <Input
                  id="contactPerson"
                  placeholder="Primary contact person"
                  value={formData.contactPerson}
                  onChange={(e) => updateFormData({ contactPerson: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="011-47200987"
                  value={formData.phone}
                  onChange={(e) => updateFormData({ phone: e.target.value })}
                  className="border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-slate-700 font-medium">
                  Business Address
                </Label>
                <Textarea
                  id="address"
                  placeholder="Complete business address"
                  value={formData.address}
                  onChange={(e) => updateFormData({ address: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <RadioGroup
                value={formData.serviceId}
                onValueChange={(value) => updateFormData({ serviceId: value })}
                className="grid md:grid-cols-2 gap-4"
              >
                {services.map((service) => (
                  <div key={service.id} className="relative">
                    <RadioGroupItem value={service.id} id={service.id} className="peer sr-only" />
                    <Label
                      htmlFor={service.id}
                      className="flex flex-col p-6 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-300 peer-checked:border-blue-500 peer-checked:bg-blue-50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-slate-800">{service.name}</h3>
                        <span className="text-2xl font-bold text-blue-600">₹{service.base_price.toLocaleString()}</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-blue-600">+{service.features.length - 3} more features</div>
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Technical Requirements */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="domainPreference" className="text-slate-700 font-medium">
                    Domain Preference *
                  </Label>
                  <Input
                    id="domainPreference"
                    placeholder="e.g., mybusiness.com"
                    value={formData.domainPreference}
                    onChange={(e) => updateFormData({ domainPreference: e.target.value })}
                    className="border-slate-200 focus:border-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hostingPreference" className="text-slate-700 font-medium">
                    Hosting Preference *
                  </Label>
                  <Select
                    value={formData.hostingPreference}
                    onValueChange={(value) => updateFormData({ hostingPreference: value })}
                  >
                    <SelectTrigger className="border-slate-200 focus:border-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shared">Shared Hosting</SelectItem>
                      <SelectItem value="vps">VPS Hosting</SelectItem>
                      <SelectItem value="dedicated">Dedicated Server</SelectItem>
                      <SelectItem value="cloud">Cloud Hosting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 font-medium">Additional Features</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {additionalFeatureOptions.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg"
                    >
                      <Checkbox
                        id={feature.id}
                        checked={formData.additionalFeatures.includes(feature.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFormData({
                              additionalFeatures: [...formData.additionalFeatures, feature.id],
                            })
                          } else {
                            updateFormData({
                              additionalFeatures: formData.additionalFeatures.filter((f) => f !== feature.id),
                            })
                          }
                        }}
                      />
                      <Label htmlFor={feature.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <span className="text-slate-700">{feature.label}</span>
                          <span className="text-blue-600 font-medium">+₹{feature.price.toLocaleString()}</span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements" className="text-slate-700 font-medium">
                  Special Requirements
                </Label>
                <Textarea
                  id="specialRequirements"
                  placeholder="Any specific features, integrations, or requirements..."
                  value={formData.specialRequirements}
                  onChange={(e) => updateFormData({ specialRequirements: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                  rows={4}
                />
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-slate-800">Business Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-600">Business:</span> {formData.businessName}
                    </div>
                    <div>
                      <span className="text-slate-600">Type:</span> {formData.businessType}
                    </div>
                    <div>
                      <span className="text-slate-600">Contact:</span> {formData.contactPerson}
                    </div>
                    <div>
                      <span className="text-slate-600">Phone:</span> {formData.phone}
                    </div>
                    <div>
                      <span className="text-slate-600">Email:</span> {formData.email}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-slate-800">Technical Details</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-600">Domain:</span> {formData.domainPreference}
                    </div>
                    <div>
                      <span className="text-slate-600">Hosting:</span> {formData.hostingPreference}
                    </div>
                    {formData.additionalFeatures.length > 0 && (
                      <div>
                        <span className="text-slate-600">Additional Features:</span>
                        <ul className="ml-4 mt-1">
                          {formData.additionalFeatures.map((featureId) => {
                            const feature = additionalFeatureOptions.find((f) => f.id === featureId)
                            return <li key={featureId}>• {feature?.label}</li>
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-slate-800">Selected Package</h3>
                    <p className="text-slate-600">{formData.selectedService?.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">₹{formData.totalAmount.toLocaleString()}</div>
                    <p className="text-sm text-slate-600">Total Amount</p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t border-slate-200">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center gap-2"
              >
                {isLoading ? "Submitting..." : "Submit Order"}
                <CheckCircle className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderForm
"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  X, 
  CheckCircle,
  Building2,
  Palette,
  CreditCard,
  Receipt,
  Eye,
  FileText,
  Save,
  Download,
  AlertCircle,
  Loader2,
  Phone,
  MessageCircle,
  ArrowLeft,
  LogOut,
  Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SimpleAuthService } from "@/lib/auth/simple-auth"

// Zod Schema for form validation
const orderFormSchema = z.object({
  // Business Info
  owner_name: z.string().min(2, "Owner name must be at least 2 characters"),
  company_name: z.string().min(2, "Company name must be at least 2 characters"),
  mobile: z.string().optional(),
  email: z.string().email("Please enter a valid email"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Pincode must be exactly 6 digits"),
  location: z.string().min(2, "Location must be at least 2 characters"),
  category: z.enum(["Technology", "Healthcare", "Retail", "Education", "Finance", "Manufacturing", "Food & Beverage", "Real Estate", "Entertainment", "Automotive", "Fashion", "Travel", "Sports", "Legal", "Consulting", "Non-Profit", "Government", "Agriculture", "Construction", "Media", "Telecommunications", "Energy", "Transportation", "Hospitality", "Beauty & Wellness", "Home & Garden", "Pets", "Art & Design", "Music", "Photography", "Writing", "Marketing", "Other", "Employed"]).optional(),
  services: z.string().optional(),
  desc_short: z.string().optional(),
  
  // Branding
  gst_number: z.string().optional(),
  social_links: z.object({
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    whatsapp: z.string().optional(),
    youtube: z.string().optional(),
  }),
  
  
  // Plan & Payment
  plan: z.enum(["gold", "platinum", "diamond", "titanium", "ultimate", "ecommerce_basic", "ecommerce_premium", "social_seo_gmb"]),
  plan_duration: z.enum(["1", "3", "6", "9", "12"]),
  payment_type: z.enum(["upi", "cash"]),
  payment_screenshot: z.any().optional(),
  payment_screenshot_url: z.string().optional(),
})

type OrderFormData = z.infer<typeof orderFormSchema>

// Plan pricing
const PLAN_PRICES = {
  gold: 999,
  platinum: 1499,
  diamond: 2499,
  titanium: 3499,
  ultimate: 4999,
  ecommerce_basic: 1499,
  ecommerce_premium: 2499,
  social_seo_gmb: 2499,
}

// Helper function to safely get plan value
const getSafePlanValue = (plan: any): string => {
  if (plan && typeof plan === 'string' && plan.trim()) {
    return plan.trim()
  }
  return 'gold'
}

// Steps configuration
const STEPS = [
  { id: 1, title: "Business Info", icon: Building2 },
  { id: 2, title: "Branding", icon: Palette },
  { id: 3, title: "Plan & Payment", icon: CreditCard },
  { id: 4, title: "Payment Proof", icon: Receipt },
  { id: 5, title: "Review & Submit", icon: Eye },
]

export default function OrderFormPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set())
  const [hasAttemptedStep, setHasAttemptedStep] = useState<Set<number>>(new Set())
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [orderData, setOrderData] = useState<OrderFormData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSavingDraft, setIsSavingDraft] = useState(false)
  const [isExplicitSubmit, setIsExplicitSubmit] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [draftSaved, setDraftSaved] = useState(false)
  const router = useRouter()

  // Logout function
  const handleLogout = async () => {
    try {
      await SimpleAuthService.signOut()
      router.push('/') // Redirect to home page
    } catch (error) {
      console.error('Logout error:', error)
      // Still redirect to home page even if logout fails
      router.push('/')
    }
  }

  // Go to home page function
  const goToHome = () => {
    router.push('/')
  }

  const form = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      // Business Information
      owner_name: "",
      company_name: "",
      mobile: "",
      email: "",
      address: "",
      pincode: "",
      location: "",
      category: undefined,
      services: "",
      desc_short: "",
      
      // Branding
      gst_number: "",
      social_links: {
        facebook: "",
        instagram: "",
        linkedin: "",
        whatsapp: "",
        youtube: "",
      },
      
      
      // Plan & Payment
      plan: "gold",
      plan_duration: "3",
      payment_type: "upi",
      payment_screenshot: undefined,
      payment_screenshot_url: "",
    },
  })

  // Helper function to check if field should show error
  const shouldShowError = (fieldName: string) => {
    return touchedFields.has(fieldName) || isSubmitted
  }

  // Helper function to mark field as touched
  const markFieldAsTouched = (fieldName: string) => {
    setTouchedFields(prev => new Set(prev).add(fieldName))
  }

  const { watch, formState: { errors, isValid } } = form
  const watchedValues = watch()

  // Calculate pricing
  const planValue = getSafePlanValue(watchedValues.plan)
  const planDuration = watchedValues.plan_duration || "3"
  const basePrice = (PLAN_PRICES[planValue as keyof typeof PLAN_PRICES] || PLAN_PRICES.gold) * parseInt(planDuration as string)
  const gst = Math.round(basePrice * 0.18)
  const total = basePrice + gst

  // Environment variables
  const UPI_VPA = process.env.NEXT_PUBLIC_UPI_VPA || "techpotli@paytm"
  const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919810659666"

  // Auto-save draft functionality
  const saveDraft = useCallback(async (data: any) => {
    try {
      setIsSavingDraft(true)
      const draftData = {
        ...data,
        currentStep,
        timestamp: new Date().toISOString()
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('techpotli_order_draft', JSON.stringify(draftData))
      }
      setDraftSaved(true)
      
      setTimeout(() => setDraftSaved(false), 3000)
    } catch (error) {
      console.error('Error saving draft:', error)
    } finally {
      setIsSavingDraft(false)
    }
  }, [currentStep])

  // Load draft functionality
  const loadDraft = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedDraft = localStorage.getItem('techpotli_order_draft')
        if (savedDraft) {
          const draftData = JSON.parse(savedDraft)
          console.log('Loading draft data:', draftData)
          
          Object.entries(draftData).forEach(([key, value]) => {
            if (key !== 'currentStep' && key !== 'timestamp') {
              console.log(`Setting form value: ${key} =`, value)
              if (key in form.getValues()) {
                (form.setValue as any)(key, value)
              }
            }
          })
          
          setCurrentStep(draftData.currentStep || 1)
          form.trigger()
          
          return true
        }
      }
    } catch (error) {
      console.error('Error loading draft:', error)
    }
    return false
  }, [form])

  // Auto-save on form changes
  useEffect(() => {
    const subscription = form.watch((data: any) => {
      if (Object.keys(data).length > 0) {
        console.log('Form data changed:', data)
        saveDraft(data)
      }
    })
    return () => subscription.unsubscribe()
  }, [form.watch, saveDraft])

  // Load draft on mount
  useEffect(() => {
    const hasDraft = loadDraft()
    if (hasDraft) {
      console.log('Draft loaded successfully')
    }
  }, [loadDraft])

  // Autofill detection and sync - Comprehensive solution for Google autofill
  useEffect(() => {
    if (!isClient || currentStep !== 1) return

    const syncAutofillValue = (fieldName: string, inputElement: HTMLInputElement | HTMLTextAreaElement) => {
      const currentValue = inputElement.value
      const formValue = form.getValues(fieldName as any)
      
      // If input has value but form doesn't, sync it
      if (currentValue && currentValue !== formValue) {
        console.log(`Autofill detected for ${fieldName}:`, currentValue)
        form.setValue(fieldName as any, currentValue, { shouldValidate: true, shouldDirty: true })
        markFieldAsTouched(fieldName)
        
        // Trigger validation for this specific field
        form.trigger(fieldName as any).then(() => {
          // Trigger validation for all step 1 fields after autofill
          setTimeout(() => {
            form.trigger(['owner_name', 'company_name', 'email', 'address', 'pincode', 'location']).then(() => {
              console.log('Validation triggered after autofill')
            })
          }, 100)
        })
      }
    }

    // Function to check all inputs for autofill
    const checkForAutofill = () => {
      const fields = [
        { id: 'owner_name', name: 'owner_name' },
        { id: 'company_name', name: 'company_name' },
        { id: 'mobile', name: 'mobile' },
        { id: 'email', name: 'email' },
        { id: 'address', name: 'address' },
        { id: 'pincode', name: 'pincode' },
        { id: 'location', name: 'location' },
      ]

      fields.forEach(({ id, name }) => {
        const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
        if (element) {
          syncAutofillValue(name, element)
        }
      })
    }

    // Strategy 1: Polling - Check for autofill every 500ms for first 5 seconds
    const pollingInterval = setInterval(checkForAutofill, 500)
    const pollingTimeout = setTimeout(() => {
      clearInterval(pollingInterval)
    }, 5000)

    // Strategy 2: MutationObserver - Watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' || mutation.type === 'childList') {
          checkForAutofill()
        }
      })
    })

    // Observe the form container
    const formContainer = document.querySelector('form')
    if (formContainer) {
      observer.observe(formContainer, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['value'],
      })
    }

    // Strategy 3: Window focus/blur - Check when user interacts
    const handleWindowFocus = () => {
      setTimeout(checkForAutofill, 200)
    }
    window.addEventListener('focus', handleWindowFocus)
    window.addEventListener('blur', handleWindowFocus)

    // Strategy 4: Input event listeners - Autofill sometimes triggers input events
    const inputHandlers: Array<{ element: HTMLElement; handler: () => void }> = []
    const fields = ['owner_name', 'company_name', 'mobile', 'email', 'address', 'pincode', 'location']
    
    fields.forEach((fieldId) => {
      const element = document.getElementById(fieldId)
      if (element) {
        const handler = () => {
          setTimeout(() => checkForAutofill(), 100)
        }
        element.addEventListener('input', handler)
        element.addEventListener('change', handler)
        inputHandlers.push({ element, handler })
      }
    })

    return () => {
      clearInterval(pollingInterval)
      clearTimeout(pollingTimeout)
      observer.disconnect()
      window.removeEventListener('focus', handleWindowFocus)
      window.removeEventListener('blur', handleWindowFocus)
      inputHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('input', handler)
        element.removeEventListener('change', handler)
      })
    }
  }, [isClient, currentStep, form])

  const nextStep = async () => {
    if (currentStep < STEPS.length) {
      setHasAttemptedStep(prev => new Set(prev).add(currentStep))

      setIsExplicitSubmit(false)
      setIsSubmitting(false)

      // Final autofill sync before validation - especially important for mobile
      if (currentStep === 1 && typeof window !== 'undefined') {
        const syncAutofillValue = (fieldName: string, inputElement: HTMLInputElement | HTMLTextAreaElement) => {
          const currentValue = inputElement.value
          const formValue = form.getValues(fieldName as any)
          
          if (currentValue && currentValue !== formValue) {
            console.log(`Final autofill sync for ${fieldName}:`, currentValue)
            form.setValue(fieldName as any, currentValue, { shouldValidate: true, shouldDirty: true })
            markFieldAsTouched(fieldName)
          }
        }

        const fields = [
          { id: 'owner_name', name: 'owner_name' },
          { id: 'company_name', name: 'company_name' },
          { id: 'mobile', name: 'mobile' },
          { id: 'email', name: 'email' },
          { id: 'address', name: 'address' },
          { id: 'pincode', name: 'pincode' },
          { id: 'location', name: 'location' },
        ]

        fields.forEach(({ id, name }) => {
          const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
          if (element) {
            syncAutofillValue(name, element)
          }
        })

        // Wait a moment for form state to update
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      // Trigger validation for all fields before deciding to move forward
      const triggerResult = await form.trigger()
      console.log(`Validation trigger result: ${triggerResult}`)
      console.log('Current form values:', form.getValues())

      const isValid = isStepValid()
      console.log(`Step ${currentStep} validation:`, isValid)

      if (!isValid || !triggerResult) {
        console.log('Step validation failed, staying on current step')
        // Mark all fields as touched to show errors
        if (currentStep === 1) {
          const fields = ['owner_name', 'company_name', 'email', 'address', 'pincode', 'location', 'category']
          fields.forEach(field => markFieldAsTouched(field))
        }
        // Show validation error message
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        return
      }

      const currentData = form.getValues()
      saveDraft(currentData)

      // Skip the empty Branding step (step 2) and jump from Step 1 to Step 3
      if (currentStep === 1) {
        setCurrentStep(3)
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setIsExplicitSubmit(false)
      setIsSubmitting(false)
      
      const currentData = form.getValues()
      saveDraft(currentData)
      // If we're on Step 3 (Plan & Payment) go back to Step 1 (Business Info), skipping the empty Branding step
      if (currentStep === 3) {
        setCurrentStep(1)
      } else {
        setCurrentStep(currentStep - 1)
      }
    }
  }

  const onSubmit = async (data: OrderFormData) => {
    if (isSubmitting) {
      console.log('Form submission prevented - already submitting')
      return
    }
    
    if (!isExplicitSubmit) {
      console.log('Form submission prevented - not explicit submit')
      return
    }
    
    const submissionId = Math.random().toString(36).substr(2, 9)
    console.log(`Starting order submission with ID: ${submissionId}`)
    
    setIsSubmitting(true)
    setIsSubmitted(true)
    try {
      setIsLoading(true)
      
      console.log('Submitting order without authentication - using simple_users table')
      
      // Calculate pricing
      const planDuration = data.plan_duration || "3"
      const basePrice = (PLAN_PRICES[data.plan as keyof typeof PLAN_PRICES] || PLAN_PRICES.gold) * parseInt(planDuration as string);
      const gstAmount = Math.round(basePrice * 0.18);
      const totalAmount = basePrice + gstAmount;

      const orderData = {
        owner_name: data.owner_name,
        company_name: data.company_name,
        mobile: data.mobile,
        email: data.email,
        address: data.address,
        pincode: data.pincode,
        location: data.location,
        category: data.category,
        services: data.services,
        desc_short: data.desc_short,
        gst_number: data.gst_number || null,
        social_links: data.social_links,
        plan: data.plan,
        plan_duration: data.plan_duration,
        payment_type: data.payment_type,
        base_price: basePrice,
        gst_amount: gstAmount,
        total_amount: totalAmount,
        payment_screenshot_url: data.payment_screenshot_url || null
      }

      console.log('Creating order with data:', orderData)

      // Create FormData for file uploads
      const formData = new FormData()
      
      // Add all form fields
      Object.entries(orderData).forEach(([key, value]) => {
        if (key === 'social_links') {
          formData.append(key, JSON.stringify(value))
        } else if (value instanceof File) {
          console.log(`Adding file ${key}:`, value)
          formData.append(key, value)
        } else if (value !== null && value !== undefined) {
          formData.append(key, String(value))
        }
      })
      
      console.log('FormData contents:')
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value)
      }

      // Create order using new API endpoint
      const response = await fetch('/api/create-order-simple', {
        method: 'POST',
        body: formData, // Send FormData instead of JSON
      })

      const result = await response.json()
      
      if (!response.ok) {
        setError(`Failed to create order: ${result.error}`)
        setIsLoading(false)
        return
      }

      console.log('Order created successfully:', result.orderId)

      // Success - show success screen
      setOrderData(data)
      setIsSubmitted(true)
      
      // Clear draft after successful submission
      localStorage.removeItem('techpotli_order_draft')
      
    } catch (error: any) {
      console.error('Order submission error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit order'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    const values = form.getValues()
    
    switch (currentStep) {
      case 1: // Business Info
        const step1Valid = values.owner_name && values.owner_name.length >= 2 &&
               values.company_name && values.company_name.length >= 2 &&
               values.email && values.email.includes('@') &&
               values.address && values.address.length >= 5 &&
               values.pincode && values.pincode.length === 6 &&
               values.location && values.location.length >= 2 &&
               values.category
        console.log('Step 1 validation details:', {
          owner_name: values.owner_name,
          company_name: values.company_name,
          email: values.email,
          address: values.address,
          pincode: values.pincode,
          location: values.location,
          category: values.category,
          valid: step1Valid
        })
        return step1Valid
      
      case 2: // Branding
        console.log('Step 2 validation: true (optional)')
        return true // Branding step is optional
      
      case 3: // Plan & Payment
        const step3Valid = values.plan && values.plan_duration && values.payment_type
        console.log('Step 3 validation details:', {
          plan: values.plan,
          plan_duration: values.plan_duration,
          payment_type: values.payment_type,
          valid: step3Valid
        })
        return step3Valid
      
      case 4: // Payment Proof
        const step4Valid = values.payment_type === 'upi' 
          ? (values.payment_screenshot && values.payment_screenshot instanceof File)
          : true // Cash payments don't require screenshot
        console.log('Step 4 validation details:', {
          payment_type: values.payment_type,
          payment_screenshot: values.payment_screenshot,
          valid: step4Valid
        })
        return step4Valid
      
      case 5: // Review & Submit
        const step5Valid = isFormValidForSubmission()
        console.log('Step 5 validation:', step5Valid)
        return step5Valid
      
      default:
        console.log('Step validation: false (default)')
        return false
    }
  }

  const isFormValidForSubmission = () => {
    const values = form.getValues()
    
    const hasRequiredFields = values.owner_name && values.owner_name.length >= 2 &&
                             values.company_name && values.company_name.length >= 2 &&
                             values.email && values.email.includes('@') &&
                             values.address && values.address.length >= 5 &&
                             values.pincode && values.pincode.length === 6 &&
                             values.location && values.location.length >= 2 &&
                             values.category &&
                             values.plan && values.plan_duration && values.payment_type
    
    const paymentValid = values.payment_type === 'upi' 
      ? (values.payment_screenshot && values.payment_screenshot instanceof File)
      : true // Cash payments don't require screenshot
    
    return hasRequiredFields && paymentValid
  }

  // Show success screen if order is submitted
  if (isSubmitted && orderData) {
    return <SuccessScreen data={orderData} onEditAgain={() => setIsSubmitted(false)} />
  }

  // Prevent server-side rendering issues
  if (!isClient) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-4 lg:p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Create New Order</h1>
                <p className="text-sm sm:text-base text-slate-600">Fill out the form below to create your Techpotli website order</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToHome}
                  className="flex items-center gap-2 text-xs sm:text-sm"
                >
                  <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/dashboard')}
                  className="text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">Back to Dashboard</span>
                  <span className="sm:hidden">Dashboard</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 text-xs sm:text-sm"
                >
                  <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </Button>
              </div>
            </div>
          </div>

        {/* Status Indicators */}
        <div className="mb-6 space-y-3">
          {/* Draft Status */}
          {draftSaved && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <p className="text-green-800 text-sm">Draft saved automatically</p>
            </div>
          )}
          
          {/* Validation Error Message */}
          {hasAttemptedStep.has(currentStep) && !isStepValid() && currentStep === 1 && (
            <div className="p-4 bg-yellow-50 border border-yellow-300 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-yellow-800 font-semibold mb-1">Please complete all required fields</p>
                <p className="text-yellow-700 text-sm">Fill in all fields marked with * to continue to the next step.</p>
              </div>
            </div>
          )}
          
          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <div>
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-24 sm:pb-8">
          {/* Step 1: Business Info */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Business Information
                </CardTitle>
                <CardDescription>
                  Provide your basic business details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="owner_name" className="text-base font-semibold text-gray-900">
                      Owner Name
                      <span className="text-red-500 ml-1">*</span>
                      <span className="text-xs text-red-500 ml-2 font-normal">Required</span>
                    </Label>
                    <Input
                      id="owner_name"
                      name="owner_name"
                      autoComplete="name"
                      value={watchedValues.owner_name || ""}
                      onChange={(e) => {
                        form.setValue("owner_name", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("owner_name")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value && value !== watchedValues.owner_name) {
                          form.setValue("owner_name", value, { shouldValidate: true })
                          markFieldAsTouched("owner_name")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value && value !== watchedValues.owner_name) {
                          form.setValue("owner_name", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("owner_name")
                      }}
                      placeholder="Enter owner name"
                      className={`h-12 text-base border-2 ${
                        shouldShowError("owner_name") && errors.owner_name 
                          ? 'border-red-500 bg-red-50' 
                          : watchedValues.owner_name 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {shouldShowError("owner_name") && errors.owner_name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.owner_name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company_name" className="text-base font-semibold text-gray-900">
                      Company Name
                      <span className="text-red-500 ml-1">*</span>
                      <span className="text-xs text-red-500 ml-2 font-normal">Required</span>
                    </Label>
                    <Input
                      id="company_name"
                      name="company_name"
                      autoComplete="organization"
                      value={watchedValues.company_name || ""}
                      onChange={(e) => {
                        form.setValue("company_name", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("company_name")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value && value !== watchedValues.company_name) {
                          form.setValue("company_name", value, { shouldValidate: true })
                          markFieldAsTouched("company_name")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value && value !== watchedValues.company_name) {
                          form.setValue("company_name", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("company_name")
                      }}
                      placeholder="Enter company name"
                      className={`h-12 text-base border-2 ${
                        shouldShowError("company_name") && errors.company_name 
                          ? 'border-red-500 bg-red-50' 
                          : watchedValues.company_name 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {shouldShowError("company_name") && errors.company_name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.company_name.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-base font-semibold text-gray-900">
                      Mobile Number
                      <span className="text-xs text-gray-500 ml-2 font-normal">(Optional)</span>
                    </Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      value={watchedValues.mobile || ""}
                      onChange={(e) => {
                        form.setValue("mobile", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("mobile")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value !== watchedValues.mobile) {
                          form.setValue("mobile", value, { shouldValidate: true })
                          markFieldAsTouched("mobile")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value !== watchedValues.mobile) {
                          form.setValue("mobile", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("mobile")
                      }}
                      placeholder="Enter mobile number"
                      className={`h-12 text-base border-2 ${
                        watchedValues.mobile 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {shouldShowError("mobile") && errors.mobile && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.mobile.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-semibold text-gray-900">
                      Email ID
                      <span className="text-red-500 ml-1">*</span>
                      <span className="text-xs text-red-500 ml-2 font-normal">Required</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={watchedValues.email || ""}
                      onChange={(e) => {
                        form.setValue("email", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("email")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value && value !== watchedValues.email) {
                          form.setValue("email", value, { shouldValidate: true })
                          markFieldAsTouched("email")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value && value !== watchedValues.email) {
                          form.setValue("email", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("email")
                      }}
                      placeholder="Enter email address"
                      className={`h-12 text-base border-2 ${
                        shouldShowError("email") && errors.email 
                          ? 'border-red-500 bg-red-50' 
                          : watchedValues.email 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-gray-300 hover:border-gray-400'
                      }`}
                    />
                    {shouldShowError("email") && errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Full Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={watchedValues.address || ""}
                    onChange={(e) => {
                      form.setValue("address", e.target.value, { shouldValidate: true })
                      markFieldAsTouched("address")
                    }}
                    onInput={(e) => {
                      const value = (e.target as HTMLTextAreaElement).value
                      if (value && value !== watchedValues.address) {
                        form.setValue("address", value, { shouldValidate: true })
                        markFieldAsTouched("address")
                      }
                    }}
                    onBlur={(e) => {
                      const value = e.target.value
                      if (value && value !== watchedValues.address) {
                        form.setValue("address", value, { shouldValidate: true })
                      }
                      markFieldAsTouched("address")
                    }}
                    placeholder="Enter complete address"
                    rows={3}
                  />
                  {shouldShowError("address") && errors.address && (
                    <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      autoComplete="postal-code"
                      value={watchedValues.pincode || ""}
                      onChange={(e) => {
                        form.setValue("pincode", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("pincode")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value && value !== watchedValues.pincode) {
                          form.setValue("pincode", value, { shouldValidate: true })
                          markFieldAsTouched("pincode")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value && value !== watchedValues.pincode) {
                          form.setValue("pincode", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("pincode")
                      }}
                      placeholder="Enter pincode"
                    />
                    {shouldShowError("pincode") && errors.pincode && (
                      <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location (City/District/State) *</Label>
                    <Input
                      id="location"
                      name="location"
                      autoComplete="address-level2"
                      value={watchedValues.location || ""}
                      onChange={(e) => {
                        form.setValue("location", e.target.value, { shouldValidate: true })
                        markFieldAsTouched("location")
                      }}
                      onInput={(e) => {
                        const value = (e.target as HTMLInputElement).value
                        if (value && value !== watchedValues.location) {
                          form.setValue("location", value, { shouldValidate: true })
                          markFieldAsTouched("location")
                        }
                      }}
                      onBlur={(e) => {
                        const value = e.target.value
                        if (value && value !== watchedValues.location) {
                          form.setValue("location", value, { shouldValidate: true })
                        }
                        markFieldAsTouched("location")
                      }}
                      placeholder="Enter location"
                    />
                    {shouldShowError("location") && errors.location && (
                      <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-base font-semibold text-gray-900">
                    Business Category / Industry
                    <span className="text-red-500 ml-1">*</span>
                    <span className="text-xs text-red-500 ml-2 font-normal">Required</span>
                  </Label>
                  <Select
                    value={watchedValues.category || ""}
                    onValueChange={(value) => {
                      form.setValue("category", value)
                      markFieldAsTouched("category")
                    }}
                    onOpenChange={(open) => {
                      if (!open) markFieldAsTouched("category")
                    }}
                  >
                    <SelectTrigger className={`h-12 text-base border-2 ${
                      shouldShowError("category") && errors.category 
                        ? 'border-red-500 bg-red-50' 
                        : watchedValues.category 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-300 hover:border-gray-400'
                    }`}>
                      <SelectValue placeholder="Choose your business category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 bg-white border-2 border-gray-200 shadow-lg z-50 rounded-lg">
                      <SelectItem value="Technology" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏢 Technology
                      </SelectItem>
                      <SelectItem value="Healthcare" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏥 Healthcare
                      </SelectItem>
                      <SelectItem value="Retail" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🛍️ Retail
                      </SelectItem>
                      <SelectItem value="Education" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🎓 Education
                      </SelectItem>
                      <SelectItem value="Finance" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        💰 Finance
                      </SelectItem>
                      <SelectItem value="Manufacturing" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏭 Manufacturing
                      </SelectItem>
                      <SelectItem value="Food & Beverage" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🍽️ Food & Beverage
                      </SelectItem>
                      <SelectItem value="Real Estate" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏠 Real Estate
                      </SelectItem>
                      <SelectItem value="Entertainment" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🎬 Entertainment
                      </SelectItem>
                      <SelectItem value="Automotive" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🚗 Automotive
                      </SelectItem>
                      <SelectItem value="Fashion" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        👗 Fashion
                      </SelectItem>
                      <SelectItem value="Travel" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        ✈️ Travel
                      </SelectItem>
                      <SelectItem value="Sports" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        ⚽ Sports
                      </SelectItem>
                      <SelectItem value="Legal" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        ⚖️ Legal
                      </SelectItem>
                      <SelectItem value="Consulting" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        💼 Consulting
                      </SelectItem>
                      <SelectItem value="Non-Profit" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🤝 Non-Profit
                      </SelectItem>
                      <SelectItem value="Government" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏛️ Government
                      </SelectItem>
                      <SelectItem value="Agriculture" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🌾 Agriculture
                      </SelectItem>
                      <SelectItem value="Construction" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏗️ Construction
                      </SelectItem>
                      <SelectItem value="Media" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        📺 Media
                      </SelectItem>
                      <SelectItem value="Telecommunications" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        📱 Telecommunications
                      </SelectItem>
                      <SelectItem value="Energy" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        ⚡ Energy
                      </SelectItem>
                      <SelectItem value="Transportation" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🚚 Transportation
                      </SelectItem>
                      <SelectItem value="Hospitality" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏨 Hospitality
                      </SelectItem>
                      <SelectItem value="Beauty & Wellness" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        💄 Beauty & Wellness
                      </SelectItem>
                      <SelectItem value="Home & Garden" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🏡 Home & Garden
                      </SelectItem>
                      <SelectItem value="Pets" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🐕 Pets
                      </SelectItem>
                      <SelectItem value="Art & Design" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🎨 Art & Design
                      </SelectItem>
                      <SelectItem value="Music" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🎵 Music
                      </SelectItem>
                      <SelectItem value="Photography" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        📸 Photography
                      </SelectItem>
                      <SelectItem value="Writing" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        ✍️ Writing
                      </SelectItem>
                      <SelectItem value="Marketing" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        📢 Marketing
                      </SelectItem>
                      <SelectItem value="Employed" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        💼 Employed
                      </SelectItem>
                      <SelectItem value="Other" className="bg-white hover:bg-blue-50 text-gray-900 py-3 px-4 cursor-pointer">
                        🔧 Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {shouldShowError("category") && errors.category && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services" className="text-base font-semibold text-gray-900">
                    Services of the Company
                    <span className="text-xs text-gray-500 ml-2 font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="services"
                    value={watchedValues.services || ""}
                    onChange={(e) => {
                      form.setValue("services", e.target.value)
                      markFieldAsTouched("services")
                    }}
                    onBlur={() => markFieldAsTouched("services")}
                    onInput={(e) => { const t = e.currentTarget as HTMLTextAreaElement; t.style.height = 'auto'; t.style.height = `${t.scrollHeight}px`; }}
                    placeholder="Describe your company services..."
                    rows={2}
                    className={`text-base border-2 overflow-hidden resize-none ${
                      watchedValues.services 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{minHeight: '3.5rem'}}
                  />
                  {shouldShowError("services") && errors.services && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.services.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desc_short" className="text-base font-semibold text-gray-900">
                    Business Description (Short)
                    <span className="text-xs text-gray-500 ml-2 font-normal">(Optional)</span>
                  </Label>
                  <Textarea
                    id="desc_short"
                    value={watchedValues.desc_short || ""}
                    onChange={(e) => {
                      form.setValue("desc_short", e.target.value)
                      markFieldAsTouched("desc_short")
                    }}
                    onBlur={() => markFieldAsTouched("desc_short")}
                    onInput={(e) => { const t = e.currentTarget as HTMLTextAreaElement; t.style.height = 'auto'; t.style.height = `${t.scrollHeight}px`; }}
                    placeholder="Brief description of your business..."
                    rows={1}
                    className={`text-base border-2 overflow-hidden resize-none ${
                      watchedValues.desc_short 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{minHeight: '2.25rem'}}
                  />
                  {shouldShowError("desc_short") && errors.desc_short && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.desc_short.message}
                    </p>
                  )}
                </div>
                {/* GST Number */}
                <div className="mt-2">
                  <Label htmlFor="gst_number">GST Number (Optional)</Label>
                  <Input
                    id="gst_number"
                    value={watchedValues.gst_number || ""}
                    onChange={(e) => form.setValue("gst_number", e.target.value)}
                    placeholder="Enter GST number"
                  />
                </div>

                {/* Social Media Links on first page */}
                <div className="mt-4">
                  <Label>Social Media Links (Optional)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        value={watchedValues.social_links?.facebook || ""}
                        onChange={(e) => form.setValue("social_links.facebook", e.target.value)}
                        placeholder="Facebook URL"
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        value={watchedValues.social_links?.instagram || ""}
                        onChange={(e) => form.setValue("social_links.instagram", e.target.value)}
                        placeholder="Instagram URL"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={watchedValues.social_links?.linkedin || ""}
                        onChange={(e) => form.setValue("social_links.linkedin", e.target.value)}
                        placeholder="LinkedIn URL"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        value={watchedValues.social_links?.whatsapp || ""}
                        onChange={(e) => form.setValue("social_links.whatsapp", e.target.value)}
                        placeholder="WhatsApp number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="youtube">YouTube</Label>
                      <Input
                        id="youtube"
                        value={watchedValues.social_links?.youtube || ""}
                        onChange={(e) => form.setValue("social_links.youtube", e.target.value)}
                        placeholder="YouTube URL"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Branding */}
          {currentStep === 2 && (
            <></>
          )}

          {/* Step 3: Plan & Payment */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Plan & Payment
                </CardTitle>
                <CardDescription>
                  Choose your subscription plan and view pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Selection */}
                <div className="space-y-4">
                  <Label className="text-xl font-semibold text-slate-800">
                    Choose Your Plan *
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {/* Gold Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'gold' 
                          ? 'border-yellow-500 bg-yellow-50 shadow-lg' 
                          : 'border-gray-200 hover:border-yellow-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "gold")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <h3 className="text-lg font-bold text-yellow-700 mb-2">GOLD</h3>
                        <div className="text-2xl font-bold text-yellow-600 mb-3">₹999</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development</p>
                          <p>• Full SEO (On-Page, Off Page)</p>
                          <p>• Backlinks - 50/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 10 Digital Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Google Business Profile</p>
                          <p>• Meta Ads Setup</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'gold' && (
                          <div className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Platinum Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'platinum' 
                          ? 'border-purple-500 bg-purple-50 shadow-lg' 
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "platinum")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <h3 className="text-lg font-bold text-purple-700 mb-2">PLATINUM</h3>
                        <div className="text-2xl font-bold text-purple-600 mb-3">₹1499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development</p>
                          <p>• Full SEO (On-Page, Off Page)</p>
                          <p>• Backlinks - 100/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 15 Digital Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Google Business Profile</p>
                          <p>• Meta Ads Setup</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'platinum' && (
                          <div className="mt-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Diamond Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'diamond' 
                          ? 'border-indigo-500 bg-indigo-50 shadow-lg' 
                          : 'border-gray-200 hover:border-indigo-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "diamond")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">D</span>
                        </div>
                        <h3 className="text-lg font-bold text-indigo-700 mb-2">DIAMOND</h3>
                        <div className="text-2xl font-bold text-indigo-600 mb-3">₹2499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development</p>
                          <p>• Full SEO (On-Page, Off Page & Technical)</p>
                          <p>• Backlinks - 200/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 15 Business Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• Meta Ads Free (₹200)</p>
                          <p>• Google My Business Profile</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'diamond' && (
                          <div className="mt-3 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Titanium Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'titanium' 
                          ? 'border-rose-500 bg-rose-50 shadow-lg' 
                          : 'border-gray-200 hover:border-rose-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "titanium")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">T</span>
                        </div>
                        <h3 className="text-lg font-bold text-rose-700 mb-2">TITANIUM</h3>
                        <div className="text-2xl font-bold text-rose-600 mb-3">₹3499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development</p>
                          <p>• Full SEO (On-Page, Off Page & Technical)</p>
                          <p>• Backlinks - 300/Month</p>
                          <p>• Blog - 1/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 15 Business Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• 15 Business Leads</p>
                          <p>• Google My Business Profile</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'titanium' && (
                          <div className="mt-3 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Ultimate Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'ultimate' 
                          ? 'border-amber-500 bg-amber-50 shadow-lg' 
                          : 'border-gray-200 hover:border-amber-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "ultimate")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">U</span>
                        </div>
                        <h3 className="text-lg font-bold text-amber-700 mb-2">ULTIMATE</h3>
                        <div className="text-2xl font-bold text-amber-600 mb-3">₹4999</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development</p>
                          <p>• Full SEO (On-Page, Off Page & Technical)</p>
                          <p>• Backlinks - 500/Month</p>
                          <p>• Blog - 2/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 30 Business Banners/Month</p>
                          <p>• 2 Videos</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• 30 Business Leads</p>
                          <p>• Google My Business Profile</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'ultimate' && (
                          <div className="mt-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* E-Commerce Basic Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'ecommerce_basic' 
                          ? 'border-teal-500 bg-teal-50 shadow-lg' 
                          : 'border-gray-200 hover:border-teal-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "ecommerce_basic")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">EC</span>
                        </div>
                        <h3 className="text-lg font-bold text-teal-700 mb-2">E-COMMERCE BASIC</h3>
                        <div className="text-2xl font-bold text-teal-600 mb-3">₹1499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development + Admin Panel</p>
                          <p>• Full SEO (On-Page, Off Page & Technical)</p>
                          <p>• Backlinks - 100/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 10 Business Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• Google My Business Profile</p>
                          <p>• Payment Gateway Integration</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'ecommerce_basic' && (
                          <div className="mt-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* E-Commerce Premium Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'ecommerce_premium' 
                          ? 'border-emerald-500 bg-emerald-50 shadow-lg' 
                          : 'border-gray-200 hover:border-emerald-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "ecommerce_premium")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">EC+</span>
                        </div>
                        <h3 className="text-lg font-bold text-emerald-700 mb-2">E-COMMERCE PREMIUM</h3>
                        <div className="text-2xl font-bold text-emerald-600 mb-3">₹2499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Domain + Hosting + Website Development + Admin Panel</p>
                          <p>• Full SEO (On-Page, Off Page & Technical)</p>
                          <p>• Backlinks - 200/Month</p>
                          <p>• Blog - 1/Month</p>
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 15 Business Banners/Month</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• Google My Business Profile</p>
                          <p>• Payment Gateway Integration</p>
                          <p>• SSL Certificate</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'ecommerce_premium' && (
                          <div className="mt-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Social Media, SEO & GMB Services Plan */}
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.plan === 'social_seo_gmb' 
                          ? 'border-violet-500 bg-violet-50 shadow-lg' 
                          : 'border-gray-200 hover:border-violet-300 hover:shadow-md bg-white'
                      }`}
                      onClick={() => form.setValue("plan", "social_seo_gmb")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">SM</span>
                        </div>
                        <h3 className="text-lg font-bold text-violet-700 mb-2">Social Media, SEO & GMB</h3>
                        <div className="text-2xl font-bold text-violet-600 mb-3">₹2499</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>• Social Media Marketing (Facebook+Instagram)</p>
                          <p>• 15 Business Banners/Month</p>
                          <p>• Full SEO - On Page Optimization</p>
                          <p>• Keyword Research</p>
                          <p>• Off Page Optimization</p>
                          <p>• Technical SEO</p>
                          <p>• Google Search Console Setup</p>
                          <p>• Google Analytics Setup</p>
                          <p>• Backlinks - 200/Month</p>
                          <p>• Blog - 1/Month</p>
                          <p>• Logo Design</p>
                          <p>• Ads Setup (Meta & Google)</p>
                          <p>• Google My Business Profile</p>
                          <p>• 24/7 Tech Support</p>
                        </div>
                        {watchedValues.plan === 'social_seo_gmb' && (
                          <div className="mt-3 bg-violet-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ SELECTED
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.plan && (
                    <p className="text-red-500 text-sm mt-2 text-center">{errors.plan.message}</p>
                  )}
                  
                  {/* Important Notes */}
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="text-sm text-yellow-800">
                      <p className="font-semibold mb-2">Important Notes:</p>
                      <ul className="space-y-1 list-disc list-inside text-yellow-700">
                        <li>Ads budget will be paid by the client</li>
                        <li>Domain for .com & .in charges will be extra applied</li>
                        <li>For any individual service such as SEO, Social Media, or Google Business Profile, charges are ₹1499 + GST per month</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Plan Duration Selection */}
                {watchedValues.plan && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-slate-700">
                      Select Plan Duration *
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      {["1", "3", "6", "9", "12"].map((duration) => (
                        <div 
                          key={duration}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            watchedValues.plan_duration === duration 
                              ? 'border-blue-500 bg-blue-50 shadow-lg' 
                              : 'border-gray-200 hover:border-blue-300 hover:shadow-md bg-white'
                          }`}
                          onClick={() => form.setValue("plan_duration", duration as any)}
                        >
                          <div className="text-center">
                            <div className="text-2xl font-bold text-slate-700 mb-1">
                              {duration} {duration === "1" ? "Month" : "Months"}
                            </div>
                            <div className="text-lg font-semibold text-slate-600">
                              {duration === "1" ? "Trial period" : duration === "3" ? "First time minimum 3 months" : `${duration} months`}
                            </div>
                            {watchedValues.plan_duration === duration && (
                              <div className="mt-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                ✓ SELECTED
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.plan_duration && (
                      <p className="text-red-500 text-sm mt-2 text-center">{errors.plan_duration.message}</p>
                    )}
                  </div>
                )}

                {/* Payment Type Selection */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-slate-700">
                    Payment Method *
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* UPI Payment */}
                    <div 
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.payment_type === 'upi' 
                          ? 'border-green-500 bg-green-50 shadow-lg' 
                          : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                      }`}
                      onClick={() => form.setValue("payment_type", "upi")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-green-700 mb-2">UPI Payment</h3>
                        <p className="text-sm text-gray-600">Pay via UPI apps like PhonePe, Google Pay, Paytm</p>
                        <p className="text-xs text-red-600 mt-2 font-medium">* Payment screenshot required</p>
                      </div>
                    </div>

                    {/* Cash Payment */}
                    <div 
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        watchedValues.payment_type === 'cash' 
                          ? 'border-orange-500 bg-orange-50 shadow-lg' 
                          : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                      }`}
                      onClick={() => form.setValue("payment_type", "cash")}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-lg">₹</span>
                        </div>
                        <h3 className="text-lg font-bold text-orange-700 mb-2">Cash Payment</h3>
                        <p className="text-sm text-gray-600">Pay directly to our agent</p>
                        <p className="text-xs text-blue-600 mt-2 font-medium">* Agent contact details will be provided</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cash Payment Message */}
                {watchedValues.payment_type === 'cash' && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      <span className="text-orange-600">💡</span>
                      Cash Payment Instructions
                    </h3>
                    <div className="text-orange-700 space-y-2">
                      <p>For cash payment, please contact our agent:</p>
                      <div className="bg-white rounded-lg p-4 mt-3">
                        <p><strong>Agent Contact:</strong> 011-47200987</p>
                        <p><strong>Customer Care:</strong> 9911475599</p>
                        <p><strong>Payment Location:</strong> Techpotli E commerce Private Limited, C52A Basement, Kalka Ji, New Delhi 110019</p>
                        <p><strong>Note:</strong> Please bring exact amount and collect receipt</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Price Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle>Price Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Plan ({getSafePlanValue(watchedValues.plan).toUpperCase()}):</span>
                        <span>₹{PLAN_PRICES[planValue as keyof typeof PLAN_PRICES] || PLAN_PRICES.gold}/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{watchedValues.plan_duration || "3"} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Base Price:</span>
                        <span>₹{basePrice}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GST (18%):</span>
                        <span>₹{gst}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between font-bold text-lg">
                        <span>Total:</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* UPI QR Code - Only show when UPI is selected */}
                {watchedValues.payment_type === 'upi' && (
                  <Card>
                    <CardHeader>
                      <CardTitle>UPI Payment</CardTitle>
                      <CardDescription>
                        Scan the QR code to make payment
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="inline-block">
                        <a href="/Screenshot 2025-10-30 084208.png" target="_blank" rel="noopener noreferrer" aria-label="Open QR in full screen for better scanning">
                          <img 
                            src="/Screenshot 2025-10-30 084208.png" 
                            alt="UPI Payment QR Code" 
                            className="w-full max-w-[28rem] h-auto object-contain mx-auto select-none"
                            style={{ imageRendering: 'crisp-edges' as any }}
                            decoding="sync"
                            fetchPriority="high"
                          />
                        </a>
                        <div className="text-xs text-slate-500 mt-2">Tap image to open full screen for easier scanning</div>
                      </div>
                      <p className="text-lg text-slate-700 mt-6 font-semibold">Scan QR Code to Pay ₹{total}</p>
                      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-sm text-blue-800 font-medium">💡 Payment Instructions:</p>
                        <p className="text-xs text-blue-700 mt-1">Open any UPI app (PhonePe, Google Pay, Paytm) and scan this QR code to make payment</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* WhatsApp Button - Only show for UPI payments */}
                {watchedValues.payment_type === 'upi' && (
                  <div className="text-center">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Payment%20screenshot%20for%20my%20Techpotli%20order`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Send payment screenshot on WhatsApp
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 4: Payment Proof */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Receipt className="w-5 h-5" />
                  Payment Proof
                </CardTitle>
                <CardDescription>
                  {watchedValues.payment_type === 'upi' 
                    ? 'Upload your UPI payment screenshot' 
                    : 'Payment confirmation for cash payment'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                {watchedValues.payment_type === 'upi' ? (
                  <div>
                    <Label htmlFor="payment_screenshot" className="text-sm sm:text-base font-semibold text-gray-900">
                      Payment Screenshot Upload
                      <span className="text-red-500 ml-1">*</span>
                      <span className="text-xs text-red-500 ml-2 font-normal">Required</span>
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="payment_screenshot"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            form.setValue("payment_screenshot", file)
                            if (typeof window !== 'undefined') {
                              form.setValue("payment_screenshot_url", URL.createObjectURL(file))
                            }
                          }
                        }}
                        className="hidden"
                      />
                      <Label
                        htmlFor="payment_screenshot"
                        className="flex items-center justify-center w-full h-24 sm:h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                      >
                        <div className="text-center px-4">
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 mx-auto mb-2" />
                          <p className="text-xs sm:text-sm text-slate-600">Click to upload payment screenshot</p>
                          <p className="text-xs text-slate-400">JPG, PNG up to 10MB</p>
                        </div>
                      </Label>
                    </div>
                    {watchedValues.payment_screenshot && watchedValues.payment_screenshot instanceof File && (
                      <div className="mt-2">
                        <p className="text-sm text-green-600">✓ {watchedValues.payment_screenshot.name}</p>
                        <img
                          src={typeof window !== 'undefined' ? URL.createObjectURL(watchedValues.payment_screenshot) : ''}
                          alt="Payment screenshot preview"
                          className="w-full max-w-md object-contain border rounded-lg mt-2"
                        />
                      </div>
                    )}
                    {errors.payment_screenshot && (
                      <p className="text-red-500 text-sm mt-1">{errors.payment_screenshot.message}</p>
                    )}
                  </div>
                ) : (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-orange-800 mb-3 flex items-center gap-2">
                      <span className="text-orange-600">💰</span>
                      Cash Payment Confirmation
                    </h3>
                    <div className="text-orange-700 space-y-3">
                      <p className="text-sm sm:text-base">For cash payment, please contact our agent to complete the payment:</p>
                      <div className="bg-white rounded-lg p-3 sm:p-4">
                        <div className="space-y-2 text-sm sm:text-base">
                          <p><strong>Agent Contact:</strong> <span className="text-orange-600 font-mono">011-47200987</span></p>
                          <p><strong>Customer Care:</strong> <span className="text-orange-600 font-mono">9911475599</span></p>
                          <p><strong>Payment Location:</strong></p>
                          <p className="text-xs sm:text-sm text-gray-600 ml-4">Techpotli E commerce Private Limited, C52A Basement, Kalka Ji, New Delhi 110019</p>
                          <p><strong>Amount to Pay:</strong> <span className="text-green-600 font-bold">₹{total}</span></p>
                          <p><strong>Note:</strong> Please bring exact amount and collect receipt</p>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm">Once payment is completed, our agent will confirm and you can proceed to the next step.</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Step 5: Review & Submit */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Review & Submit
                </CardTitle>
                <CardDescription>
                  Review your order details before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Business Information</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Owner:</strong> {watchedValues.owner_name}</p>
                      <p><strong>Company:</strong> {watchedValues.company_name}</p>
                      <p><strong>Mobile:</strong> {watchedValues.mobile}</p>
                      <p><strong>Email:</strong> {watchedValues.email}</p>
                      <p><strong>Address:</strong> {watchedValues.address}</p>
                      <p><strong>Pincode:</strong> {watchedValues.pincode}</p>
                      <p><strong>Location:</strong> {watchedValues.location}</p>
                      <p><strong>Category:</strong> {watchedValues.category}</p>
                      <p><strong>Operating Hours:</strong> {'Not specified'}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Plan & Payment</h3>
                    <div className="space-y-2 text-sm">
                      <p><strong>Plan:</strong> <Badge variant="outline">{getSafePlanValue(watchedValues.plan).toUpperCase()}</Badge></p>
                      <p><strong>Duration:</strong> <Badge variant="outline">{watchedValues.plan_duration || "3"} months</Badge></p>
                      <p><strong>Payment Method:</strong> <Badge variant="outline">{watchedValues.payment_type?.toUpperCase()}</Badge></p>
                      <p><strong>Base Price:</strong> ₹{basePrice}</p>
                      <p><strong>GST:</strong> ₹{gst}</p>
                      <p><strong>Total:</strong> ₹{total}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Branding & Design</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>GST Number:</strong> {watchedValues.gst_number || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Social Media Links</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Facebook:</strong> {watchedValues.social_links?.facebook || 'Not provided'}</p>
                    <p><strong>Instagram:</strong> {watchedValues.social_links?.instagram || 'Not provided'}</p>
                    <p><strong>LinkedIn:</strong> {watchedValues.social_links?.linkedin || 'Not provided'}</p>
                    <p><strong>WhatsApp:</strong> {watchedValues.social_links?.whatsapp || 'Not provided'}</p>
                    <p><strong>YouTube:</strong> {watchedValues.social_links?.youtube || 'Not provided'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Services & Description</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Services:</strong></p>
                    <p className="text-slate-600">{watchedValues.services}</p>
                    <p><strong>Short Description:</strong></p>
                    <p className="text-slate-600">{watchedValues.desc_short}</p>
                  </div>
                </div>

                {watchedValues.payment_screenshot && watchedValues.payment_screenshot instanceof File && (
                  <div>
                    <h3 className="font-semibold mb-3">Payment Screenshot</h3>
                    <img
                      src={typeof window !== 'undefined' ? URL.createObjectURL(watchedValues.payment_screenshot) : ''}
                      alt="Payment screenshot"
                      className="w-full max-w-md object-contain border rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Progress Indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Step {currentStep} of {STEPS.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round((currentStep / STEPS.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Navigation */}
          <div className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pt-4 pb-4 px-4 -mx-2 sm:mx-0 sm:relative sm:bg-transparent sm:border-t sm:shadow-none sm:pt-6">
            <div className="flex flex-col gap-3 sm:hidden">
              {currentStep < STEPS.length ? (
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 flex-1 h-12 text-base font-medium ${
                      currentStep === 1 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`flex items-center gap-2 flex-1 h-12 text-base font-semibold transition-all duration-200 ${
                      !isStepValid()
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 flex-1 h-12 text-base font-medium bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isFormValidForSubmission() || isLoading || isSubmitting}
                    onClick={() => {
                      setHasAttemptedStep(prev => new Set(prev).add(5))
                      setIsExplicitSubmit(true)
                    }}
                    className={`flex items-center gap-2 flex-1 h-12 text-base font-semibold transition-all duration-200 ${
                      !isFormValidForSubmission() || isLoading || isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    {isLoading || isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FileText className="w-5 h-5" />
                        Submit Order
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>

            <div className="hidden sm:flex justify-between items-center">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 h-12 px-6 text-base font-medium ${
                  currentStep === 1 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </Button>
              
              <div className="flex gap-3">
                {currentStep < STEPS.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 h-12 px-8 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!isFormValidForSubmission() || isLoading || isSubmitting}
                    onClick={() => {
                      setHasAttemptedStep(prev => new Set(prev).add(5))
                      setIsExplicitSubmit(true)
                    }}
                    className={`flex items-center gap-2 h-12 px-8 text-base font-semibold transition-all duration-200 ${
                      !isFormValidForSubmission() || isLoading || isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    }`}
                  >
                    {isLoading || isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FileText className="w-5 h-5" />
                        Submit Order
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

// Success Screen Component
function SuccessScreen({ data, onEditAgain }: { data: OrderFormData; onEditAgain: () => void }) {
  const router = useRouter()
  
  // Go to home page function
  const goToHome = () => {
    router.push('/')
  }
  
  const whatsappMessage = `Hello! I have submitted my order for website development. Here are my complete details:

*Business Information:*
• Owner: ${data.owner_name}
• Company: ${data.company_name}
• Mobile: ${data.mobile}
• Email: ${data.email}
• Address: ${data.address}
• Pincode: ${data.pincode}
• Location: ${data.location}
• Category: ${data.category}

*Services & Description:*
• Services: ${data.services}
• Short Description: ${data.desc_short}

*Branding & Design:*
${data.gst_number ? `• GST Number: ${data.gst_number}` : ''}

*Social Media Links:*
${data.social_links.facebook ? `• Facebook: ${data.social_links.facebook}` : ''}
${data.social_links.instagram ? `• Instagram: ${data.social_links.instagram}` : ''}
${data.social_links.linkedin ? `• LinkedIn: ${data.social_links.linkedin}` : ''}
${data.social_links.whatsapp ? `• WhatsApp: ${data.social_links.whatsapp}` : ''}
${data.social_links.youtube ? `• YouTube: ${data.social_links.youtube}` : ''}

*Plan Selected:* ${getSafePlanValue(data.plan).toUpperCase()} for ${data.plan_duration || "3"} months

${data.payment_screenshot_url ? '📎 Payment screenshot uploaded' : ''}

Please let me know the next steps. Thank you!`

  const whatsappUrl = `https://wa.me/919810659666?text=${encodeURIComponent(whatsappMessage)}`
  
  const handleWhatsAppRedirect = () => {
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank')
    }
  }
  
  const handleCallRedirect = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+919810659666'
    }
  }
  
  const handleDashboardRedirect = () => {
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-slate-800 mb-4">Thanks for Your Order!</CardTitle>
            <CardDescription className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our Software team will deliver your order. You will get your order as soon as possible.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Contact Information */}
            <div className="text-center bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">For Any Information Contact Us</h3>
              <p className="text-lg text-slate-700 mb-6">
                Call: <span className="font-bold text-blue-600">011-47200987</span> | Customer Care: <span className="font-bold text-green-600">9911475599</span>
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleWhatsAppRedirect}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Message
                </Button>
                
                <Button
                  onClick={handleCallRedirect}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Order Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Owner:</strong> {data.owner_name}</p>
                  <p><strong>Company:</strong> {data.company_name}</p>
                  <p><strong>Mobile:</strong> {data.mobile}</p>
                  <p><strong>Email:</strong> {data.email}</p>
                </div>
                <div>
                  <p><strong>Location:</strong> {data.location}</p>
                  <p><strong>Category:</strong> {data.category}</p>
                  <p><strong>Plan:</strong> <Badge variant="outline">{getSafePlanValue(data.plan).toUpperCase()} for {data.plan_duration || "3"} months</Badge></p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={goToHome}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Home className="w-5 h-5 mr-2" />
                Go to Home Page
              </Button>
              <Button
                onClick={handleDashboardRedirect}
                className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import type { Metadata } from "next";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy - Techpotli Digital",
  description: "Shipping Policy for Techpotli Digital. Learn about our delivery methods, timelines, and shipping costs.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/shipping-policy",
  },
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <SectionHeading
            badge="Delivery Information"
            heading="Shipping Policy"
            description="Information about our shipping methods, delivery timelines, and shipping costs."
            size="lg"
            align="left"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-sm text-gray-700">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Shipping Methods</h2>
              <p className="text-gray-600 mb-6">
                Orders are packed using registered domestic courier services or speed post to ensure timely and safe delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Delivery Timeline</h2>
              <p className="text-gray-600 mb-6">
                Orders are generally delivered within 5 business days from the date of confirmation or payment. Timelines may vary due to courier service constraints, holidays, or unforeseen circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Delivery Address & Confirmation</h2>
              <p className="text-gray-600 mb-6">
                Orders are delivered to the address provided at purchase. Delivery notifications are sent to your registered email address once the shipment is dispatched.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Shipping Costs</h2>
              <p className="text-gray-600 mb-6">
                Any shipping charges levied by the Platform or merchants are non-refundable. We are not responsible for delays caused by courier companies, postal services, or force majeure events.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">FAQs</h2>
              
              <div className="space-y-6 mt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q1. Can I update my personal information?</h3>
                  <p className="text-gray-600">
                    Yes, you can update your details through your account profile or by contacting us.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q2. How do I cancel my account?</h3>
                  <p className="text-gray-600">
                    Account deletion can be requested via profile settings or by contacting our support team. Pending transactions may affect deletion.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q3. Is my payment information safe?</h3>
                  <p className="text-gray-600">
                    Yes. Payment information is securely processed using encrypted channels and compliant systems.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q4. Can I opt out of marketing emails?</h3>
                  <p className="text-gray-600">
                    Yes. You can opt out at any time by clicking the unsubscribe link in emails or contacting our Grievance Officer.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Q5. What if a shipment is delayed?</h3>
                  <p className="text-gray-600">
                    Delivery delays due to courier services or postal authorities are beyond our control. We notify you about your shipment status via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


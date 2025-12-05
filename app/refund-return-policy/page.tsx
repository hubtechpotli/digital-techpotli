import type { Metadata } from "next";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Return Policy - Techpotli Digital",
  description: "Refund and Return Policy for Techpotli Digital. Learn about our return conditions and refund process.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/refund-return-policy",
  },
};

export default function RefundReturnPolicyPage() {
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
            badge="Return & Refund"
            heading="Refund & Return Policy"
            description="Learn about our return conditions and refund process."
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 mb-6">
                At TechPotli Digital, operated by MATOSIA INFOTECH, we value our customers and strive to provide the best online shopping experience. This Refund and Return Policy outlines the conditions under which you can return products purchased from our Platform and the process for receiving a refund. By making a purchase on https://www.techpotlidigital.com/, you agree to comply with this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Return Policy</h2>
              <p className="text-gray-600 mb-6">
                You may request a return of your purchased item within 7 days from the date of delivery. Returns requested after this 7-day window will not be accepted, and no refund or replacement will be provided.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">To be eligible for a return, all of the following conditions must be met:</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-4">
                  <li>The item must be unused and in the same condition as when it was delivered to you.</li>
                  <li>The item must be in its original packaging, including all accessories, tags, and manuals.</li>
                  <li>Items purchased during a sale or promotional offer may not be eligible for returns unless explicitly stated otherwise.</li>
                </ol>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Refund Process</h2>
              <p className="text-gray-600 mb-4">
                Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p className="text-gray-600 mb-4">
                If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain number of days.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Late or Missing Refunds</h2>
              <p className="text-gray-600 mb-4">
                If you haven't received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted.
              </p>
              <p className="text-gray-600 mb-4">
                If you've done all of this and you still have not received your refund yet, please contact us at the contact information provided on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Exchanges</h2>
              <p className="text-gray-600 mb-4">
                We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at the contact information provided on our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Shipping for Returns</h2>
              <p className="text-gray-600 mb-4">
                To return your product, you should mail your product to the address provided by our customer service team. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
              </p>
            </div>

            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg mt-8">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> If you are shipping an item over a certain value, you may want to consider using a trackable shipping service or purchasing shipping insurance. We don't guarantee that we will receive your returned item.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


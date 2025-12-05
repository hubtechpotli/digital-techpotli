import type { Metadata } from "next";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer - Techpotli Digital",
  description: "Disclaimer for Techpotli Digital. Important information about the use of our website and services.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/disclaimer",
  },
};

export default function DisclaimerPage() {
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
            badge="Legal Notice"
            heading="Disclaimer"
            description="Important information about the use of our website and services."
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
                The information provided on TechPotli Digital (https://www.techpotlidigital.com/) owned and operated by MATOSIA INFOTECH, is for general informational purposes only. By accessing or using this website, you agree to the terms of this Disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">No Professional Advice</h2>
              <p className="text-gray-600 mb-6">
                All content, materials, and information available on this Platform, including but not limited to text, graphics, images, videos, and other materials, are provided for general guidance only. Nothing on this website constitutes professional advice, including legal, financial, marketing, or business advice. Users are advised to consult a qualified professional before acting on any information provided on this Platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Accuracy of Information</h2>
              <p className="text-gray-600 mb-6">
                While we strive to ensure that the information on this website is accurate and up-to-date, MATOSIA INFOTECH does not guarantee the completeness, reliability, or accuracy of any content. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">External Links</h2>
              <p className="text-gray-600 mb-6">
                This Platform may contain links to third-party websites for your convenience. We do not control and are not responsible for the content, privacy policies, or practices of these external sites. Accessing such links is done at your own discretion and risk, and we encourage users to review the terms and policies of those third-party websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                MATOSIA INFOTECH, its affiliates, and partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, or any loss of profit or revenue, arising out of or in connection with your use of this website or reliance on its content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on this Platform, including logos, graphics, images, text, and designs, is the property of MATOSIA INFOTECH or its licensors and is protected under applicable trademark and intellectual property laws. Unauthorized use of any content without previous written authorization is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Changes to Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to update or modify this Disclaimer at any time without previous notice. Users are encouraged to periodically review this page to stay informed about any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 mt-8">Governing Law</h2>
              <p className="text-gray-600 mb-6">
                This Disclaimer and any disputes related to it shall be governed by the laws of India, and the exclusive jurisdiction shall lie with the courts in Delhi, India.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
              <p className="text-sm text-gray-700">
                This disclaimer is professional, legally compliant, user-friendly, and paragraph-wise, ready for adding to your website footer or a dedicated Disclaimer page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


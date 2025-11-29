import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import { websiteServicesPackages } from "@/lib/packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Services Packages - Techpotli",
  description: "Choose from our website service packages - Basic, Standard, and Premium plans with hosting, SEO, and social media marketing.",
};

export default function WebsiteServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Website Services"
            heading="Complete Website Solutions for Your Business"
            description="Get everything you need to establish and grow your online presence. From domain and hosting to SEO and social media marketing."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {websiteServicesPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-teal-200 p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">1.</span>
                  <span>Ads budget will be paid by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">2.</span>
                  <span>Domain for .com & .in charges will be extra applied.</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-200 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold">Techpotli Digital</p>
                <p>C52A, LGF, Kalka Ji, New Delhi 110019</p>
                <p className="pt-2">
                  <span className="font-semibold">Phone:</span> 011-47200987 / 9911475599 / 9211405666 / 9211404666
                </p>
                <p>
                  <span className="font-semibold">Website:</span>{" "}
                  <a href="https://www.techpotlidigital.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    www.techpotlidigital.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


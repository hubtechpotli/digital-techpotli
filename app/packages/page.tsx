import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import { websiteServicesPackages, websiteLeadsPackages, ecommercePackages, socialSeoGmbPackages, oneTimeSetupPackages } from "@/lib/packages";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Our Packages - Techpotli",
  description: "Explore our comprehensive digital service packages designed to grow your business online.",
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Packages"
            heading="Choose the Perfect Package for Your Business"
            description="Comprehensive digital solutions tailored to help your business grow online. Select a package that fits your needs and budget."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Website Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Website Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete website solutions with hosting, SEO, social media marketing, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {websiteServicesPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 sm:p-8">
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
          </div>
        </div>
      </section>

      {/* Website + Leads Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Website + Leads Guaranteed Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete website solutions with guaranteed business leads generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {websiteLeadsPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 3} />
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
          </div>
        </div>
      </section>

      {/* E-Commerce Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              E-Commerce Website Services With Admin Panel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete e-commerce solutions with admin panel and payment gateway integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {ecommercePackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 6} />
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 sm:p-8">
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
          </div>
        </div>
      </section>

      {/* Social Media, SEO & GMB Services Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Social Media, SEO & GMB Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete digital marketing solution with social media, SEO, and Google My Business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {socialSeoGmbPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 8} />
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-gray-200 p-6 sm:p-8">
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
                <li className="flex items-start gap-3 pt-2 border-t border-gray-200">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>
                    For any individual service such as SEO, Social Media, or Google Business Profile, charges are{" "}
                    <span className="font-semibold text-teal-600">₹1499 + GST per month</span>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* One-Time Setup Packages Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Website Development One Time Set-up Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One-time payment packages for complete website ownership. No monthly fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {oneTimeSetupPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 9} />
            ))}
          </div>

          {/* Important Information */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl border-2 border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">1.</span>
                  <span><strong>Hosting & Domain charges extra.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">2.</span>
                  <span><strong>Website includes full admin control.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">3.</span>
                  <span>Ads budget will be paid by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">4.</span>
                  <span>Domain for .com & .in charges will be extra applied.</span>
                </li>
                <li className="flex items-start gap-3 pt-2 border-t border-gray-200">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>All packages are <strong>one-time payment</strong> with no recurring monthly fees.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Custom packages include complete source code ownership.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>All prices are exclusive of GST. Final amount will include applicable taxes.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-teal-200 p-6 sm:p-8 shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
            <div className="space-y-3 text-gray-700 text-center">
              <p className="font-semibold text-lg">Techpotli Digital</p>
              <p>C52A, LGF, Kalka Ji, New Delhi 110019</p>
              <p className="pt-2">
                <span className="font-semibold">Phone:</span> 011-47200987 / 9911475599 / 9211405666 / 9211404666
              </p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href="https://www.techpotlidigital.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline font-medium">
                  www.techpotlidigital.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


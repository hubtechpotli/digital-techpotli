import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import WhatsAppContactButton from "@/components/custom/WhatsAppContactButton";
import { websiteLeadsPackages } from "@/lib/packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website With Guaranteed Lead Generation Services India | High-Converting Sites",
  description:
    "Get a high-converting website with guaranteed lead generation services in India. Perfect for small businesses needing real inquiries, calls, and WhatsApp leads.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/packages/website-leads",
  },
};

export default function WebsiteLeadsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Website Leads"
            heading="Generate High-Quality Leads for Your Business"
            description="In moment's competitive digital world, having a website is n't enough. You need a system that converts guests into implicit guests. Our Website Leads service is designed to attract, internee, and deliver high-quality leads people who are genuinely interested in your products or services."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* What Are Website Leads */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Are Website Leads?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              This ensures your business gets practicable inquiries, not just website business.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Services - How We Help You Induce Leads
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              We give comprehensive results to maximize preeminent generation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Capture performance</h3>
              <p className="text-gray-700">Setting up contact forms, inquiry forms, citation-request forms, and communication request forms to collect frequenter information efficiently.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Landing Page Creation</h3>
              <p className="text-gray-700">Designing devoted runners concentrated on converting guests into leads with user-friendly layouts and conclusive content.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conversion Optimization</h3>
              <p className="text-gray-700">Icing that forms and runners are optimized to maximize completion rates by applying the swish practices in design, messaging, and user experience.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead evidence & Filtering</h3>
              <p className="text-gray-700">Icing that only genuine and applicable leads are delivered, reducing spam and irrelevant inquiries.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Delivery & Management</h3>
              <p className="text-gray-700">Organizing and transferring captured leads in a structured format, making it easy for your team to follow up and convert them into guests.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-700">Monitoring the performance of your preeminent generation system, tracking criteria like lead count, source, and conversion rate to help you make data-driven opinions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Website Leads Service */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Website Leads Service
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              We concentrate on quality over volume. Our approach ensures that you admit leads that are genuinely interested in your business. Pivotal benefits include
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional, Conversion-concentrated Setup</h3>
              <p className="text-gray-700">Optimized runners and forms designed to maximize submissions.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">User-Friendly Experience</h3>
              <p className="text-gray-700">Smooth navigation and easy-to-fill forms that encourage guests to partake their information.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Time and Effort Saved</h3>
              <p className="text-gray-700">We manage the entire setup and delivery process so you can concentrate on following up and closing deals.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable results</h3>
              <p className="text-gray-700">Suitable for startups, small businesses, and large enterprises looking to grow their client base.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Process — Step by Step
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation & demand Analysis</h3>
              <p className="text-gray-700">Understanding your business, target cult, and lead conditions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Levee runner & Form Setup</h3>
              <p className="text-gray-700">Creating optimized runners and lead internee forms predicated on your business conditions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance & Filtering</h3>
              <p className="text-gray-700">Integrating lead internee systems with evidence to ensure quality leads.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing & Optimization</h3>
              <p className="text-gray-700">Icing forms and runners work efficiently across bias and maximize conversion rates.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Monitoring</h3>
              <p className="text-gray-700">Going live, tracking performance, and making acclimations as demanded.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Delivery & Reporting</h3>
              <p className="text-gray-700">Furnishing leads in ready-to-use format along with performance perceptivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use This Service */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who Should Use This Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Businesses and service providers looking for a harmonious aqueduct of good leads.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Companies launching new products or services and demanding fresh inquiries.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Entrepreneurs or small businesses who want to concentrate on serving guests rather of handling technical setup.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <p className="text-gray-700">Any business that wants to turn website guests into real guests, not just runner views.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Lead Generation Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All packages include website development, SEO, social media marketing, and guaranteed business leads
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {websiteLeadsPackages.map((pkg, index) => (
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
              <div className="space-y-2 text-gray-700 mb-6">
                <p className="font-semibold">Techpotli</p>
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
              <WhatsAppContactButton className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


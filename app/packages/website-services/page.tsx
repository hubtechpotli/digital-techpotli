import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import WhatsAppContactButton from "@/components/custom/WhatsAppContactButton";
import { websiteServicesPackages } from "@/lib/packages";
import type { Metadata } from "next";

// Force static generation for better performance
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

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
            badge="Website Designing Company In India"
            heading="Website Services that make Your Brand Online Business"
            description="An ultramodern, professional website is further than just a web address — it's your digital storefront, credibility builder, and client's first print. Our Website Services deliver end-to-end results from design and development to content integration and conservation — icing your online presence matches your business's ambition and helps you stand out."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What We Offer — Our Core Website Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Website Design & Responsive Layout</h3>
              <p className="text-gray-700">We craft visually appealing, brand-aligned website designs that work seamlessly across desktop, tablet, and mobile bias. Whether you need a simple instructional website or a completely featured dynamic point, our designs insure your point looks professional and loads easily, giving callers a great stoner experience.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stationary & Dynamic Website Development</h3>
              <p className="text-gray-700">Depending on your requirements we make both stationary websites (for instructional spots, portfolios) and dynamic websites (with interactive features, CMS, forms, backend) so your website grows with your business.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Integration & Introductory SEO Setup</h3>
              <p className="text-gray-700">We integrate all necessary content — textbook, images, service product runners, contact/ enquiry forms — in a structured, readable, and SEO-ready manner. Introductory SEO setup ensures your website is optimized for hunt machines from day one.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead Capture & Contact/ Enquiry Forms</h3>
              <p className="text-gray-700">For businesses seeking guests or guests, we give intertwined contact or enquiry forms (or message request forms), to help you capture implicit leads directly from your website making it easier for interested callers to reach out.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sphere, Hosting & Security Setup (Optional)</h3>
              <p className="text-gray-700">Still, we can help with sphere enrollment, hosting configuration, If demanded.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Website Conservation & Support</h3>
              <p className="text-gray-700">After launch, we continue to support your website updates, backups, small changes, performance checks so your website remains up-to-date, functional, and aligned with your growing business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Responsive Website Design in Delhi */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Responsive Website Design in Delhi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">All-in-One result Under One Roof</h3>
              <p className="text-gray-700">Design, development, hosting, content, conservation — sab hum handle karte hain, takki aapko alag-alag merchandisers ke saath juggle na karna pade.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional & stoner-Friendly Websites</h3>
              <p className="text-gray-700">Clean design, fast lading, responsive layout — jisse aapki website callers ko pasand aaye aur trust afar.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible & Scalable — For All Business Sizes</h3>
              <p className="text-gray-700">Chahe aap ek freelancer ho, small business ho, ya large enterprise — hum aapki need ke hisaab se customise karte hain.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO-Ready & Growth-concentrated</h3>
              <p className="text-gray-700">Website structure aur content SEO friendly hogi — jo lambe samay ke liye organic growth aur visibility mein help karegi.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Peace of Mind with Ongoing Support</h3>
              <p className="text-gray-700">Launch ke baad bhi agar aapko updates, conservation, ya variations chahiye sweet — hum available rahenge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Process — How We make Your Website
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demand & Planning</h3>
              <p className="text-gray-700">Churr pahle samjhte hain aapka business, target followership, aur aapka thing (instructional point, supereminent generation, online store ya koi custom demand).</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Layout Creation</h3>
              <p className="text-gray-700">Brand-aligned mockups design drafts banate hain UI/ UX, navigation, runners structure, responsive layout, etc.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development & Setup</h3>
              <p className="text-gray-700">Website figure karte hain — runners, backend (agar zaroor ho), forms, content integration, hosting/ sphere setup agar chahiye.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Integration & SEO Basics</h3>
              <p className="text-gray-700">Aapka content (textbook, images, service details) add karte hain; meta markers, clean law, responsive layout, SEO basics configure karte hain.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing & Quality Assurance</h3>
              <p className="text-gray-700">Insure karte hain ki website har device & cybersurfer pe sahi chalti ho — speed, responsiveness, forms, navigation — sab tested hai.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Deployment</h3>
              <p className="text-gray-700">Website ko live karte hain, taki real callers aa saken aur business shine ho.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conservation & Support</h3>
              <p className="text-gray-700">Launch ke baad bhi updates, security checks, content changes, support — sab give karte hain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who This Is For — Ideal guests
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Small businesses, startups, freelancers, Best Website Development Services Near Me professionals jo apna online presence establish karna chahte hain.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Service providers ya agencies jise sirf information website chahiye ho — portfolio, company details, contact forms ke saath.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Businesses jo apni offline presence ko digitally expand karna chahte hain.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Anyone who wants a clean, professional, easy-to-manage website without dealing with specialized hassles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Website Services Package
            </h2>
          </div>
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


import { SectionHeading } from "@/components/custom/SectionHeading";
import { ServiceCard } from "@/components/landing/ServiceCard";
import { getAllServices } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import GetConsultationButton from "@/components/custom/GetConsultationButton";

export const metadata: Metadata = {
  title: "Digital Services - Website Development, SEO, Social Media & More | Techpotli",
  description: "Techpotli offers complete digital solutions in New Delhi, India. Website development, e-commerce, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and IT services. Get your business online today.",
  keywords: [
    "website development services",
    "SEO services New Delhi",
    "social media marketing",
    "Google ads management",
    "custom software development",
    "CRM development",
    "IT services",
    "digital marketing services"
  ],
  openGraph: {
    title: "Digital Services - Website Development, SEO, Social Media & More | Techpotli",
    description: "Techpotli offers complete digital solutions in New Delhi, India. Website development, e-commerce, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and IT services.",
    url: "https://www.techpotlidigital.com/services",
  },
  alternates: {
    canonical: "https://www.techpotlidigital.com/services",
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Marketing and Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Techpotli",
      "url": "https://www.techpotlidigital.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C52A, LGF, Kalka Ji",
        "addressLocality": "New Delhi",
        "postalCode": "110019",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "position": index + 1
      }))
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 pt-24 pb-16 sm:pt-28 sm:pb-20 md:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse -z-10" />
          <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            heading="Complete Digital Solutions for Your Business"
            description="Everything you need to get your business online and growing. We build websites, handle SEO, manage social media, run ads, develop custom software, and provide IT support. All from one team in New Delhi."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Skilled Developers Team Section */}
      <section 
        className="relative py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://cdn.prod.website-files.com/645daf43a3ee21e994d55d2f/64927815c4b7189b315d7084_careers-1200x627px.jpg)` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 via-cyan-600/80 to-blue-600/80"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
              Experienced Developers Team
            </h2>
            <p className="text-lg sm:text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Our developers write clean, working code. We know React, Next.js, Node.js, Python, and other modern technologies. 
              Whether you need a website, custom software, or a full application, we build it right and get it working. 
              From your idea to a live, functioning product.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">Full Stack Development</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">Custom Software</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">CRM Solutions</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                <span className="font-semibold">IT Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to grow your business online, built by our team
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Talk to us about what you need. We'll help you figure out the best way to get your business online and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GetConsultationButton className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" />
            <Link
              href="/packages"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-teal-500 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300"
            >
              View Our Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


import { SectionHeading } from "@/components/custom/SectionHeading";
import { ServiceCard } from "@/components/landing/ServiceCard";
import { getAllServices } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services - Techpotli",
  description: "Complete digital solutions for your business. Website development, full stack development, custom software, CRM development, IT services, SEO, social media marketing, Google & Meta ads, branding, and hosting services. Our experienced developers team turns your ideas into code.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            heading="Complete Digital Solutions for Your Business"
            description="We provide comprehensive digital services to help your business grow online. From website development to SEO, social media marketing, custom software, CRM development, and full IT services."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* Skilled Developers Team Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-lg">
              Experienced Developers Team
            </h2>
            <p className="text-lg sm:text-xl text-teal-50 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Our skilled and experienced developers team transforms your ideas into production-ready code. 
              With expertise across multiple technologies and frameworks, we deliver high-quality solutions 
              that scale with your business. From concept to deployment, we turn your vision into reality.
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
              Comprehensive digital solutions delivered by our experienced development team
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and grow online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I'm interested in getting a free consultation for digital services from Techpotli. Could you please provide more information?"
                );
                window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </button>
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


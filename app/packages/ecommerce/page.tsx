import { SectionHeading } from "@/components/custom/SectionHeading";
import { PackageCard } from "@/components/landing/PackageCard";
import WhatsAppContactButton from "@/components/custom/WhatsAppContactButton";
import { ecommercePackages } from "@/lib/packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Website Design With Admin Panel India | Online Store Experts",
  description:
    "Launch your online store with expert ecommerce website design services in India. Includes a full admin panel, product management, secure checkout, and payment gateway setup.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/packages/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Complete E-Commerce Company in India"
            heading="What Are Complete E-Commerce Results?"
            description="Complete E-Commerce results relate to a full-service package that takes care of every aspect of your online store — from design and development to payment integration, product operation, and order fulfillment. Rather of dealing with multiple merchandisers or handling specialized tasks yourself, our service ensures your store is completely functional, secure, and optimized for deals."
            size="lg"
            align="center"
            as="h1"
            badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg !max-w-full !whitespace-normal !text-center"
            showDescriptionToScreenReaders={true}
          />
        </div>
      </section>

      {/* E-Commerce Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              E-Commerce Services in India
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Store Design & Responsive Layout</h3>
              <p className="text-gray-700">We design an seductive, professional, and brand-aligned online store that works seamlessly on desktop, tablet, and mobile bias, giving your guests a smooth shopping experience on any platform.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Product roster & Category Management</h3>
              <p className="text-gray-700">Your products are organized into clear orders, with easy hunt and sludge options. Guests can snappily find the particulars they want, perfecting shopping experience and boosting deals.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payment Gateway Integration</h3>
              <p className="text-gray-700">We integrate trusted payment gateways that allow safe, smooth, and hassle-free deals, giving your guests confidence to shop from your store.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Shopping wain & Checkout Optimization</h3>
              <p className="text-gray-700">Our streamlined wain and checkout process ensures a amicable experience, reducing wain abandonment and adding transformations.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Order Management & Admin Dashboard</h3>
              <p className="text-gray-700">Manage your orders, force, and client data with an intuitive backend dashboard. Stay systematized and effective as your store grows.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO-Friendly & Performance Optimized</h3>
              <p className="text-gray-700">Your online store will be presto, responsive, and search-machine friendly, helping attract organic business and perfecting visibility online.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable & unborn-Ready Store</h3>
              <p className="text-gray-700">As your business expands, your store can fluently handle further products, advanced business, and new features without performance issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Complete E-Commerce Results */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Complete E-Commerce Results?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional & Trustworthy Storefront</h3>
              <p className="text-gray-700">A clean, well-designed store builds client trust and credibility.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stoner-Centered Shopping Experience</h3>
              <p className="text-gray-700">Easy navigation, quick hunt, and responsive design enhance client satisfaction.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">All-in-One Service</h3>
              <p className="text-gray-700">Design, development, payment integration, product setup, and backend operation all handled by us.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimized for Growth</h3>
              <p className="text-gray-700">SEO-friendly structure and performance optimization for long-term growth.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inflexibility & Control</h3>
              <p className="text-gray-700">You maintain control over products, orders, force, and settings while we handle specialized complications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Process — Step by Step
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demand & Business Analysis</h3>
              <p className="text-gray-700">Understanding your products, guests, and business pretensions.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Store Planning & Architecture</h3>
              <p className="text-gray-700">Designing product orders, navigation, and stoner inflow.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Theme Customization</h3>
              <p className="text-gray-700">Creating a responsive, brand-aligned design.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Development & Integration</h3>
              <p className="text-gray-700">Implementing product roster, wain, checkout, payment, and admin dashboard.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing & Quality Assurance</h3>
              <p className="text-gray-700">Ensuring smooth performance, speed, and usability.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Launch & Deployment</h3>
              <p className="text-gray-700">Making the store live for guests.</p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Launch Support & Conservation</h3>
              <p className="text-gray-700">Ongoing updates, product additions, and specialized support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Profit From Our E-Commerce Website Services */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who Can Profit From Our E-Commerce Website Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Retailers, small businesses, and manufacturers looking to vend online.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Entrepreneurs launching new products or online stores.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Businesses transitioning from offline to online deals.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <p className="text-gray-700">Anyone wanting a secure, scalable, and completely functional online store without specialized headaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your E-Commerce Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All packages include website development with admin panel, payment gateway integration, and complete digital marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {ecommercePackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index + 6} />
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


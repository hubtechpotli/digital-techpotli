"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/packages" },
    { name: "Live Projects", href: "/live-projects" },
    { name: "Blog", href: "/blog" },
  ];

  const services = [
    { name: "Website Design & Development", href: "/services/website-design-development" },
    { name: "SEO Services", href: "/services/seo-services" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Google & Meta Ads", href: "/services/google-meta-ads" },
    { name: "Branding & Design", href: "/services/branding-creative-design" },
  ];

  const contactInfo = {
    phone: "011-47200987",
    mobile: "9911475599",
    email: "info@techpotlidigital.com",
    address: "C52A, LGF, Kalka Ji, New Delhi 110019",
    website: "www.techpotlidigital.com",
  };

  return (
    <footer
      className="relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Top Border */}
      <div className="h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/New_Techpotli_Logo_(2)[2].png"
                  alt="Techpotli Logo"
                  width={180}
                  height={50}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="text-gray-300 text-sm leading-relaxed" itemProp="description">
                Your trusted partner for complete digital solutions. We design, build, and scale
                digital systems to help businesses grow online.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <a
                href="#contact"
                className="inline-flex items-center"
              >
                <Button
                  variant="outline"
                  className="border-teal-500/30 bg-teal-500/10 text-white hover:bg-teal-500/20 hover:border-teal-500/50 cursor-pointer backdrop-blur-sm"
                >
                  Get Free Consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3
              className="mb-6 text-lg font-semibold text-white"
              id="footer-quick-links-heading"
            >
              Quick Links
            </h3>
            <nav className="space-y-3" aria-labelledby="footer-quick-links-heading">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 transition-colors duration-200 hover:text-teal-400 text-sm"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3
              className="mb-6 text-lg font-semibold text-white"
              id="footer-services-heading"
            >
              Our Services
            </h3>
            <nav className="space-y-3" aria-labelledby="footer-services-heading">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 transition-colors duration-200 hover:text-teal-400 text-sm"
                  aria-label={`Learn more about ${service.name}`}
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3
              className="mb-6 text-lg font-semibold text-white"
              id="footer-contact-heading"
            >
              Contact Us
            </h3>
            <div
              className="space-y-4 text-sm"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300" itemProp="streetAddress">
                  {contactInfo.address}
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <div className="space-y-1">
                  <a
                    href={`tel:+91${contactInfo.phone.replace(/-/g, "")}`}
                    className="block text-gray-300 hover:text-teal-400 transition-colors"
                    itemProp="telephone"
                  >
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`tel:+91${contactInfo.mobile}`}
                    className="block text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-teal-400 transition-colors break-all"
                  itemProp="email"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors text-sm"
                  itemProp="url"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Techpotli. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                href="/packages"
                className="hover:text-teal-400 transition-colors"
              >
                Packages
              </Link>
              <Link
                href="/live-projects"
                className="hover:text-teal-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="hover:text-teal-400 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

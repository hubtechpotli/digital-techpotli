import { getService, getAllServices } from "@/lib/services";
import { notFound } from "next/navigation";
import ServiceContactButton from "@/components/custom/ServiceContactButton";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ServiceContentParser } from "@/components/custom/ServiceContentParser";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

// Service metadata mapping
const serviceMetadataMap: Record<string, { title: string; description: string }> = {
  "website-design-development": {
    title: "Affordable Website Design Services in Delhi | Best Web Design for SMBs",
    description:
      "Affordable website design services in Delhi for small businesses and startups. Fast, responsive, SEO-friendly websites built with clean UI/UX to help your business grow online.",
  },
  "seo-services": {
    title: "SEO Services in Delhi for Startups | Low Cost SEO Services India",
    description:
      "Get affordable SEO services in Delhi for startups. Low cost SEO services India with proven results. Boost your Google rankings and drive organic traffic to your website.",
  },
  "social-media-marketing": {
    title: "Best Social media Agency in Delhi NCR | Social Media Marketing for Small Businesses",
    description:
      "Boost your brand with the best social media marketing (SMM) agency in Delhi NCR. Affordable Instagram & Facebook marketing for small businesses, startups, and growing brands across India.",
  },
  "google-meta-ads": {
    title: "Google Ads Management Services India | PPC Lead Generation for SMBs",
    description:
      "Get high-ROI Google Ads management services in India. We create profitable PPC campaigns for small businesses and startups to drive leads, calls, and conversions at a low cost.",
  },
  "branding-creative-design": {
    title: "Branding & Creative Design Services India | TechPotli Digital",
    description:
      "Transform your brand identity with expert branding and creative design services - logos, brand style, graphics and visual identity tailored for small businesses in India. Stand out and attract customers with professional design.",
  },
  "domain-hosting-support": {
    title: "Domain, Hosting & Support Services India | Reliable Web Hosting & Maintenance",
    description:
      "Get affordable domain registration, secure hosting and 24/7 support services for businesses in India. We ensure fast loading, high uptime and hassle-free website maintenance so you stay online confidently.",
  },
  "full-stack-development": {
    title: "Best Website Development Agency in Delhi NCR | Custom Web Solutions",
    description:
      "Custom website development services in Delhi NCR for startups and SMEs. We build high-performance websites, landing pages, and complete digital solutions at affordable prices.",
  },
  "custom-software-development": {
    title: "Custom Software Development Services India | Tailored Web & Mobile Apps",
    description:
      "Build custom web and mobile applications with our expert software development team. From concept to deployment we deliver tailored, scalable and secure solutions for startups and enterprises in India.",
  },
  "crm-development": {
    title: "CRM Development Services India | Business CRM & Automation Solutions",
    description:
      "Transform your business with custom CRM development services in India. Streamline customer management, sales tracking and automation ideal for small and medium businesses aiming for growth.",
  },
  "it-services": {
    title: "IT Services & Support India | Complete Tech Solutions for Businesses",
    description:
      "Get comprehensive IT services and support for your business in India including network setup, maintenance, software updates, security and ongoing technical assistance to keep operations smooth.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  
  if (!service) {
    return generatePageMetadata("home");
  }

  const seoData = serviceMetadataMap[slug] || {
    title: `${service.title} - Techpotli`,
    description: service.description,
  };

  return {
    title: seoData.title,
    description: seoData.description,
    alternates: {
      canonical: `https://www.techpotlidigital.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Techpotli",
      "url": "https://www.techpotlidigital.com",
      "logo": "https://www.techpotlidigital.com/New_Techpotli_Logo_(2)[2].png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "C52A, LGF, Kalka Ji",
        "addressLocality": "New Delhi",
        "postalCode": "110019",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9810659666",
        "contactType": "customer service"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": service.title
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center py-16 sm:py-20 md:py-24 lg:py-28"
        style={{ backgroundImage: `url(${service.serviceImage || service.bg_image})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#services-heading"
            className="mb-8 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Services</span>
          </Link>

          <div className="max-w-3xl">
            <SectionHeading
              badge={service.tagline}
              heading={service.title}
              description={service.description}
              size="lg"
              align="left"
              as="h1"
              badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg"
              headingClassName="text-white drop-shadow-lg"
              descriptionClassName="text-white/90 text-lg"
              showDescriptionToScreenReaders={true}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {service.serviceImage && (
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={service.serviceImage}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                <ServiceContentParser content={service.fullDescription} />
              </div>

              {/* CTA Section */}
              <div className="rounded-lg bg-gradient-to-r from-teal-50 to-cyan-50 p-8 border border-teal-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-700 mb-6">
                  Let's discuss how {service.title} can help grow your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <ServiceContactButton title={service.title} className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white" />
                  <Button asChild variant="outline" size="lg">
                    <Link href="/packages">Explore Our Packages</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Deliverables Card */}
                <div className="rounded-lg bg-white border border-gray-200 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">
                          {deliverable.item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {getAllServices()
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 3)
                      .map((relatedService) => (
                        <li key={relatedService.slug}>
                          <Link
                            href={`/services/${relatedService.slug}`}
                            className="text-teal-600 hover:text-teal-700 transition-colors text-sm"
                          >
                            {relatedService.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


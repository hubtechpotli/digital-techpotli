import { getService, getAllServices } from "@/lib/services";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getService(params.slug);
  
  if (!service) {
    return generatePageMetadata("home");
  }

  return {
    title: `${service.title} - Techpotli`,
    description: service.description,
    openGraph: {
      title: `${service.title} - Techpotli`,
      description: service.description,
      images: service.serviceImage ? [service.serviceImage] : [],
    },
    twitter: {
      title: `${service.title} - Techpotli`,
      description: service.description,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center py-16 sm:py-20 md:py-24 lg:py-28"
        style={{ backgroundImage: `url(${service.bg_image})` }}
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
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  {service.fullDescription.split(". ").map((sentence, index) => {
                    if (!sentence.trim()) return null;
                    const fullSentence = sentence.endsWith(".") ? sentence : `${sentence}.`;
                    return (
                      <p key={index} className="text-lg sm:text-xl leading-8">
                        {fullSentence}
                      </p>
                    );
                  })}
                </div>
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
                  <Button asChild size="lg" className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white">
                    <Link href="/#contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/#packages">Explore Our Packages</Link>
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


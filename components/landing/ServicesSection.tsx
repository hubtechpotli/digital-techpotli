"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllServices } from "@/lib/services";

const ServicesCards: React.FC = () => {
  const services = getAllServices();

  return (
    <div className="relative space-y-4 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
      <SectionHeading
        badge="Core Digital Services"
        heading="Everything Your Business Needs to Grow Online"
        description="Techpotli delivers a complete suite of digital solutions — built to launch, scale, and grow your brand online."
        size="lg"
        align="center"
        as="h2"
        id="services-heading"
        className="mb-6 md:mb-14"
        badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg font-semibold"
        headingClassName="bg-gradient-to-r from-gray-900 via-teal-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
        descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
      />

      <div className="relative">
        {services.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className="relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ backgroundImage: `url(${slide.slug === 'domain-hosting-support' || slide.slug === 'it-services' ? slide.bg_image : (slide.serviceImage || slide.bg_image)})` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Content Section - Left Side */}
                <div className="w-full space-y-3 rounded-md bg-white/20 backdrop-blur-lg p-4 sm:space-y-4 sm:p-6 lg:p-8">
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-xs font-normal tracking-wide text-white sm:text-sm">
                      <span> 💡</span> {slide.tagline}
                    </p>
                    <h3 className="heading text-h4 text-white font-semibold drop-shadow-lg">
                      {slide.title}
                    </h3>
                  </div>

                  <p className="text-p text-sm leading-snug text-white/90 sm:text-base lg:max-w-4/5 drop-shadow-md">
                    {slide.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                    {slide.deliverables.map((dl, ix) => (
                      <li
                        key={`deliverable-${dl.item}-${ix}`}
                        className="text-white bg-white/20 backdrop-blur-md rounded-4xl px-3 py-1 text-xs tracking-wide border border-white/30 sm:px-4 hover:bg-white/30 transition-all duration-300"
                      >
                        {dl.item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Link
                      href={`/services/${slide.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded-md px-2 py-1 -ml-2"
                      aria-label={`Learn more about ${slide.title}`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Image Section - Right Side */}
                <div className="relative w-full flex items-center justify-center rounded-lg overflow-hidden shadow-2xl bg-gray-100">
                  {slide.serviceImage ? (
                    <img
                      src={slide.serviceImage}
                      alt={slide.title}
                      className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding={index === 0 ? "sync" : "async"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                    />
                  ) : (
                    <div
                      className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${slide.bg_image})` }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row">
        <Button
          asChild
          className="w-full sm:w-auto px-8 py-6 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Link href="/services">View All Services</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto px-8 py-6 text-base font-medium border-2 hover:bg-gray-50 transition-all duration-300"
        >
          <Link href="/packages">Explore Our Packages</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesCards;

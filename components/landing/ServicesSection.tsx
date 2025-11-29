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
        size="md"
        align="center"
        as="h2"
        id="services-heading"
        className="mb-6 md:mb-14"
      />

      <div className="relative">
        {services.map((slide, index) => (
          <div
            key={`slide-main-${index}`}
            className="relative mb-6 flex h-fit w-full items-center justify-center sm:mb-8 md:mb-10"
          >
            <div
              className="relative h-fit w-full rounded-lg bg-cover p-4 sm:p-6 md:p-8 lg:p-10"
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              <div className="w-full space-y-3 rounded-md bg-white/20 p-4 backdrop-blur-lg sm:space-y-4 sm:p-6 md:max-w-7/12">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="heading text-h4 text-heading font-semibold">{slide.title}</h3>
                  <p className="text-xs font-normal tracking-wide text-[#323c4d] sm:text-sm">
                    <span> 💡</span> {slide.tagline}
                  </p>
                </div>

                {slide.serviceImage && (
                  <div className="my-4 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={slide.serviceImage}
                      alt={slide.title}
                      className="w-full h-auto object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding={index === 0 ? "sync" : "async"}
                      fetchPriority={index === 0 ? "high" : "auto"}
                    />
                  </div>
                )}

                <p className="text-p text-sm leading-snug text-black/60 sm:text-base lg:max-w-4/5">
                  {slide.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3 md:mt-8">
                  {slide.deliverables.map((dl, ix) => (
                    <li
                      key={`deliverable-${dl.item}-${ix}`}
                      className="text-heading bg-tag-bg/20 rounded-4xl px-3 py-1 text-xs tracking-wide backdrop-blur-lg sm:px-4"
                    >
                      {dl.item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <Link
                    href={`/services/${slide.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-heading transition-all duration-300 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md px-2 py-1 -ml-2"
                    aria-label={`Learn more about ${slide.title}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 md:right-12 md:bottom-8 lg:right-16 lg:bottom-10">
                <div className="relative">
                  <span
                    className="text-6xl font-extrabold text-transparent sm:text-7xl md:text-8xl lg:text-9xl"
                    style={{
                      WebkitTextStroke: "2px rgb(225,225,225,0.9",
                      textShadow: "0 1px 2px rgba(225, 225, 225, 0.05)",
                      color: "rgb(0,0,0,0.09)",
                    }}
                  >
                    {index + 1}
                  </span>
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

"use client";

import ImageCarousel from "@/components/custom/ImageCarousel";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import type { CaseStudyType } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ImageSliderProps {
  images: string[];
  caseStudyName: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, caseStudyName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      {images.map((image, imgIndex) => (
        <div
          key={imgIndex}
          className={`absolute inset-0 transition-opacity duration-500 ${
            imgIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image}
            alt={`${caseStudyName} project screenshot ${imgIndex + 1}`}
            fill
            className="object-contain rounded-lg bg-gray-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority={imgIndex === 0}
            quality={85}
          />
        </div>
      ))}
    </div>
  );
};

interface CaseStudyCardProps {
  caseStudy: CaseStudyType;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (cardRef.current && gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(contentRef.current, {
        start: "top 90%",
        duration: 0.8,
        markers: false,
      });

      gsap.effects.fadeUpOnScroll(imageRef.current, {
        start: "top 90%",
        duration: 0.8,
        delay: 0.2,
        markers: false,
      });
    }
  }, [index]);

  return (
    <section
      ref={cardRef}
      className="grid grid-cols-1 gap-8 rounded-lg p-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-4 lg:grid-cols-12 lg:gap-12"
      aria-labelledby={`case-study-${index}-title`}
      role="article"
    >
      <div ref={contentRef} className="col-span-1 space-y-6 lg:col-span-5">
        <div className="space-y-6">
          <div className="flex items-center">
            <Image
              src={caseStudy.logo_src}
              alt={`${caseStudy.name} company logo`}
              width={120}
              height={32}
              className="aspect-auto max-h-8 w-auto"
              loading="lazy"
              quality={75}
            />
          </div>

          <div className="space-y-3">
            <p className="text-tag text-sm font-normal">{caseStudy.name}</p>

            <h3
              id={`case-study-${index}-title`}
              className="text-h4 text-heading pr-4 text-2xl leading-tight font-semibold lg:text-3xl"
            >
              {caseStudy.project_title}
            </h3>
          </div>

          <div className="space-y-4">
            <h4 className="sr-only">Key Features</h4>
            <ul
              className="list-disc space-y-3 pl-4"
              role="list"
              aria-label="Project features and achievements"
            >
              {caseStudy.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-label text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full transition-all duration-200 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
          aria-describedby={`case-study-${index}-description`}
          type="button"
          onClick={() => {
            const message = encodeURIComponent(
              `Hello! I'm interested in learning more about your ${caseStudy.name} case study. Could you please share more details about this project?`
            );
            window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
          }}
        >
          View case study
          <span className="sr-only"> for {caseStudy.name}</span>
        </Button>

        <p id={`case-study-${index}-description`} className="sr-only">
          Learn more about the {caseStudy.name} project and its implementation details
        </p>
      </div>

      <div
        ref={imageRef}
        className="col-span-1 aspect-[4/3] lg:col-span-7"
        role="region"
        aria-label={`${caseStudy.name} project screenshots`}
      >
        {index === 0 ? (
          <ImageSlider images={caseStudy.demo_images} caseStudyName={caseStudy.name} />
        ) : (
          // Carousel for other case studies
          <ImageCarousel
            images={caseStudy.demo_images}
            caseStudyId={index}
            caseStudyName={caseStudy.name}
          />
        )}
      </div>
    </section>
  );
};

const CaseStudies: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the main heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            markers: false, // Set to false for production
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="mx-auto max-w-7xl px-5 py-16 md:py-24"
        aria-labelledby="case-studies-heading"
        role="region"
      >
        {/* Header */}
        <SectionHeading
          ref={headingRef}
          badge="Real Results for Real Businesses"
          heading="Recent case studies"
          description="Here are some real projects we've worked on. See how we helped businesses in Delhi get more customers, improve their online presence, and grow their sales."
          size="lg"
          align="center"
          as="h2"
          id="case-studies-heading"
          className="mb-8 md:mb-14"
          badgeClassName="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 !text-white border-0 shadow-lg font-semibold"
          headingClassName="bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
          descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
        />

        {/* Case Studies */}
        <div className="space-y-8 md:space-y-24" role="main" aria-label="Case studies collection">
          {caseStudies.slice(0, 3).map((caseStudy, index) => (
            <div key={`${caseStudy.name}-${index}`}>
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </div>
          ))}
        </div>

        {/* Skip link for keyboard users */}
        <a
          href="#main-navigation"
          className="sr-only z-50 rounded-md bg-blue-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
        >
          Skip to main navigation
        </a>
      </section>
    </>
  );
};

export default CaseStudies;

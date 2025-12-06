"use client";

import { SectionHeading } from "@/components/custom/SectionHeading";
import type { CaseStudyType } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TestimonialCardProps {
  item: CaseStudyType;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, index }) => {
  const hasTestimonial = Boolean(item.testimonial && item.testimonial.trim().length > 0);
  if (!hasTestimonial) return null;

  return (
    <article
      key={`${item.name}-testimonial-${index}`}
      className="testimonial-card-bg flex h-full w-full flex-col space-y-3 rounded-2xl text-left sm:space-y-4"
      aria-labelledby={`testimonial-${index}-title`}
      role="article"
    >
      <div className="flex items-center justify-center overflow-hidden rounded-t-md">
        <img
          src={item.test_img}
          className="h-auto max-h-64 w-full object-contain"
          alt={`${item.name} project preview image`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="relative flex flex-1 flex-col space-y-3 px-3 pb-3 sm:space-y-4 sm:px-4 sm:pb-4">
        <blockquote
          className="text-heading/90 text-sm leading-tight font-bold tracking-wide sm:text-base md:text-lg"
          cite={item.case_study_link}
        >
          <p id={`testimonial-${index}-title`}>{item.testimonial}</p>
        </blockquote>
        <div className="mt-auto space-y-1 sm:space-y-1.5" aria-label="Client details">
          <div className="flex items-center">
            <img
              src={item.logo_src}
              className="aspect-auto max-h-5 w-auto sm:max-h-6"
              alt={`${item.name} company logo`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="text-heading text-xs font-medium sm:text-sm">
            {item.founder_name}
            {item.position ? (
              <span className="text-tag ml-1 text-xs font-normal sm:ml-2 sm:text-sm">
                {item.position}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </article>
  );
};

function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const testimonials = caseStudies.filter((cs) => cs.testimonial);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.effects.fadeUpOnScroll(headingRef.current, {
        start: "top 80%",
        duration: 0.8,
        markers: false,
      });
    }

    // Cards fade-up (staggered, on scroll)
    if (gridRef.current && gsap.effects?.fadeUpOnScroll) {
      const cards = gridRef.current.querySelectorAll("article");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as Element, {
          start: "top 92%",
          duration: 0.7,
          delay: Math.min(index * 0.04, 0.3),
          markers: false,
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
        aria-labelledby="testimonials-heading"
        role="region"
      >
        {/* Header */}
        <SectionHeading
          ref={headingRef}
          badge="Testimonials"
          heading="Meet our happy clients"
          description="Read what our clients say about working with Techpotli."
          size="lg"
          align="center"
          as="h2"
          id="testimonials-heading"
          className="mb-6 sm:mb-8 md:mb-14"
          showDescriptionToScreenReaders={true}
          badgeClassName="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 !text-white border-0 shadow-lg font-semibold"
          headingClassName="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent font-extrabold text-shadow-lg"
          descriptionClassName="text-gray-600 font-medium max-w-3xl mx-auto"
        />

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3 xl:gap-10"
          ref={gridRef}
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((item, index) => (
            <div role="listitem" key={`${item.name}-${index}`}>
              <TestimonialCard item={item} index={index} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonial;

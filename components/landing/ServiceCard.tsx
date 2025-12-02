"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ServiceType } from "@/lib/services";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "@/lib/GSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Fade up animation on scroll with stagger
    if (gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(cardRef.current, {
        start: "top 85%",
        duration: 0.8,
        delay: index * 0.15,
        markers: false,
      });
    }

    // 3D tilt effect on hover
    const card = cardRef.current;
    const cardInner = card?.querySelector('.card-inner') as HTMLElement;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!card || !cardInner) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      gsap.to(cardInner, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (!cardInner) return;
      gsap.to(cardInner, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      if (!cardInner) return;
      gsap.to(cardInner, {
        scale: 1.03,
        y: -12,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  // Animate deliverables on mount
  useEffect(() => {
    if (contentRef.current) {
      const deliverables = contentRef.current.querySelectorAll(".deliverable-item");
      gsap.fromTo(
        deliverables,
        {
          opacity: 0,
          x: -30,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.4 + index * 0.15,
          ease: "back.out(1.2)",
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative h-full group"
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <div
        className="card-inner relative h-full w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500"
        style={{
          backgroundImage: `url(${service.bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 group-hover:from-black/80 group-hover:via-black/60 transition-all duration-500" />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />
        </div>

        {/* Content */}
        <div ref={contentRef} className="relative p-6 sm:p-8 space-y-5 h-full flex flex-col">
          {/* Tagline Badge */}
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-xs sm:text-sm font-semibold text-teal-300 bg-teal-900/30 px-3 py-1 rounded-full backdrop-blur-sm border border-teal-400/30">
              {service.tagline}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-2xl group-hover:text-teal-200 transition-colors duration-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text group-hover:from-teal-200 group-hover:to-cyan-200">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed flex-grow drop-shadow-md">
            {service.description}
          </p>

          {/* Deliverables */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-2">
              {service.deliverables.slice(0, 4).map((deliverable, idx) => (
                <li
                  key={idx}
                  className="deliverable-item flex items-center gap-2 text-sm text-gray-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span>{deliverable.item}</span>
                </li>
              ))}
              {service.deliverables.length > 4 && (
                <li className="text-xs text-teal-300 font-medium">
                  +{service.deliverables.length - 4} more features
                </li>
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
            >
              <Link href={`/services/${service.slug}`} className="flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>


        {/* Glow Effect on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
      </div>
    </div>
  );
}


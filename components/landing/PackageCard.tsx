"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import type { Package } from "@/lib/packages";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "@/lib/GSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export function PackageCard({ pkg, index }: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Fade up animation on scroll
    if (gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(cardRef.current, {
        start: "top 85%",
        duration: 0.8,
        delay: index * 0.1,
        markers: false,
      });
    }

    // Hover animation
    const card = cardRef.current;
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  // Animate features on mount
  useEffect(() => {
    if (contentRef.current) {
      const features = contentRef.current.querySelectorAll("li");
      gsap.fromTo(
        features,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.05,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`relative h-full group ${
        pkg.popular ? "md:-mt-4 md:mb-4" : ""
      }`}
    >
      <div
        className={`relative h-full w-full rounded-2xl bg-white border-2 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl ${
          pkg.popular
            ? "border-teal-400 shadow-teal-100/50"
            : "border-gray-200 hover:border-teal-300"
        }`}
      >
        {/* Gradient background overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            pkg.popular
              ? "bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"
              : "bg-gradient-to-br from-gray-50 to-teal-50/30"
          }`}
        />

        {/* Content */}
        <div ref={contentRef} className="relative p-6 sm:p-8 space-y-6">
          {/* Popular Badge */}
          {pkg.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg animate-pulse">
                Most Popular
              </span>
            </div>
          )}

          {/* Number Badge */}
          <div className="absolute top-4 right-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center border-2 border-teal-200">
              <span className="text-xl font-bold text-teal-700">{index + 1}</span>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-3 pt-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {pkg.name}
            </h3>
            {pkg.description && (
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {pkg.description}
              </p>
            )}
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-2 pb-4 border-b border-gray-200">
            <span className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {pkg.price}
            </span>
            {pkg.priceNote && (
              <span className="text-base sm:text-lg text-gray-600 font-medium">
                {pkg.priceNote}
              </span>
            )}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">What's Included:</h4>
            <ul className="space-y-3">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={() => {
                const message = encodeURIComponent(
                  `Hello! I'm interested in the *${pkg.name}* package from Techpotli Digital.\n\nPrice: ${pkg.price}${pkg.priceNote ? ` ${pkg.priceNote}` : ""}\n\nCould you please provide more details and help me get started?`
                );
                window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
              }}
              className={`w-full font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                pkg.popular
                  ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white"
                  : "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white"
              }`}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Decorative gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 blur-xl" />
        </div>
      </div>
    </div>
  );
}


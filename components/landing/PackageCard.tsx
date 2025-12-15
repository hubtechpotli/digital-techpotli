"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  const isShowcaseImage = pkg.id === "logo-designing" || pkg.id === "google-my-business";

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

    // Hover animation - Different for popular vs regular cards
    const card = cardRef.current;
    const handleMouseEnter = () => {
      if (pkg.popular) {
        // Premium card uses CSS scale(0.9) - no GSAP animation needed
        return;
      }
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      if (pkg.popular) {
        // Premium card uses CSS scale(0.9) - no GSAP animation needed
        return;
      }
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

  // Simple image-only presentation for highlighted showcase packages
  if (isShowcaseImage) {
    return (
      <div ref={cardRef} className="relative">
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={
              pkg.id === "logo-designing"
                ? "/WhatsApp Image 2025-12-12 at 14.06.59.jpeg"
                : "/2nd ad banner.png"
            }
            alt={pkg.name}
            fill
            className="object-contain bg-white"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`relative h-full group ${
        pkg.popular ? "md:-mt-4 md:mb-4" : ""
      }`}
    >
      {/* Premium Card Design for Popular Packages */}
      {pkg.popular && (
        <>
          {/* Premium Badge - Diagonal Corner */}
          <span className="absolute -top-[10px] -left-[10px] w-[150px] h-[150px] overflow-hidden z-20 pointer-events-none flex items-center justify-center">
            <span 
              className="absolute w-[150%] h-10 flex items-center justify-center text-white font-semibold text-xs tracking-[0.1em] uppercase shadow-[0_5px_10px_rgba(0,0,0,0.23)]"
              style={{
                backgroundImage: 'linear-gradient(45deg, #ff6547 0%, #ffb144 51%, #ff7053 100%)',
                transform: 'rotate(-45deg) translateY(-20px)',
              }}
            >
              Premium
            </span>
          </span>

          {/* Corner Decorative Element */}
          <span 
            className="absolute bottom-0 left-0 w-2.5 h-2.5 z-[-1]"
            style={{
              boxShadow: '140px -140px #cc3f47',
              backgroundImage: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)',
            }}
          />
        </>
      )}

      {/* Regular Badge for non-popular packages */}
      {!pkg.popular && (
        <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 pointer-events-none">
          <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative h-full w-full rounded-[20px] border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
          pkg.popular
            ? "bg-gradient-to-br from-[rgba(58,56,56,0.623)] to-[rgb(31,31,31)] border-gray-700/50 shadow-[0_25px_50px_rgba(0,0,0,0.55)] hover:scale-[0.9]"
            : "bg-white border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl"
        }`}
      >
        {/* Gradient background overlay - only for non-popular packages */}
        {!pkg.popular && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gray-50 to-teal-50/30" />
        )}

        {/* Content */}
        {pkg.id === "logo-designing" ? (
          <div className="relative p-4 sm:p-6">
            <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden shadow-md bg-white">
              <Image
                src="/WhatsApp Image 2025-12-12 at 14.06.59.jpeg"
                alt="Logo Designing"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        ) : pkg.id === "google-my-business" ? (
          <div className="relative p-4 sm:p-6">
            <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden shadow-md bg-white">
              <Image
                src="/2nd ad banner.png"
                alt="Google My Business / GBP"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        ) : (
          <div ref={contentRef} className={`relative p-6 sm:p-8 space-y-6 ${pkg.popular ? "pt-8 sm:pt-10" : ""}`}>

            {/* Image if provided */}
            {pkg.image && (
              <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden mb-4">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            {/* Header */}
            <div className="space-y-3 pt-2">
              <h3 className={`text-2xl sm:text-3xl font-bold leading-tight ${
                pkg.popular ? "text-white" : "text-gray-900"
              }`}>
                {pkg.name}
              </h3>
              {pkg.description && (
                <p className={`text-sm sm:text-base leading-relaxed ${
                  pkg.popular ? "text-gray-300" : "text-gray-600"
                }`}>
                  {pkg.description}
                </p>
              )}
            </div>

            {/* Pricing */}
            <div className={`flex items-baseline gap-2 pb-4 border-b ${
              pkg.popular ? "border-gray-600/50" : "border-gray-200"
            }`}>
              <span className={`text-4xl sm:text-5xl font-extrabold ${
                pkg.popular
                  ? "bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              }`}>
                {pkg.price}
              </span>
              {pkg.priceNote && (
                <span className={`text-base sm:text-lg font-medium ${
                  pkg.popular ? "text-gray-300" : "text-gray-600"
                }`}>
                  {pkg.priceNote}
                </span>
              )}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className={`text-lg font-semibold ${
                pkg.popular ? "text-white" : "text-gray-900"
              }`}>
                What's Included:
              </h4>
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-orange-500 to-red-500"
                          : "bg-gradient-to-r from-teal-500 to-cyan-500"
                      }`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <span className={`text-sm sm:text-base leading-relaxed flex-1 ${
                      pkg.popular ? "text-gray-200" : "text-gray-700"
                    }`}>
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
                    `Hello! I'm interested in the *${pkg.name}* package from Techpotli.\n\nPrice: ${pkg.price}${pkg.priceNote ? ` ${pkg.priceNote}` : ""}\n\nCould you please provide more details and help me get started?`
                  );
                  window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
                }}
                className={`w-full font-semibold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-[#ff6547] via-[#ffb144] to-[#ff7053] hover:from-[#ff7053] hover:via-[#ffb144] hover:to-[#ff6547] text-white"
                    : "bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white"
                }`}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}

        {/* Decorative gradient border on hover */}
        {!pkg.popular && (
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 blur-xl" />
          </div>
        )}
        
        {/* Premium glow effect for popular packages */}
        {pkg.popular && (
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ff6547]/20 via-[#ffb144]/20 to-[#ff7053]/20 blur-xl" />
          </div>
        )}
      </div>
    </div>
  );
}


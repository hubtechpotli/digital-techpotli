"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { ExternalLink, Info, User, Clock, Sparkles } from "lucide-react";
import { PortfolioProject } from "@/lib/data/portfolio";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "@/lib/GSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioCardProps {
  project: PortfolioProject;
  onInfoClick: (project: PortfolioProject) => void;
  index?: number;
}

export function PortfolioCard({ project, onInfoClick, index = 0 }: PortfolioCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleInfoClick = useCallback(() => {
    onInfoClick(project);
  }, [onInfoClick, project]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Fade up animation on scroll with stagger
    if (gsap.effects?.fadeUpOnScroll) {
      gsap.effects.fadeUpOnScroll(cardRef.current, {
        start: "top 85%",
        duration: 0.8,
        delay: index * 0.1,
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
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;

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
        y: -10,
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

  // Animate content on mount
  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('.animate-item');
      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.3 + index * 0.1,
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
        perspective: "1000px",
      }}
    >
      <div
        className="card-inner relative h-full w-full rounded-2xl overflow-hidden bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Effect on Hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />

        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100">
          {!imageError ? (
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <span className="text-white font-bold text-xl">{project.title.charAt(0)}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">{project.title}</p>
              </div>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 group-hover:via-black/30 transition-all duration-500" />

          {/* Animated Background Pattern on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-blue-500/20 animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
          </div>

          {/* Action Buttons */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <button
              onClick={handleInfoClick}
              className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 hover:shadow-xl"
              title="View Details"
            >
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600" />
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 bg-white/95 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 hover:shadow-xl"
              title="View Live Site"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600" />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div ref={contentRef} className="p-4 sm:p-5 md:p-6 bg-white">
          {/* Category Badge */}
          <div className="mb-2 sm:mb-3 animate-item">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs font-semibold rounded-full border border-teal-200/50 shadow-sm">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />
              <span className="truncate max-w-[200px] sm:max-w-none">{project.category}</span>
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:via-cyan-600 group-hover:to-blue-600 transition-all duration-300 animate-item leading-tight">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 animate-item">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 animate-item">
            <div className="flex items-center text-xs text-gray-500">
              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 text-teal-500 flex-shrink-0" />
              <span className="truncate">{project.client}</span>
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 sm:mr-2 text-cyan-500 flex-shrink-0" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-3 sm:mb-4 animate-item">
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gradient-to-r from-gray-50 to-teal-50 text-gray-700 text-xs rounded-md border border-gray-200/50 font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-xs rounded-md border border-teal-200/50 font-medium">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex gap-2 animate-item">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline">View Live Demo</span>
              <span className="sm:hidden">View Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

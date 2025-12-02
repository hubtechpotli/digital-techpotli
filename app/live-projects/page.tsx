"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { PortfolioCard } from "@/components/portfolio/portfolio-card";
import { allPortfolioProjects, portfolioCategories, PortfolioProject } from "@/lib/data/portfolio";
import { ArrowLeft, ExternalLink, Filter, Sparkles, Code2, Globe, ArrowUp, Menu } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { Button } from "@/components/ui/button";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function LiveProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll for back to top button and sticky filter
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setIsFilterSticky(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to category
  const scrollToCategory = (category: string) => {
    const element = categoryRefs.current[category];
    if (element) {
      // Responsive offset based on screen size
      const isMobile = window.innerWidth < 640;
      const offset = isMobile ? 120 : 140; // Account for sticky filter
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.effects.fadeUpOnScroll(sectionRef.current, {
        duration: 0.8,
        yOffset: 30,
        start: "top 85%",
      });
    }

    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll(".stat-item");
      gsap.fromTo(
        stats,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (filterRef.current) {
      gsap.effects.fadeUpOnScroll(filterRef.current, {
        duration: 0.6,
        yOffset: 20,
        start: "top 90%",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return allPortfolioProjects;
    }
    return allPortfolioProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  // Group projects by category for display
  const projectsByCategory = useMemo(() => {
    const grouped: Record<string, PortfolioProject[]> = {};
    filteredProjects.forEach((project) => {
      if (!grouped[project.category]) {
        grouped[project.category] = [];
      }
      grouped[project.category].push(project);
    });
    return grouped;
  }, [filteredProjects]);

  // Get unique categories for quick navigation
  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(allPortfolioProjects.map(p => p.category))).sort();
  }, []);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-teal-50/20 to-cyan-50/20">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors mb-8 group/back"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover/back:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-8">
            <SectionHeading
              badge="Live Projects"
              heading="Our Portfolio of Completed Projects"
              description="Explore our live website demos. From e-commerce platforms to business websites, see our work in action and experience the quality of our web development services."
              size="lg"
              align="center"
              as="h1"
              badgeClassName="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 !text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              headingClassName="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
              showDescriptionToScreenReaders={true}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
            <div className="stat-item bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-teal-100 font-medium leading-tight">Projects Completed</div>
            </div>
            <div className="stat-item bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-teal-100 font-medium leading-tight">Client Satisfaction</div>
            </div>
            <div className="stat-item bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-teal-100 font-medium leading-tight">Support Available</div>
            </div>
            <div className="stat-item bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">Fast</div>
              <div className="text-xs sm:text-sm md:text-base text-teal-100 font-medium leading-tight">Delivery Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <section 
        ref={filterRef}
        className={`py-3 sm:py-4 px-3 sm:px-4 md:px-6 bg-white/90 sm:bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
          isFilterSticky ? 'sticky top-0 z-50 shadow-lg' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-700 font-semibold">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base">Quick Navigation:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  scrollToTop();
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  selectedCategory === "All"
                    ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-300"
                }`}
              >
                All Projects
              </button>
              {uniqueCategories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setTimeout(() => scrollToCategory(category), 100);
                  }}
                  className={`px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-teal-50 border border-gray-200 hover:border-teal-300"
                  }`}
                >
                  <span className="hidden sm:inline">{category.length > 15 ? `${category.substring(0, 15)}...` : category}</span>
                  <span className="sm:hidden">{category.length > 12 ? `${category.substring(0, 12)}...` : category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Category Filter (Scrollable) */}
      <section className="py-4 sm:py-6 px-3 sm:px-4 md:px-6 bg-white/50 backdrop-blur-sm border-b border-gray-100 overflow-x-auto">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 min-w-max sm:min-w-0">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  if (category !== "All") {
                    setTimeout(() => scrollToCategory(category), 100);
                  } else {
                    scrollToTop();
                  }
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg hover:shadow-xl"
                    : "bg-white text-gray-700 hover:bg-teal-50 border-2 border-gray-200 hover:border-teal-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio by Category */}
      <section ref={sectionRef} className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-3 sm:px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {selectedCategory === "All" ? (
            // Show all projects grouped by category
            Object.keys(projectsByCategory).length > 0 ? (
              Object.entries(projectsByCategory).map(([category, projects], catIndex) => (
                <div 
                  key={category} 
                  className="mb-12 sm:mb-16 md:mb-20 scroll-mt-20 sm:scroll-mt-24"
                  ref={(el) => {
                    categoryRefs.current[category] = el;
                  }}
                >
                  <div className="mb-8 sm:mb-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0">
                        <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                        {category}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                      <span className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
                        {projects.length} {projects.length === 1 ? 'Project' : 'Projects'}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((project, index) => (
                      <PortfolioCard
                        key={project.id}
                        project={project}
                        index={catIndex * 10 + index}
                        onInfoClick={(p) => {
                          setSelectedProject(p);
                          setIsModalOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
                  <Globe className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No projects found. Please check the data source.</p>
                </div>
              </div>
            )
          ) : (
            // Show filtered projects
            filteredProjects.length > 0 ? (
              <div>
                <div className="mb-8 sm:mb-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-lg sm:rounded-xl shadow-lg flex-shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                      {selectedCategory}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-0.5 sm:h-1 w-12 sm:w-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                    <span className="text-sm sm:text-base md:text-lg text-gray-500 font-medium">
                      {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {filteredProjects.map((project, index) => (
                    <PortfolioCard
                      key={project.id}
                      project={project}
                      index={index}
                      onInfoClick={(p) => {
                        setSelectedProject(p);
                        setIsModalOpen(true);
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="inline-block p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
                  <Filter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">No projects found in this category.</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 animate-in fade-in-0 zoom-in-95"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 sm:p-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-xl">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Project
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Let's discuss how we can help bring your vision to life with our professional web development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button
              onClick={() => {
                const message = encodeURIComponent(
                  "Hello! I've viewed your live projects and I'm interested in getting started with Techpotli. Could you please provide more information about your services?"
                );
                window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
              }}
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2 inline" />
              Get Started Today
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-5 sm:py-6 font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

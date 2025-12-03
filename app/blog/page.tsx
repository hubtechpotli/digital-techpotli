"use client";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/custom/SectionHeading";
import { blogPosts, blogTags, type BlogPost } from "@/data/blogData";
import "@/lib/GSAPAnimations";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const topPicksRef = useRef<HTMLDivElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);

  // Filter blog posts
  const filteredPosts =
    selectedTag === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tag === selectedTag);

  const topPicks = blogPosts.filter((post) => post.isTopPick).slice(0, 3);

  // Animate hero section
  useGSAP(() => {
    if (heroRef.current) {
      gsap.effects.fadeUpOnScroll(heroRef.current, {
        start: "top 90%",
        duration: 0.8,
        markers: false,
      });
    }
  }, []);

  // Animate top picks
  useGSAP(() => {
    if (topPicksRef.current) {
      const cards = topPicksRef.current.querySelectorAll(".blog-card");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as HTMLElement, {
          start: "top 90%",
          duration: 0.8,
          delay: index * 0.1,
          markers: false,
        });
      });
    }
  }, []);

  // Animate blog grid
  useGSAP(() => {
    if (blogGridRef.current) {
      const cards = blogGridRef.current.querySelectorAll(".blog-card");
      cards.forEach((card, index) => {
        gsap.effects.fadeUpOnScroll(card as HTMLElement, {
          start: "top 90%",
          duration: 0.8,
          delay: index * 0.05,
          markers: false,
        });
      });
    }
  }, [filteredPosts]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-teal-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 sm:space-y-6">
            {/* Badge - Our Blog */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white rounded-3xl px-4 py-1.5 sm:px-6 sm:py-2 shadow-lg text-xs sm:text-sm font-medium">
                Our Blog
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Latest Insights & Resources
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Discover expert tips, industry insights, and practical guides to help grow your business online. From digital marketing strategies to web development best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      {topPicks.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Featured Articles
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Handpicked articles to help you get started
              </p>
            </div>

            <div
              ref={topPicksRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {topPicks.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tags */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              All Articles
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {blogTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedTag === tag
                      ? "bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div
              ref={blogGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={`/blog/${post.slug}`} className="blog-card block h-full">
      <div
        ref={cardRef}
        className="group relative h-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <span className="text-white font-bold text-xl">{post.title.charAt(0)}</span>
                </div>
              </div>
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white border-0 shadow-lg text-xs px-2 py-0.5">
                Featured
              </Badge>
            </div>
          )}

          {/* Tag Badge */}
          <div className="absolute top-2 right-2">
            <Badge className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 shadow-md text-xs px-2 py-0.5">
              {post.tag}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>5 min read</span>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
      </div>
    </Link>
  );
}

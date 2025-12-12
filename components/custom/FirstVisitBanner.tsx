"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { gmbPackage } from "@/lib/packages";

export function FirstVisitBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/WhatsApp Image 2025-12-12 at 14.06.59.jpeg",
    "/WhatsApp Image 2025-12-12 at 14.07.00.jpeg",
  ];

  useEffect(() => {
    // Check if user has seen the banner before
    const hasSeenBanner = localStorage.getItem("hasSeenGMBanner");
    
    if (!hasSeenBanner) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-switch between images every 3 seconds
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, images.length]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenGMBanner", "true");
  };

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hello Techpotli Team,\n\nI'm interested in:\n• Logo Designing\n• Google Business Profile / GMB services\n\nPlease share details, pricing, and next steps to get started.`
    );
    window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      {/* Click outside to close */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl bg-white/95 border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 bg-white hover:bg-gray-100 rounded-full p-2 transition-colors shadow"
          aria-label="Close banner"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Banner images - one by one */}
        <div className="relative h-64 sm:h-80 md:h-96 px-4 py-3">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={handleClick}
              className={`absolute inset-4 rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transition-opacity duration-500 ${
                currentImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Techpotli Banner ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

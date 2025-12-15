"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

export function FirstVisitBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/WhatsApp Image 2025-12-12 at 14.06.59.jpeg",
    "/2nd ad banner.png",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ animation: "fadeIn 0.3s ease-out" }}
    >
      {/* Click outside to close */}
      <div
        className="absolute inset-0 bg-transparent"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-5xl pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors backdrop-blur"
          aria-label="Close banner"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Banner images - one by one */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] max-h-[85vh]">
            {images.map((src, index) => (
              <div
                key={index}
                onClick={handleClick}
                className={`absolute inset-0 cursor-pointer transition-opacity duration-500 ${
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
    </div>
  );
}

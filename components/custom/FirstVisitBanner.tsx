"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { gmbPackage } from "@/lib/packages";

export function FirstVisitBanner() {
  const [isVisible, setIsVisible] = useState(false);

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

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenGMBanner", "true");
  };

  const handleClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in the *${gmbPackage.name}* package from Techpotli.\n\nPrice: ${gmbPackage.price} ${gmbPackage.priceNote || ""}\n\nCould you please provide more details and help me get started?`
    );
    window.open(`https://wa.me/919911475599?text=${message}`, "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30"
        onClick={handleClose}
      />
      
      {/* Banner Card */}
      <div className="relative bg-white rounded-lg shadow-2xl border-2 border-teal-500 overflow-hidden max-w-sm w-full" style={{ animation: 'slideDown 0.3s ease-out' }}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {/* Content */}
        <div 
          onClick={handleClick}
          className="cursor-pointer"
        >
          {/* Image */}
          {gmbPackage.image && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={gmbPackage.image}
                alt={gmbPackage.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          )}

          {/* Package Info */}
          <div className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {gmbPackage.price}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {gmbPackage.priceNote}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {gmbPackage.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              {gmbPackage.description}
            </p>
            <div className="bg-teal-500 text-white text-center py-2 rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors">
              Get Started Now →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

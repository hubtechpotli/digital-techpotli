"use client";

import React from "react";

export default function GetConsultationButton({ className }: { className?: string }) {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in getting a free consultation for digital services from Techpotli. Could you please provide more information?"
    );
    window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      Get a Free Consultation
    </button>
  );
}

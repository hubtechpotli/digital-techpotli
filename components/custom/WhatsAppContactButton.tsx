"use client";

import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  className?: string;
  message?: string;
  children?: React.ReactNode;
};

export default function WhatsAppContactButton({ className, message, children }: Props) {
  const defaultMessage =
    "Hello! I'm interested in your services from Techpotli. Could you please provide more information?";

  const handleClick = () => {
    const encoded = encodeURIComponent(message ?? defaultMessage);
    window.open(`https://wa.me/919911475599?text=${encoded}`, "_blank");
  };

  return (
    <Button onClick={handleClick} className={className}>
      {children ?? "Contact Us on WhatsApp"}
    </Button>
  );
}

"use client";

import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function ServiceContactButton({ title, className, children }: Props) {
  const handleClick = () => {
    const message = encodeURIComponent(
      title
        ? `Hello! I'm interested in *${title}* service from Techpotli. Could you please provide more information and help me get started?`
        : "Hello! I'm interested in your services from Techpotli. Could you please provide more information?"
    );
    window.open(`https://wa.me/919810659666?text=${message}`, "_blank");
  };

  return (
    <Button onClick={handleClick} className={className} size="lg">
      {children ?? "Get a Free Consultation"}
    </Button>
  );
}

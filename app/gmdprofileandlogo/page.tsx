"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const logoImages = [
  { src: "/Gmdprofileandlogo/2nd page of logo.jpeg", alt: "Logo design board 1" },
  { src: "/Gmdprofileandlogo/3rd page of logo.jpeg", alt: "Logo design board 2" },
];

const profileImages = [
  {
    src: "/Gmdprofileandlogo/WhatsApp Image 2025-12-15 at 11.35.14.jpeg",
    alt: "Google Business Profile showcase",
  },
];

const whatsappUrl = `https://wa.me/919911475599?text=${encodeURIComponent(
  "Hello Techpotli team, I loved the logo & Google profile work. Can we discuss a similar project for my business?"
)}`;

export default function GmdProfileAndLogoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-4 text-center">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
            Our Work
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Logo & Google Profile Showcase
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-600">
            A quick glimpse of recent logo explorations and Google Business Profile results.
            Tap any visual to view in detail.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          <GallerySection title="Logo Designs" images={logoImages} />
          <GallerySection title="Google Business Profile" images={profileImages} />
        </div>

        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-center text-gray-700 text-base sm:text-lg">
            Want results like these? Reach out and we’ll share a tailored plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl"
            >
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/order-form">Go to Contact / Order Page</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

type GallerySectionProps = {
  title: string;
  images: { src: string; alt: string }[];
};

function GallerySection({ title, images }: GallerySectionProps) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">
          {title.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {images.map((image) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain bg-gray-50"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <p className="absolute bottom-3 left-4 right-4 text-sm font-medium text-white drop-shadow">
              {image.alt}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


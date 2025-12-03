import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  caseStudyId: number;
  caseStudyName: string;
}

const ImageCarousel = ({ images, caseStudyName }: ImageCarouselProps) => {
  if (!images || images.length === 0) {
    return (
      <div className="relative h-full w-full rounded-lg bg-gray-100 flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  // Use the same simple approach as ImageSlider for consistency
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative h-full w-full rounded-lg overflow-hidden"
      role="region"
      aria-label={`${caseStudyName} project gallery`}
    >
      {images.map((image, imgIndex) => (
        <div
          key={imgIndex}
          className={`absolute inset-0 transition-opacity duration-500 ${
            imgIndex === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image}
            alt={`${caseStudyName} project screenshot ${imgIndex + 1}`}
            fill
            className="object-contain rounded-lg bg-gray-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority={imgIndex === 0}
            quality={85}
            onError={(e) => {
              console.error('Image failed to load:', image);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;

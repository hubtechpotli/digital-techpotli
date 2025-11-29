"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean; // For hero videos that should load immediately
  poster?: string;
  webmSrc?: string;
}

export function VideoPlayer({ src, className, style, priority = false, poster, webmSrc }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(priority); // Start visible if priority
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // For priority videos (hero), load immediately
    if (priority) {
      setIsVisible(true);
      video.load();
    } else {
      // Use Intersection Observer for lazy loading below-the-fold videos
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              // Start loading video when visible
              video.load();
              observer.disconnect();
            }
          });
        },
        {
          rootMargin: "50px", // Start loading 50px before entering viewport
          threshold: 0.01,
        }
      );

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [priority]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    // Optimized loading strategy
    const handleLoadedData = () => {
      setIsLoaded(true);
      // Video can start playing
      video.play().catch(() => {
        // Auto-play was prevented, which is fine
      });
    };

    const handleCanPlay = () => {
      // Ensure video plays when ready
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    const handleLoadedMetadata = () => {
      // Start playing as soon as metadata is loaded for faster perceived performance
      if (priority && video.readyState >= 2) {
        video.play().catch(() => {});
      }
    };

    // Prevent picture-in-picture
    const handleEnterPictureInPicture = (e: Event) => {
      e.preventDefault();
      if (document.pictureInPictureElement === video) {
        document.exitPictureInPicture().catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("loadeddata", handleLoadedData, { once: true });
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("enterpictureinpicture", handleEnterPictureInPicture);

    // Disable picture-in-picture API
    if (video.disablePictureInPicture === undefined) {
      Object.defineProperty(video, "disablePictureInPicture", {
        get: () => true,
        configurable: true,
      });
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("enterpictureinpicture", handleEnterPictureInPicture);
    };
  }, [isVisible, priority]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Placeholder/Poster while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-blue-500/20 animate-pulse z-10"
          style={style}
          aria-hidden="true"
        />
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? "auto" : isVisible ? "metadata" : "none"}
        poster={poster}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        className={className}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          objectFit: "cover",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in",
          ...style,
        } as React.CSSProperties}
        aria-label="Background animation video"
        onContextMenu={(e) => e.preventDefault()}
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}


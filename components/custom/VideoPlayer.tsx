"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoPlayer({ src, className, style }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // For hero video, load metadata first, then start loading video progressively
    // This ensures quality is maintained while not blocking initial page load
    const handleCanPlay = () => {
      // Video can start playing, ensure it plays
      video.play().catch(() => {
        // Auto-play was prevented, which is fine
      });
    };

    // Prevent picture-in-picture
    const handleEnterPictureInPicture = (e: Event) => {
      e.preventDefault();
      if (document.pictureInPictureElement === video) {
        document.exitPictureInPicture().catch(() => {});
      }
    };

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
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("enterpictureinpicture", handleEnterPictureInPicture);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        ...style,
      } as React.CSSProperties}
      aria-label="Background animation video"
      onContextMenu={(e) => e.preventDefault()}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}


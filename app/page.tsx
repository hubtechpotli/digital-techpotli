import { VideoPlayer } from "@/components/custom/VideoPlayer";
import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load below-the-fold sections
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const ServicesSection = dynamic(() => import("@/components/landing/ServicesSection"), {
  loading: () => <div className="min-h-[600px]" />,
});

const CaseStudiesSection = dynamic(() => import("@/components/landing/CaseStudiesSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const ProcessSection = dynamic(() => import("@/components/landing/ProcessSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const TestimonialSection = dynamic(() => import("@/components/landing/TestimonialSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

const ContactSection = dynamic(() => import("@/components/landing/ContactSection"), {
  loading: () => <div className="min-h-[400px]" />,
});

export const metadata: Metadata = generatePageMetadata("home");

export default function Home() {
  return (
    <main id="main-content" role="main" className="relative overflow-x-hidden">
      {/* Full-width video section after header - edge to edge */}
      <section 
        className="relative overflow-hidden"
        style={{ 
          marginTop: '80px',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)',
          marginBottom: 0,
          width: '100vw',
          maxWidth: '100vw',
          padding: 0,
          left: 0,
          right: 0
        }}
        aria-label="Hero animation video"
      >
        <VideoPlayer 
          src="/Video Project 1.mp4"
          className="w-full h-auto"
          style={{
            display: 'block',
            width: '100vw',
            maxWidth: '100vw',
            margin: 0,
            padding: 0
          }}
        />
      </section>
      <HeroSection />
      <ServicesSection />
      <div className="mx-auto max-w-6xl">
        <CaseStudiesSection />
        <ProcessSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </main>
  );
}

import { VideoPlayer } from "@/components/custom/VideoPlayer";
import { generatePageMetadata, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Lazy load below-the-fold sections with optimized loading
const HeroSection = dynamic(() => import("@/components/landing/HeroSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gradient-to-br from-teal-50 to-cyan-50" />,
  ssr: true, // Enable SSR for better initial load
});

const ServicesSection = dynamic(() => import("@/components/landing/ServicesSection"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-gray-50" />,
  ssr: true,
});

const CaseStudiesSection = dynamic(() => import("@/components/landing/CaseStudiesSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

const ProcessSection = dynamic(() => import("@/components/landing/ProcessSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

const TestimonialSection = dynamic(() => import("@/components/landing/TestimonialSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

const ContactSection = dynamic(() => import("@/components/landing/ContactSection"), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-50" />,
});

export const metadata: Metadata = {
  ...generatePageMetadata("home"),
  other: {
    "preload-video": "/Video Project 1.mp4",
  },
};

export default function Home() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Techpotli",
    "description": "Complete digital solutions company in New Delhi, India. We provide website development, e-commerce platforms, SEO services, social media marketing, Google & Meta ads, custom software, CRM development, and full IT services.",
    "url": "https://www.techpotlidigital.com",
    "logo": "https://www.techpotlidigital.com/New_Techpotli_Logo_(2)[2].png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C52A, LGF, Kalka Ji",
      "addressLocality": "New Delhi",
      "postalCode": "110019",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9810659666",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.techpotlidigital.com"
    ],
    "knowsAbout": [
      "Website Development",
      "E-Commerce Development",
      "SEO Services",
      "Social Media Marketing",
      "Google Ads Management",
      "Meta Ads Management",
      "Custom Software Development",
      "CRM Development",
      "Full Stack Development",
      "IT Services",
      "Digital Marketing"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Techpotli",
    "url": "https://www.techpotlidigital.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.techpotlidigital.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main id="main-content" role="main" className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
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
          priority={true}
          poster={"https://res.cloudinary.com/dieth2xb3/image/upload/c_fill,w_1200,h_675,q_auto,f_auto/ssimage_bxr8i6.png"}
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

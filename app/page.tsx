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
  title: "Best Digital Marketing Company in Delhi | Website Design Services | SEO, SMO, PPC",
  description:
    "Looking for the best digital marketing agency in Delhi? We help small businesses grow with web Development services, SEO, SMM, Google Ads, and Best website design company in Delhi.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Delhi |Website Design Services |SEO,SMO,PCC",
    description:
      "Looking for the best digital marketing agency in Delhi?We help small businesses grow with web Development services, SEO,SMM,Google Ads, and Best website design company in Delhi.",
    type: "website",
    url: "https://www.techpotlidigital.com/",
    siteName: "TechPotli Digital",
    images: [
      {
        url: "https://techpotli.com/wp-content/uploads/2025/06/New_Techpotli_Logo_22-1400x460.png",
        alt: "TechPotli Digital — Best Digital Marketing Agency in Delhi NCR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Delhi |Website Design Services |SEO,SMO,PCC",
    description:
      "Looking for the best digital marketing agency in Delhi?We help small businesses grow with web Development services, SEO,SMM,Google Ads, and Best website design company in Delhi.",
    images: ["https://techpotli.com/wp-content/uploads/2025/06/New_Techpotli_Logo_22-1400x460.png"],
  },
  other: {
    "preload-video": "/Video Project 1.mp4",
  },
};

export default function Home() {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Techpotli Digital",
    "alternateName": "Techpotli Digital Marketing  Company  in India",
    "url": "https://www.techpotlidigital.com/",
    "logo": "",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "011-47200987, +91-9911475599",
      "contactType": "technical support",
      "contactOption": "TollFree",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi"],
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61584717418829",
      "https://www.instagram.com/techpotlidigitalofficial/",
      "https://www.youtube.com/@TechPotliDigital",
      "https://www.pinterest.com/TechpotliDigital/",
    ],
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

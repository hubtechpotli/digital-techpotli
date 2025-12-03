import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Design & Services - Complete Web Development Company in India | Techpotli",
  description: "Premier website development company in India offering custom website design, web application development, WordPress, React JS, NextJS, PHP development, mobile app development, digital marketing, and e-commerce solutions. Based in Delhi.",
  keywords: [
    "website development company India",
    "web design company Delhi",
    "web application development",
    "WordPress development",
    "React JS development",
    "NextJS development",
    "PHP development",
    "mobile app development",
    "Android app development",
    "iOS app development",
    "React Native development",
    "digital marketing services",
    "SEO services Delhi",
    "social media marketing",
    "PPC management",
    "e-commerce development",
    "Shopify development",
    "logo design",
    "branding services",
    "web design services"
  ],
  openGraph: {
    title: "Website Design & Services - Complete Web Development Company in India",
    description: "Premier website development company in India offering custom website design, web application development, mobile apps, digital marketing, and e-commerce solutions. We create impeccable web results through our cross-functional teams.",
    url: "https://www.techpotlidigital.com/services/website-design",
    type: "website",
  },
  twitter: {
    title: "Website Design & Services - Complete Web Development Company in India",
    description: "Premier website development company in India offering custom website design, web application development, mobile apps, digital marketing, and e-commerce solutions.",
  },
  alternates: {
    canonical: "https://www.techpotlidigital.com/services/website-design",
  },
};

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


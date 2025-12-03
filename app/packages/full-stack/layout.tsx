import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Website Development - Complete Web Solutions | Techpotli",
  description: "Complete full stack website development services including frontend, backend, database, admin panel, e-commerce functionality, SEO optimization, and 24/7 support. Get everything you need in one solution.",
  keywords: [
    "full stack website development",
    "full stack development services",
    "frontend backend development",
    "complete website solutions",
    "web application development",
    "database design",
    "admin panel development",
    "e-commerce website development",
    "full stack developer",
    "website development company",
    "custom web application",
    "React development",
    "Node.js development",
    "database management",
    "API development"
  ],
  openGraph: {
    title: "Full Stack Website Development - Complete Web Solutions | Techpotli",
    description: "Complete full stack website development services including frontend, backend, database, admin panel, e-commerce functionality, SEO optimization, and 24/7 support.",
    url: "https://www.techpotlidigital.com/packages/full-stack",
    type: "website",
  },
  twitter: {
    title: "Full Stack Website Development - Complete Web Solutions",
    description: "Complete full stack website development services including frontend, backend, database, admin panel, e-commerce functionality, and more.",
  },
  alternates: {
    canonical: "https://www.techpotlidigital.com/packages/full-stack",
  },
};

export default function FullStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


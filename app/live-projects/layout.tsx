import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Projects & Case Studies | Best Website & SEO Results in India",
  description:
    "Explore our digital marketing projects, website designs, SEO results, Google Ads campaigns, and social media work for small businesses across India. TechPotli Digital delivers affordable, high-ROI solutions for startups and companies in Delhi NCR.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/live-projects",
  },
};

export default function LiveProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


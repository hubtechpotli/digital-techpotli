import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Design Services in Delhi | Best Web Design for SMBs",
  description:
    "Affordable website design services in Delhi for small businesses and startups. Fast, responsive, SEO-friendly websites built with clean UI/UX to help your business grow online.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/services/website-design",
  },
};

export default function WebsiteDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

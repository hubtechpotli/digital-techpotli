import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Web Development Services India | End-to-End Web Solutions",
  description:
    "Get full stack web development services in India for custom websites, web apps, ecommerce, CRM integrations, and complete digital infrastructure setup.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/packages/full-stack",
  },
};

export default function FullStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Delhi for Web Development Company in Delhi",
  description:
    "Get professional Digital marketing Company in nehru place Delhi for your Web Development Company. Boost website traffic, generate quality leads, and grow your online presence with SEO & SMO services in Delhi.",
  alternates: {
    canonical: "https://www.techpotlidigital.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

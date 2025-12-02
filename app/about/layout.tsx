import { generatePageMetadata, pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("about");

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = pageMetadata.about.structuredData;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}

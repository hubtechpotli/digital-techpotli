import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { WhatsAppChatbot } from "@/components/custom/WhatsAppChatbot";
import { FirstVisitBanner } from "@/components/custom/FirstVisitBanner";
import { GTM } from "@/components/custom/GTM";
import { SimpleAuthProvider } from "@/lib/auth/SimpleAuthProvider";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  other: {
    "dns-prefetch": "https://wa.me",
    "google-site-verification": "nyg13cTb8PvldsHAxhpOvHSLkCsCn8IkFyX83AZ7GOE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Structured Data - Organization and WebSite Schema (server-side rendered) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.techpotlidigital.com/#organization",
                  "name": "Techpotli Digital",
                  "url": "https://www.techpotlidigital.com/",
                  "logo": "https://www.techpotlidigital.com/_next/image?url=%2FNew_Techpotli_Logo_(2)%5B2%5D.png&w=256&q=75",
                  "description": "Techpotli Digital is a professional digital marketing agency in India offering SEO, website design, PPC and social media marketing services."
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.techpotlidigital.com/#website",
                  "url": "https://www.techpotlidigital.com/",
                  "name": "Techpotli Digital",
                  "publisher": {
                    "@id": "https://www.techpotlidigital.com/#organization"
                  }
                }
              ]
            }),
          }}
        />
        <GTM />
        <SimpleAuthProvider>
          <div className="min-h-screen w-full">
            <Navbar />
            <FirstVisitBanner />
            {children}
            <Footer />
            <WhatsAppChatbot />
          </div>
        </SimpleAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}

import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { WhatsAppChatbot } from "@/components/custom/WhatsAppChatbot";
import { FirstVisitBanner } from "@/components/custom/FirstVisitBanner";
import { SimpleAuthProvider } from "@/lib/auth/SimpleAuthProvider";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
        {/* Google Tag Manager - Server-side rendered for page source visibility */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K79WJLLQ');`,
          }}
        />
        {/* Google Analytics (GA4) - Server-side rendered for page source visibility */}
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C1CVPMMB5K"
        />
        <Script
          id="ga4-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C1CVPMMB5K', {
                page_path: window.location.pathname,
              });
              gtag('config', 'G-J7BFN4WEM3', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K79WJLLQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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

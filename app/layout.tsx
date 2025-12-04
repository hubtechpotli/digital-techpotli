import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { WhatsAppChatbot } from "@/components/custom/WhatsAppChatbot";
import { SimpleAuthProvider } from "@/lib/auth/SimpleAuthProvider";
import { defaultMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        <SimpleAuthProvider>
          <div className="min-h-screen w-full">
            <Navbar />
            {children}
            <Footer />
            <WhatsAppChatbot />
          </div>
        </SimpleAuthProvider>
      </body>
    </html>
  );
}

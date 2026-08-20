import type { ReactNode } from "react";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppChip } from "@/components/layout/WhatsAppChip";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SITE } from "@/lib/data";
import { orgJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ennem Growth Labs | TaskWagon, Snapvy, GIFT & Custom Software in Theni",
    template: "%s | Ennem Growth Labs",
  },
  description: SITE.description,
  keywords: [
    "Ennem Growth Labs",
    "Theni software company",
    "TaskWagon",
    "Snapvy",
    "GIFT",
    "Next.js",
    "WhatsApp automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Orbitron:wght@500;700&family=Outfit:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
        />
        <div className="pointer-events-none fixed inset-0 z-0 hud-grid opacity-70" />
        <div className="scanlines pointer-events-none fixed inset-0 z-0" />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 pt-16 md:pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppChip />
      </body>
    </html>
  );
}

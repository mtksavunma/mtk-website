// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "MTK Savunma – Savunma Teknolojileri",
    template: "%s | MTK Savunma",
  },
  description:
    "Enerji depolama (BATTAI) ve radar zekâ modülleriyle yerli, güvenilir ve yenilikçi savunma çözümleri.",
  metadataBase: new URL("https://mtksavunma.com"),
  openGraph: {
    title: "MTK Savunma – Savunma Teknolojileri",
    description:
      "Enerji ve radar alanlarında yerli, güvenilir ve yenilikçi çözümler.",
    url: "https://mtksavunma.com",
    siteName: "MTK Savunma",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "MTK Savunma OG" }],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MTK Savunma",
    description: "Enerji ve radar alanlarında yerli savunma çözümleri.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/icon1.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-[#0a0f1c] text-white">
        <Navbar />
        <div className="pt-14 min-h-[calc(100vh-56px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

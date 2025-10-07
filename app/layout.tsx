// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Unbounded, Montserrat } from "next/font/google";

// Fontlar (başlık: Unbounded, gövde: Montserrat)
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-unbounded",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

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
    <html lang="tr" className={`${unbounded.variable} ${montserrat.variable}`}>
      {/* Tema tokenları: bg-background & text-foreground */}
      <bo

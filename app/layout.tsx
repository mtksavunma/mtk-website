// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Unbounded, Montserrat } from "next/font/google";

// Başlıklar: Unbounded, Gövde: Montserrat
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
  // Bu iki satır koyu tema sinyali verir (Next Metadata API ile)
  themeColor: "#0b1220",
  other: { "color-scheme": "dark" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${unbounded.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Eski tarayıcılar için de garanti */}
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0b1220" />
      </head>
      {/* arkaplan/metni sınıf olarak da sabitleyelim */}
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="pt-14 min-h-[calc(100vh-56px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

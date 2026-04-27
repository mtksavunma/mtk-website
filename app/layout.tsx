// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/providers";
import { Unbounded, Montserrat } from "next/font/google";

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
  themeColor: "#0b1220",
  other: { "color-scheme": "dark" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${unbounded.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0b1220" />
      </head>

      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Navbar />
          <main className="pt-[76px] min-h-[calc(100vh-76px)]">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
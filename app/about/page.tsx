import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımızda | MTK Savunma",
  description:
    "MTK Uzay ve Savunma Teknolojileri A.Ş.; savunma sistemleri, enerji depolama ve yapay zekâ destekli mühendislik çözümleri geliştiren yerli teknoloji şirketidir.",
};

export default function AboutPage() {
  return <AboutContent />;
}
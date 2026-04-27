import type { Language } from "@/components/providers/LanguageProvider";

export const homeMessages = {
  tr: {
    hero: {
      eyebrow: "Savunma Teknolojileri · Enerji Sistemleri",
      title1: "Savunma ve Enerji",
      title2: "Sektörleri İçin Akıllı",
      title3: "Çözümler",
      description:
        "MTK Uzay ve Savunma Teknolojileri, yapay zekâ destekli batarya yönetim sistemleri, savunma odaklı platform çözümleri ve yeni nesil radar teknolojileri geliştiren mühendislik temelli bir teknoloji şirketidir.",
      pills: ["BATTAI", "STAVIA", "Radar Modülü"],
      primaryCta: "Projelerimizi İnceleyin",
      secondaryCta: "İletişime Geçin",
      imageAlt:
        "MTK Savunma için savunma ve enerji teknolojilerini temsil eden arka plan görseli",
    },
  },
  en: {
    hero: {
      eyebrow: "Defense Technologies · Energy Systems",
      title1: "Smart Solutions",
      title2: "for Defense and Energy",
      title3: "Sectors",
      description:
        "MTK Space and Defense Technologies is an engineering-driven technology company developing AI-supported battery management systems, defense-oriented platform solutions, and next-generation radar technologies.",
      pills: ["BATTAI", "STAVIA", "Radar Module"],
      primaryCta: "Explore Our Projects",
      secondaryCta: "Get in Touch",
      imageAlt:
        "Background visual representing defense and energy technologies for MTK Defense",
    },
  },
} as const;

export function getHomeMessages(lang: Language) {
  return homeMessages[lang];
}
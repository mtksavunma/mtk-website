import type { Language } from "@/components/providers/LanguageProvider";

export type ProjectCategory = "ENERJI" | "RADAR" | "TUMU";

export function getProjectsMessages(lang: Language) {
  if (lang === "en") {
    return {
      eyebrow: "MTK Defence · Project Portfolio",
      title: "Projects",
      intro:
        "Projects developed by MTK Space and Defense Technologies are shaped around defense technologies, energy systems, and AI-supported engineering solutions.",

      categories: {
        TUMU: "All",
        ENERJI: "Energy",
        RADAR: "Radar",
      },

      upcoming: "Coming Soon",
      upcomingText: "Project detail page will be available soon",
      viewProject: "View Project",

      projects: [
        {
          slug: "battai-ai-bms",
          title: "BATTAI – AI-Supported Battery Management System",
          category: "ENERJI" as const,
          summary:
            "A next-generation battery management system developed with hybrid battery architecture, AI-based SoC/SoH estimation, and advanced energy management approach.",
          tags: ["AI-BMS", "Hybrid Battery", "Energy Storage"],
          image: "/projects/battai-main.png",
        },
        {
          slug: "stavia",
          title: "STAVIA – Portable Smart Charging Station System",
          category: "ENERJI" as const,
          summary:
            "A portable, modular, and smart energy storage and charging station solution developed for electric vehicles.",
          tags: ["Portable System", "Charging", "Energy"],
          image: "/projects/stavia.png",
          upcoming: true,
        },
        {
          slug: "radar-zeka-modulu",
          title: "Radar Intelligence Module",
          category: "RADAR" as const,
          summary:
            "A radar-focused analysis module developed to improve low-visibility target analysis, signal processing, and target detection accuracy.",
          tags: ["Radar", "Target Detection", "Signal Analysis"],
          image: "/projects/radar-main.png",
        },
      ],
    };
  }

  return {
    eyebrow: "MTK Savunma · Proje Portföyü",
    title: "Projeler",
    intro:
      "MTK Uzay ve Savunma Teknolojileri tarafından geliştirilen projeler; savunma teknolojileri, enerji sistemleri ve yapay zekâ destekli mühendislik çözümleri odağında şekillenmektedir.",

    categories: {
      TUMU: "Tümü",
      ENERJI: "Enerji",
      RADAR: "Radar",
    },

    upcoming: "Yakında",
    upcomingText: "Detay sayfası yakında yayında",
    viewProject: "Projeyi İncele",

    projects: [
      {
        slug: "battai-ai-bms",
        title: "BATTAI – Yapay Zekâ Destekli Batarya Yönetim Sistemi",
        category: "ENERJI" as const,
        summary:
          "Hibrit batarya mimarisi, yapay zekâ tabanlı SoC/SoH tahmini ve gelişmiş enerji yönetimi yaklaşımıyla geliştirilen yeni nesil batarya yönetim sistemi.",
          tags: ["AI-BMS", "Hibrit Batarya", "Enerji Depolama"],
        image: "/projects/battai-main.png",
      },
      {
        slug: "stavia",
        title: "STAVIA – Taşınabilir Akıllı Şarj İstasyonu Sistemi",
        category: "ENERJI" as const,
        summary:
          "Elektrikli araçlar için geliştirilen taşınabilir, modüler ve akıllı enerji depolama ve şarj istasyonu çözümü.",
        tags: ["Taşınabilir Sistem", "Şarj", "Enerji"],
        image: "/projects/stavia.png",
        upcoming: true,
      },
      {
        slug: "radar-zeka-modulu",
        title: "Radar Zekâ Modülü",
        category: "RADAR" as const,
        summary:
          "Düşük görünürlüklü hedeflerin analizi, sinyal işleme ve hedef tespit doğruluğunu artırmaya yönelik geliştirilen radar odaklı analiz modülü.",
        tags: ["Radar", "Hedef Tespiti", "Sinyal Analizi"],
        image: "/projects/radar-main.png",
      },
    ],
  };
}
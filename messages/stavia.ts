import type { Language } from "@/components/providers/LanguageProvider";

export function getStaviaMessages(lang: Language) {
  if (lang === "en") {
    return {
      hero: {
        back: "← Back to Projects",
        eyebrow: "Renewable Energy · Portable Platform",
        title1: "STAVIA",
        title2: "Portable Smart Energy Platform",
        description:
          "STAVIA is a modular energy platform built on BATTAI infrastructure for portable energy storage, smart charging management, and renewable system integration.",
        badges: ["BATTAI", "Portable", "Smart Charging"],
        cta1: "Request a Meeting",
        cta2: "BATTAI Details",
      },

      quickCards: [
        "Portable System",
        "BATTAI Infrastructure",
        "Renewable Compatibility",
        "Modular Structure",
      ],

      modular: {
        title: "Modular Structure",
        text:
          "STAVIA is a portable energy platform that can scale according to different scenarios.",
        imageAlt: "STAVIA modular structure visual",
      },

      cta: {
        title: "Energy Everywhere with STAVIA",
        button: "Contact Us",
      },
    };
  }

  return {
    hero: {
      back: "← Projelere dön",
      eyebrow: "Yenilenebilir Enerji · Taşınabilir Platform",
      title1: "STAVIA",
      title2: "Taşınabilir Akıllı Enerji Platformu",
      description:
        "STAVIA, BATTAI altyapısını kullanan; taşınabilir enerji depolama, akıllı şarj yönetimi ve yenilenebilir sistem entegrasyonu için geliştirilmiş modüler bir enerji platformudur.",
      badges: ["BATTAI", "Taşınabilir", "Akıllı Şarj"],
      cta1: "Görüşme Talep Et",
      cta2: "BATTAI Detayı",
    },

    quickCards: [
      "Taşınabilir Sistem",
      "BATTAI Altyapı",
      "Yenilenebilir Uyum",
      "Modüler Yapı",
    ],

    modular: {
      title: "Modüler Yapı",
      text:
        "STAVIA farklı senaryolara göre ölçeklenebilen taşınabilir bir enerji platformudur.",
      imageAlt: "STAVIA modüler yapı görseli",
    },

    cta: {
      title: "STAVIA ile Enerji Her Yerde",
      button: "İletişime Geç",
    },
  };
}
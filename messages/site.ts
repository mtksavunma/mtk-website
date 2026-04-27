import type { Language } from "@/components/providers/LanguageProvider";

export const siteMessages = {
  tr: {
    nav: {
      about: "Hakkımızda",
      projects: "Projeler",
      news: "Haberler",
      contact: "İletişim",
      contactCta: "Bize Ulaşın",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      about: "Hakkımızda",
      announcements: "Duyurular",
      contactTitle: "Bize Ulaşın",
      contactForm: "İletişim Formu",
      company: "MTK Uzay ve Savunma Teknolojileri",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      news: "News",
      contact: "Contact",
      contactCta: "Contact Us",
    },
    footer: {
      rights: "All rights reserved.",
      about: "About",
      announcements: "Announcements",
      contactTitle: "Contact Us",
      contactForm: "Contact Form",
      company: "MTK Space and Defense Technologies",
    },
  },
} as const;

export function getSiteMessages(lang: Language) {
  return siteMessages[lang];
}
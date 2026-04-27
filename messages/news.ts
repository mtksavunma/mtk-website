import type { Language } from "@/components/providers/LanguageProvider";

export const newsMessages = {
  tr: {
    section: {
      title: "Haberler",
      description:
        "MTK Savunma’daki güncel gelişmeler, etkinlikler ve proje duyuruları.",
      allNews: "Tüm Haberler",
      readMore: "Devamını Oku",
      monthsShort: [
        "Oca","Şub","Mar","Nis","May","Haz",
        "Tem","Ağu","Eyl","Eki","Kas","Ara",
      ],
    },
    items: [
      {
        slug: "tusiad",
        title: "TÜSİAD Girişimcilik Kampı’nda İlk 10’da Yer Aldık",
        summary:
          "MTK Uzay ve Savunma Teknolojileri A.Ş. olarak TÜSİAD’ın 5 günlük girişimcilik kampına katıldık ve değerlendirme sürecinde ilk 10 girişim arasında yer aldık.",
        date: "2026-02-28",
      },
      {
        slug: "turkiye-innovation-week",
        title: "Türkiye Innovation Week 2025 Sahnesi",
        summary:
          "Türkiye İhracatçılar Meclisi tarafından düzenlenen TIW’25 etkinliği başarıyla tamamlandı.",
        date: "2025-10-11",
      },
      {
        slug: "enerji-forum-fuari",
        title: "Enerji Forum ve Fuarı",
        summary:
          "Yenilenebilir enerji ve depolama odaklı çözümlerimizle fuarda yer aldık.",
        date: "2025-10-07",
      },
      {
        slug: "innopark-demoday-odul",
        title: "Ödül Aldık",
        summary:
          "Konya Innopark’ta düzenlenen DemoDay programında finalist olarak ödül kazandık.",
        date: "2025-09-28",
      },
    ],
  },

  en: {
    section: {
      title: "News",
      description:
        "Recent developments, events, and project announcements from MTK Defense.",
      allNews: "All News",
      readMore: "Read More",
      monthsShort: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec",
      ],
    },
    items: [
      {
        slug: "tusiad",
        title: "Ranked in Top 10 at TÜSİAD Entrepreneurship Camp",
        summary:
          "MTK Space and Defense Technologies Inc. participated in the 5-day TÜSİAD entrepreneurship camp and ranked among the top 10 initiatives.",
        date: "2026-02-28",
      },
      {
        slug: "turkiye-innovation-week",
        title: "Türkiye Innovation Week 2025 Stage",
        summary:
          "The TIW’25 event organized by the Turkish Exporters Assembly was successfully completed.",
        date: "2025-10-11",
      },
      {
        slug: "enerji-forum-fuari",
        title: "Energy Forum and Fair",
        summary:
          "We took part in the fair with our renewable energy and storage focused solutions.",
        date: "2025-10-07",
      },
      {
        slug: "innopark-demoday-odul",
        title: "We Received an Award",
        summary:
          "We received an award as a finalist in the DemoDay program organized by Konya Innopark.",
        date: "2025-09-28",
      },
    ],
  },
} as const;

export function getNewsMessages(lang: Language) {
  return newsMessages[lang];
}
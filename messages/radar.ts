import type { Language } from "@/components/providers/LanguageProvider";

export function getRadarMessages(lang: Language) {
  if (lang === "en") {
    return {
      hero: {
        back: "← Back to Projects",
        eyebrow: "Defense Systems · Radar Analytics · AI-Supported Analysis",
        title1: "Radar Intelligence Module",
        title2: "AI-Supported Radar Analysis System",
        description:
          "The Radar Intelligence Module is a decision-support radar analysis module developed for defense systems, focused on target detection, signal analysis, and the evaluation of low-visibility targets.",
        badges: [
          "Radar Analytics",
          "Target Detection",
          "Signal Analysis",
        ],
        status: "In Development",
        cta1: "Request a Meeting",
        cta2: "All Projects",
      },

      quickStats: [
        { label: "Module Type", value: "AI-Supported Radar Analysis Module" },
        { label: "Focus Area", value: "Defense Systems" },
        { label: "Core Function", value: "Target Detection and Signal Analysis" },
        { label: "Status", value: "In Development" },
      ],

      sections: {
        approach: {
          title: "Core Approach of the Module",
          text:
            "The Radar Intelligence Module is designed as an analysis layer that aims to make radar data used in defense systems more meaningful, interpretable, and effective within decision-making processes.",
          bullets: [
            "Support for radar data analysis and interpretation",
            "Output generation suitable for decision support systems",
            "Modular software architecture approach",
          ],
        },
        detection: {
          title: "Target Detection and Analysis",
          text:
            "The module provides a supporting analysis framework that can be used for the separation, classification, and threat evaluation of targets based on radar data.",
          bullets: [
            "Support for target separation and interpretation",
            "Analytical approach contributing to threat evaluation",
            "Data processing for more reliable decision flows",
          ],
        },
        lowVisibility: {
          title: "Focus on Low-Visibility Targets",
          text:
            "A core development focus of the Radar Intelligence Module is the algorithmic approach supporting the analysis of low-visibility targets. This area constitutes one of the module’s most critical R&D axes.",
          bullets: [
            "Focus on evaluating low-RCS targets",
            "Analysis support for hard-to-detect signals",
            "R&D-oriented algorithm development approach",
          ],
        },
        integration: {
          title: "Integration and Applicability",
          text:
            "The module is considered as a flexible software component that can be integrated into existing radar systems. This approach offers not a standalone system, but an analysis layer that strengthens existing infrastructures.",
          bullets: [
            "Adaptable structure for existing radar infrastructures",
            "Supporting analysis module rather than a standalone system",
            "Flexible integration design for defense systems",
          ],
        },
        useCases: {
          title: "Use Cases",
          items: [
            {
              t: "Target Detection",
              d: "An analytical approach to determine targets faster and more accurately through radar data.",
            },
            {
              t: "Low-Visibility Target Analysis",
              d: "A supporting software module for distinguishing targets with low RCS characteristics.",
            },
            {
              t: "Signal Processing Support Layer",
              d: "An auxiliary analysis structure for processing raw radar data and converting it into meaningful outputs.",
            },
            {
              t: "Decision Support Mechanism",
              d: "An evaluation layer that produces interpretable radar outputs for operators or upper-level systems.",
            },
            {
              t: "Platform Integration",
              d: "A modular software approach that can integrate with existing radar systems.",
            },
            {
              t: "Defense Mission Scenarios",
              d: "Analytical support usable in surveillance, early detection, and threat assessment missions.",
            },
          ],
        },
        specs: {
          title: "Technical Framework",
          rows: [
            ["System Type", "AI-supported radar analysis module"],
            ["Core Function", "Target detection, signal analysis, and decision-support outputs"],
            ["Application Area", "Defense systems and radar infrastructures"],
            ["Structure", "Modular and integration-oriented software approach"],
            ["Status", "In development"],
          ],
          cta1: "Request a Meeting",
          cta2: "Back to Projects",
        },
      },

      imageAlt: {
        approach: "Core approach of the Radar Intelligence Module",
        detection: "Radar target detection and analysis approach",
        lowVisibility: "Low-visibility target analysis",
        integration: "Radar systems integration approach",
      },
    };
  }

  return {
    hero: {
      back: "← Projelere dön",
      eyebrow: "Savunma Sistemleri · Radar Analitiği · Yapay Zekâ Destekli Analiz",
      title1: "Radar Zekâ Modülü",
      title2: "Yapay Zekâ Destekli Radar Analiz Sistemi",
      description:
        "Radar Zekâ Modülü; savunma sistemlerine yönelik geliştirilen, hedef tespiti, sinyal analizi ve düşük görünürlüklü hedeflerin değerlendirilmesine odaklanan karar destek amaçlı bir radar analiz modülüdür.",
      badges: ["Radar Analitiği", "Hedef Tespiti", "Sinyal Analizi"],
      status: "Geliştirme Aşamasında",
      cta1: "Görüşme Talep Et",
      cta2: "Tüm Projeler",
    },

    quickStats: [
      { label: "Modül Tipi", value: "Yapay Zekâ Destekli Radar Analiz Modülü" },
      { label: "Odak Alanı", value: "Savunma Sistemleri" },
      { label: "Ana İşlev", value: "Hedef Tespiti ve Sinyal Analizi" },
      { label: "Durum", value: "Geliştirme Aşamasında" },
    ],

    sections: {
      approach: {
        title: "Modülün Temel Yaklaşımı",
        text:
          "Radar Zekâ Modülü, savunma sistemlerinde kullanılan radar verisini daha anlamlı, daha yorumlanabilir ve karar süreçlerinde daha etkin kullanılabilir hale getirmeyi amaçlayan bir analiz katmanı olarak tasarlanmaktadır.",
        bullets: [
          "Radar verisinin analiz ve yorumlama desteği",
          "Karar destek sistemlerine uygun çıktı üretimi",
          "Modüler yazılım mimarisi yaklaşımı",
        ],
      },
      detection: {
        title: "Hedef Tespiti ve Analiz",
        text:
          "Modül, radar verisi üzerinden hedeflerin ayrıştırılması, sınıflandırılması ve tehdit değerlendirmesi için kullanılabilecek destekleyici bir analiz çerçevesi sunar.",
        bullets: [
          "Hedef ayrıştırma ve yorumlama desteği",
          "Tehdit değerlendirmesine katkı sunan analiz yaklaşımı",
          "Daha güvenilir karar akışları için veri işleme",
        ],
      },
      lowVisibility: {
        title: "Düşük Görünürlüklü Hedeflere Odak",
        text:
          "Radar Zekâ Modülü’nün geliştirme odağında, düşük görünürlüklü hedeflerin analizini destekleyen algoritmik yaklaşım bulunmaktadır. Bu alan, modülün en kritik Ar-Ge eksenlerinden birini oluşturmaktadır.",
        bullets: [
          "Düşük RCS hedeflerin değerlendirilmesine odaklanma",
          "Zor tespit edilen sinyaller için analiz desteği",
          "Ar-Ge odaklı algoritma geliştirme yaklaşımı",
        ],
      },
      integration: {
        title: "Entegrasyon ve Uygulanabilirlik",
        text:
          "Modül, mevcut radar sistemlerine entegre edilebilecek esnek bir yazılım bileşeni olarak düşünülmektedir. Bu yaklaşım, bağımsız bir sistemden çok, mevcut altyapıları güçlendiren bir analiz katmanı sunar.",
        bullets: [
          "Mevcut radar altyapılarına uyarlanabilir yapı",
          "Bağımsız değil, destekleyici analiz modülü yaklaşımı",
          "Savunma sistemlerine uygun esnek entegrasyon kurgusu",
        ],
      },
      useCases: {
        title: "Kullanım Senaryoları",
        items: [
          {
            t: "Hedef Tespiti",
            d: "Radar verisi üzerinden hedeflerin daha doğru ve daha hızlı belirlenmesine yönelik analiz yaklaşımı.",
          },
          {
            t: "Düşük Görünürlüklü Hedef Analizi",
            d: "Düşük RCS karakteristiğine sahip hedeflerin ayırt edilmesine yönelik destekleyici yazılım modülü.",
          },
          {
            t: "Sinyal İşleme Destek Katmanı",
            d: "Ham radar verisinin işlenmesi ve anlamlı çıktılara dönüştürülmesi için yardımcı analiz yapısı.",
          },
          {
            t: "Karar Destek Mekanizması",
            d: "Operatör veya üst sistemler için yorumlanabilir radar çıktıları üreten değerlendirme katmanı.",
          },
          {
            t: "Platform Entegrasyonu",
            d: "Mevcut radar sistemlerine entegre olabilecek modüler yazılım yaklaşımı.",
          },
          {
            t: "Savunma Amaçlı Görev Senaryoları",
            d: "Gözetleme, erken tespit ve tehdit değerlendirme gibi görevlerde kullanılabilecek analiz desteği.",
          },
        ],
      },
      specs: {
        title: "Teknik Çerçeve",
        rows: [
          ["Sistem Tipi", "Yapay zekâ destekli radar analiz modülü"],
          ["Ana İşlev", "Hedef tespiti, sinyal analizi ve karar destek çıktıları"],
          ["Kullanım Alanı", "Savunma sistemleri ve radar altyapıları"],
          ["Yapı", "Modüler ve entegrasyona uygun yazılım yaklaşımı"],
          ["Durum", "Geliştirme aşamasında"],
        ],
        cta1: "Görüşme Talep Et",
        cta2: "Projelere Dön",
      },
    },

    imageAlt: {
      approach: "Radar Zekâ Modülü temel yaklaşımı",
      detection: "Radar hedef tespiti ve analiz yaklaşımı",
      lowVisibility: "Düşük görünürlüklü hedef analizi",
      integration: "Radar sistemlerine entegrasyon yaklaşımı",
    },
  };
}
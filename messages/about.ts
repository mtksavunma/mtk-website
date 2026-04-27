import type { Language } from "@/components/providers/LanguageProvider";

export const aboutMessages = {
  tr: {
    page: {
      eyebrow: "MTK Uzay ve Savunma Teknolojileri A.Ş.",
      title: "Hakkımızda",
      intro:
        "MTK Uzay ve Savunma Teknolojileri A.Ş., savunma sistemleri, enerji depolama ve yapay zekâ destekli mühendislik çözümleri alanlarında çalışan yerli bir teknoloji şirketidir. Şirket, donanım ve yazılımı birlikte ele alan yaklaşımıyla ölçeklenebilir, güvenilir ve ileri teknoloji odaklı sistemler geliştirmektedir.",
      corporateTitle: "Kurumsal Yapı",
      corporateText1:
        "MTK, Ağustos 2024 itibarıyla Sakarya Teknokent’te konumlanan ve Ar-Ge ekseninde büyüyen bir teknoloji girişimidir. Çalışmalarını savunma sanayii ve sivil kullanım alanlarını birlikte değerlendiren bir mühendislik perspektifiyle sürdürmektedir.",
      corporateText2:
        "Şirket; batarya teknolojileri, enerji yönetimi, modüler sistem kurgusu, radar analitiği ve karar destek mekanizmaları gibi alanlarda çözüm üretmeyi hedeflemektedir.",
      approachTitle: "Yaklaşımımız",
      approachText1:
        "MTK’nın yaklaşımı, yalnızca bir ürün geliştirmekten ziyade; teknolojiyi sistem seviyesinde ele almak, bileşenler arası entegrasyonu güçlendirmek ve sahaya uygulanabilir çözümler üretmektir.",
      approachText2:
        "Bu anlayış doğrultusunda şirket, yerli mühendislik kabiliyeti, sürdürülebilir teknoloji üretimi ve yüksek katma değerli Ar-Ge faaliyetlerini temel almaktadır.",
      focusTitle: "Odak Alanlarımız",
      missionTitle: "Misyon",
      missionText1:
        "Türkiye’nin savunma ve enerji teknolojileri alanındaki mühendislik kapasitesine katkı sunmak; yerli, özgün ve uygulanabilir sistem çözümleri geliştirmek MTK’nın temel misyonudur.",
      missionText2:
        "Şirket, yüksek performanslı enerji sistemleri, yapay zekâ destekli kontrol altyapıları ve savunma odaklı teknolojiler aracılığıyla güvenilir çözümler üretmeyi hedeflemektedir.",
      visionTitle: "Vizyon",
      visionText1:
        "MTK’nın vizyonu, savunma sistemleri, enerji depolama ve ileri analiz teknolojileri alanlarında güçlü bir teknoloji markası haline gelmektir.",
      visionText2:
        "Uzun vadede hedef, farklı teknolojik bileşenleri tek bir mühendislik ekosistemi içinde birleştirerek geleceğin güvenlik ve enerji altyapılarına yön veren çözümler geliştirmektir.",
      ecosystemTitle: "Teknoloji Ekosistemimiz",
      achievementsTitle: "Gelişim ve Başarımlar",
    },
    focusAreas: [
      {
        title: "Savunma Sistemleri",
        text: "Savunma platformlarına yönelik enerji, analiz ve entegrasyon çözümleri geliştiriyoruz.",
      },
      {
        title: "Enerji Depolama",
        text: "Hibrit batarya mimarileri, modüler enerji sistemleri ve taşınabilir güç çözümleri üzerinde çalışıyoruz.",
      },
      {
        title: "Yapay Zekâ Destekli Mühendislik",
        text: "BMS, radar analizi ve karar destek süreçlerinde veri odaklı algoritmalar geliştiriyoruz.",
      },
    ],
    ecosystem: [
      {
        title: "BATTAI",
        text: "Savunma sistemlerine yönelik geliştirilen, yapay zekâ destekli patentli hibrit batarya yönetim sistemi.",
      },
      {
        title: "STAVIA",
        text: "BATTAI altyapısını kullanan, taşınabilir enerji ve akıllı şarj platformu.",
      },
      {
        title: "Radar Zekâ Modülü",
        text: "Hedef tespiti, sinyal analizi ve karar destek süreçleri için geliştirilen radar analiz modülü.",
      },
    ],
    achievements: [
      "KOSGEB AR-GE, ÜR-GE ve İnovasyon Destek Programı",
      "Sakarya Teknokent girişimcilik ve teknoloji ekosistemi içerisinde konumlanma",
      "İTÜ Çekirdek ekosistemine kabul",
      "TÜBİTAK odaklı proje geliştirme ve başvuru süreçleri",
      "Savunma ve enerji teknolojileri alanında Ar-Ge odaklı büyüme",
    ],
  },
  en: {
    page: {
      eyebrow: "MTK Space and Defense Technologies Inc.",
      title: "About",
      intro:
        "MTK Space and Defense Technologies Inc. is a domestic technology company operating in defense systems, energy storage, and AI-supported engineering solutions. With an approach that integrates hardware and software, the company develops scalable, reliable, and advanced technology-oriented systems.",
      corporateTitle: "Corporate Structure",
      corporateText1:
        "As of August 2024, MTK is a technology venture located in Sakarya Technopark and growing with an R&D-focused vision. It carries out its work through an engineering perspective that evaluates both defense industry and civilian application areas together.",
      corporateText2:
        "The company aims to produce solutions in areas such as battery technologies, energy management, modular system architecture, radar analytics, and decision support mechanisms.",
      approachTitle: "Our Approach",
      approachText1:
        "MTK’s approach is not only to develop a product, but to address technology at the system level, strengthen integration between components, and produce solutions that can be applied in the field.",
      approachText2:
        "In line with this understanding, the company is built on domestic engineering capability, sustainable technology development, and high value-added R&D activities.",
      focusTitle: "Our Focus Areas",
      missionTitle: "Mission",
      missionText1:
        "MTK’s core mission is to contribute to Türkiye’s engineering capacity in defense and energy technologies and to develop local, original, and applicable system solutions.",
      missionText2:
        "Through high-performance energy systems, AI-supported control infrastructures, and defense-oriented technologies, the company aims to deliver reliable solutions.",
      visionTitle: "Vision",
      visionText1:
        "MTK’s vision is to become a strong technology brand in defense systems, energy storage, and advanced analytics technologies.",
      visionText2:
        "In the long term, the goal is to combine different technological components within a single engineering ecosystem and develop solutions that shape the future security and energy infrastructures.",
      ecosystemTitle: "Our Technology Ecosystem",
      achievementsTitle: "Growth and Achievements",
    },
    focusAreas: [
      {
        title: "Defense Systems",
        text: "We develop energy, analytics, and integration solutions for defense platforms.",
      },
      {
        title: "Energy Storage",
        text: "We work on hybrid battery architectures, modular energy systems, and portable power solutions.",
      },
      {
        title: "AI-Supported Engineering",
        text: "We develop data-driven algorithms for BMS, radar analysis, and decision support processes.",
      },
    ],
    ecosystem: [
      {
        title: "BATTAI",
        text: "An AI-supported patented hybrid battery management system developed for defense systems.",
      },
      {
        title: "STAVIA",
        text: "A portable energy and smart charging platform built on BATTAI infrastructure.",
      },
      {
        title: "Radar Intelligence Module",
        text: "A radar analytics module developed for target detection, signal analysis, and decision support processes.",
      },
    ],
    achievements: [
      "KOSGEB R&D, Product Development and Innovation Support Program",
      "Positioning within Sakarya Technopark’s entrepreneurship and technology ecosystem",
      "Acceptance into the ITU Cekirdek ecosystem",
      "TUBITAK-focused project development and application processes",
      "R&D-oriented growth in defense and energy technologies",
    ],
  },
} as const;

export function getAboutMessages(lang: Language) {
  return aboutMessages[lang];
}
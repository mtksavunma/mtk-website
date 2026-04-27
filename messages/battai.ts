import type { Language } from "@/components/providers/LanguageProvider";

export function getBattaiMessages(lang: Language) {
  if (lang === "en") {
    return {
      hero: {
        back: "← Back to Projects",
        eyebrow: "AI-Supported Energy Management",
        title1: "BATTAI",
        title2: "AI-Supported Hybrid Battery",
        description:
          "BATTAI is a hybrid battery management system developed for defense systems, capable of managing different cell chemistries on a single platform while providing AI-supported state estimation, thermal safety, and mission-based energy optimization.",
        badges: ["Hybrid Battery", "AI-BMS", "Patented"],
        brochure: "Download Brochure",
        demo: "Request Demo / Meeting",
      },

      quickStats: [
        { label: "Product Type", value: "Hybrid Battery Management System" },
        { label: "Focus Area", value: "Defense Systems" },
        { label: "Management", value: "AI-Supported BMS" },
        { label: "Status", value: "Patented Product" },
      ],

      sections: {
        hybrid: {
          title: "Hybrid Architecture",
          text:
            "BATTAI’s main distinction is its hybrid structure that can evaluate different cell chemistries within the same system. This structure offers a balanced solution between energy density, power capability, safety, and mission flexibility required by defense systems.",
          bullets: [
            "Combined use of different cell chemistries",
            "Mission-adaptive hybrid architecture",
            "Modular and intelligent balancing approach",
          ],
        },
        ai: {
          title: "AI-Based State Estimation",
          text:
            "BATTAI approaches SoC and SoH estimation through AI-supported analysis. The system improves safety with anomaly detection and early warning mechanisms while continuously enhancing decision quality through telemetry data.",
          bullets: [
            "SoC / SoH estimation",
            "Anomaly detection and early warning",
            "Real-time telemetry-based monitoring",
          ],
        },
        integration: {
          title: "Integration into Defense Platforms",
          text:
            "BATTAI has been developed to integrate with various mission platforms, primarily defense systems. Its compact, modular, and field-compatible approach enables adaptation to different operational scenarios.",
          bullets: [
            "Compatibility with air, land, sea, and fixed defense systems",
            "CAN, UART, and optional Ethernet communication",
            "Field-serviceable compact structure",
          ],
        },
        scale: {
          title: "Scalability and Configuration",
          text:
            "The structure, scalable at cell, module, and pack level, can be customized according to the power and energy requirements of different defense missions. In this way, BATTAI offers not a single product, but a configurable system approach.",
          bullets: [
            "Flexible series-parallel topology",
            "Adaptation to different power and energy requirements",
            "Modular expansion approach",
          ],
        },
        strategy: {
          title: "Energy Management Strategies",
          text:
            "BATTAI has an advanced energy management logic that jointly evaluates power limiting, peak current management, balancing, and lifetime preservation strategies according to mission profiles.",
          bullets: [
            "Performance preservation under thermal constraints",
            "Cycle life and calendar life optimization",
            "Passive and active balancing approach",
          ],
        },
        ota: {
          title: "Telemetry and Remote Update",
          text:
            "Thanks to live data monitoring, log analysis, and secure update capability, the system can be monitored, improved, and reconfigured in the field.",
          bullets: [
            "Real-time temperature and status monitoring",
            "Firmware and parameter updates",
            "End-to-end traceability",
          ],
        },
        safety: {
          title: "Safety and Durability Approach",
          text:
            "BATTAI is designed for defense use with a focus on safety, thermal control, cell balance, and system durability. This approach aims to ensure reliable field operation.",
          bullets: [
            "Thermal runaway early warning approach",
            "Environmental durability and safety targets",
            "Design focused on system reliability",
          ],
        },
        useCases: {
          title: "Use Cases",
          items: [
            {
              t: "VTOL / Unmanned Aerial Vehicles",
              d: "Hybrid architecture for defense platforms requiring weight, power, and energy optimization.",
            },
            {
              t: "Unmanned Ground Vehicles",
              d: "Adaptive energy management for high-current, durable systems with mission-based operation.",
            },
            {
              t: "Fixed Defense Systems",
              d: "Solution for radar and field systems requiring long-duration power continuity.",
            },
            {
              t: "Field Power Units",
              d: "Advantages in mobile use, rapid deployment, and modular expansion.",
            },
            {
              t: "Naval Platforms",
              d: "Approach focused on durability, safety, and adaptation to different environmental conditions.",
            },
            {
              t: "Mission-Specific Configurations",
              d: "Customizable hybrid battery architecture for different defense scenarios.",
            },
          ],
        },
        specs: {
          title: "Technical Specifications",
          rows: [
            ["Product Structure", "Patented hybrid battery management system"],
            ["Management System", "AI-supported BMS"],
            ["Core Functions", "SoC / SoH estimation, anomaly detection, cell balancing"],
            ["Communication", "CAN, UART, optional Ethernet"],
            ["Primary Application Area", "Defense systems"],
          ],
          brochure: "Download Brochure",
          demo: "Request Demo / Meeting",
        },
      },

      imageAlt: {
        hybrid: "BATTAI hybrid architecture scheme",
        ai: "AI-based SoC and SoH estimation",
        integration: "BATTAI integration into defense platforms",
        scale: "Scalable hybrid energy pack configurations",
        strategy: "BATTAI energy management strategies",
        ota: "BATTAI telemetry and remote update",
        safety: "BATTAI safety and durability approach",
      },
    };
  }

  return {
    hero: {
      back: "← Projelere dön",
      eyebrow: "Yapay Zekâ Destekli Enerji Yönetimi",
      title1: "BATTAI",
      title2: "Yapay Zekâ Destekli Hibrit Batarya",
      description:
        "BATTAI, savunma sistemlerine yönelik geliştirilen; farklı hücre kimyalarını tek platformda yönetebilen, yapay zekâ destekli durum tahmini, termal güvenlik ve görev profiline göre enerji optimizasyonu sunan hibrit bir batarya yönetim sistemidir.",
      badges: ["Hibrit Batarya", "AI-BMS", "Patentli"],
      brochure: "Broşürü İndir",
      demo: "Demo / Görüşme Talep Et",
    },

    quickStats: [
      { label: "Ürün Tipi", value: "Hibrit Batarya Yönetim Sistemi" },
      { label: "Odak Alanı", value: "Savunma Sistemleri" },
      { label: "Yönetim", value: "Yapay Zekâ Destekli BMS" },
      { label: "Durum", value: "Patentli Ürün" },
    ],

    sections: {
      hybrid: {
        title: "Hibrit Mimari",
        text:
          "BATTAI’nin temel farkı, farklı hücre kimyalarını aynı sistem içerisinde birlikte değerlendirebilen hibrit yapısıdır. Bu yapı, savunma sistemlerinin ihtiyaç duyduğu enerji yoğunluğu, güç kapasitesi, güvenlik ve görev esnekliği arasında dengeli bir çözüm sunar.",
        bullets: [
          "Farklı hücre kimyalarının birlikte kullanımı",
          "Görev profiline göre uyarlanabilir hibrit yapı",
          "Modüler ve akıllı dengeleme yaklaşımı",
        ],
      },
      ai: {
        title: "Yapay Zekâ ile Durum Tahmini",
        text:
          "BATTAI, SoC ve SoH tahminini yapay zekâ destekli analiz yaklaşımıyla ele alır. Sistem, anomali tespiti ve erken uyarı mekanizmalarıyla güvenliği artırırken, telemetri verileri üzerinden karar kalitesini sürekli geliştirebilir.",
        bullets: [
          "SoC / SoH kestirimi",
          "Anomali tespiti ve erken uyarı",
          "Gerçek zamanlı telemetri tabanlı izleme",
        ],
      },
      integration: {
        title: "Savunma Platformlarına Entegrasyon",
        text:
          "BATTAI, başta savunma sistemleri olmak üzere farklı görev platformlarına entegre edilebilecek şekilde geliştirilmiştir. Kompakt, modüler ve saha koşullarına uyumlu yaklaşımı sayesinde farklı kullanım senaryolarına uyarlanabilir.",
        bullets: [
          "Hava, kara, deniz ve sabit savunma sistemlerine uyum",
          "CAN, UART ve opsiyonel Ethernet haberleşmesi",
          "Sahada servis edilebilir kompakt yapı",
        ],
      },
      scale: {
        title: "Ölçeklenebilirlik ve Konfigürasyon",
        text:
          "Hücre, modül ve paket seviyesinde ölçeklenebilen yapı, farklı savunma görevlerinin güç ve enerji gereksinimlerine göre özelleştirilebilir. Bu sayede BATTAI, tek bir ürün değil, konfigüre edilebilir bir sistem yaklaşımı sunar.",
        bullets: [
          "Seri-paralel esnek topoloji",
          "Farklı güç ve enerji gereksinimlerine uyum",
          "Modüler genişleme yaklaşımı",
        ],
      },
      strategy: {
        title: "Enerji Yönetim Stratejileri",
        text:
          "BATTAI, görev profiline göre güç limitleme, tepe akım yönetimi, dengeleme ve ömür koruma stratejilerini birlikte değerlendiren gelişmiş bir enerji yönetim mantığına sahiptir.",
        bullets: [
          "Isıl kısıtlar altında performans koruma",
          "Döngü ömrü ve takvim ömrü optimizasyonu",
          "Pasif ve aktif dengeleme yaklaşımı",
        ],
      },
      ota: {
        title: "Telemetri ve Uzak Güncelleme",
        text:
          "Canlı veri izleme, log analizi ve güvenli güncelleme yaklaşımı sayesinde sistem sahada da izlenebilir, iyileştirilebilir ve yeniden yapılandırılabilir.",
        bullets: [
          "Gerçek zamanlı sıcaklık ve durum takibi",
          "Firmware ve parametre güncelleme",
          "Uçtan uca izlenebilirlik",
        ],
      },
      safety: {
        title: "Güvenlik ve Dayanıklılık Yaklaşımı",
        text:
          "BATTAI, savunma kullanımına uygun olacak şekilde güvenlik, termal kontrol, hücre dengesi ve sistem dayanıklılığı odağında tasarlanmıştır. Bu yaklaşım, ürünün sahada güvenilir biçimde çalışmasını hedefler.",
        bullets: [
          "Termal kaçak erken uyarı yaklaşımı",
          "Çevresel dayanım ve güvenlik hedefleri",
          "Sistem güvenilirliğine odaklı tasarım",
        ],
      },
      useCases: {
        title: "Kullanım Senaryoları",
        items: [
          {
            t: "VTOL / İnsansız Hava Araçları",
            d: "Ağırlık, güç ve enerji optimizasyonu gerektiren savunma platformları için hibrit yapı.",
          },
          {
            t: "İnsansız Kara Araçları",
            d: "Yüksek akım, dayanıklılık ve görev profiline göre uyarlanabilir enerji yönetimi.",
          },
          {
            t: "Sabit Savunma Sistemleri",
            d: "Uzun süreli güç sürekliliği isteyen radar ve saha sistemleri için çözüm.",
          },
          {
            t: "Saha Güç Birimleri",
            d: "Mobil kullanım, hızlı kurulum ve modüler genişleme avantajı.",
          },
          {
            t: "Deniz Platformları",
            d: "Dayanıklılık, güvenlik ve farklı çevresel koşullara uyum yaklaşımı.",
          },
          {
            t: "Görev Bazlı Özel Konfigürasyonlar",
            d: "Farklı savunma senaryolarına göre özelleştirilebilir hibrit batarya mimarisi.",
          },
        ],
      },
      specs: {
        title: "Teknik Özellikler",
        rows: [
          ["Ürün Yapısı", "Patentli hibrit batarya yönetim sistemi"],
          ["Yönetim Sistemi", "Yapay zekâ destekli BMS"],
          ["Temel Fonksiyonlar", "SoC / SoH tahmini, anomali tespiti, hücre dengeleme"],
          ["İletişim", "CAN, UART, opsiyonel Ethernet"],
          ["Odak Kullanım Alanı", "Savunma sistemleri"],
        ],
        brochure: "Broşürü İndir",
        demo: "Demo / Görüşme Talep Et",
      },
    },

    imageAlt: {
      hybrid: "BATTAI hibrit mimari şeması",
      ai: "Yapay zekâ tabanlı SoC ve SoH tahmini",
      integration: "BATTAI savunma platformlarına entegrasyon",
      scale: "Ölçeklenebilir hibrit enerji paketi konfigürasyonları",
      strategy: "BATTAI enerji yönetim stratejileri",
      ota: "BATTAI telemetri ve uzak güncelleme",
      safety: "BATTAI güvenlik ve dayanıklılık yaklaşımı",
    },
  };
}
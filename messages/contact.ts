export type Language = "tr" | "en";

export function getContactMessages(lang: Language) {
  if (lang === "en") {
    return {
      // HEADER
      eyebrow: "MTK Defence · Contact",
      title: "Contact",
      intro:
        "You can contact us for collaboration, project discussions, technical evaluations or general inquiries.",

      // OFFICES
      officesTitle: "Our Offices",
      istanbul: "Istanbul Office",
      sakarya: "Sakarya Office",

      // CONTACT INFO
      contactTitle: "Contact Information",
      contactText:
        "You can reach us via the channels below or send us a message using the form.",

      email: "Email",
      work: "Work Areas",
      offices: "Offices",

      // FORM
      formTitle: "Send Message",
      name: "Full Name",
      emailPlaceholder: "Email",
      message: "Your Message",
      submit: "Send",

      // THANKS PAGE
      thanksTitle: "Message received ✔",
      thanksText: "We will contact you shortly.",
      home: "Back to Home",
    };
  }

  return {
    // HEADER
    eyebrow: "MTK Savunma · İletişim",
    title: "İletişim",
    intro:
      "MTK Uzay ve Savunma Teknolojileri ile iş birliği, proje görüşmesi, teknik değerlendirme veya genel bilgi talepleriniz için bizimle iletişime geçebilirsiniz.",

    // OFFICES
    officesTitle: "Ofislerimiz",
    istanbul: "İstanbul Ofisi",
    sakarya: "Sakarya Ofisi",

    // CONTACT INFO
    contactTitle: "İletişim Bilgileri",
    contactText:
      "Aşağıdaki iletişim kanallarından bize ulaşabilir ya da formu doldurarak doğrudan mesajınızı iletebilirsiniz.",

    email: "E-posta",
    work: "Çalışma Alanı",
    offices: "Ofisler",

    // FORM
    formTitle: "Mesaj Gönderin",
    name: "Ad Soyad",
    emailPlaceholder: "E-posta",
    message: "Mesajınız",
    submit: "Gönder",

    // THANKS PAGE
    thanksTitle: "Mesajınız ulaştı ✔",
    thanksText: "En kısa sürede sizinle iletişime geçeceğiz.",
    home: "Anasayfaya Dön",
  };
}
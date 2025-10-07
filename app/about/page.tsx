// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | MTK Savunma",
  description:
    "MTK Uzay ve Savunma Teknolojileri A.Ş.: enerji depolama, yapay zekâ destekli BMS ve radar teknolojilerinde yerli, güvenilir çözümler.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Başlık */}
      <h1 className="text-4xl md:text-5xl font-semibold">Hakkımızda</h1>

      {/* Kurumsal metin */}
      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/80">
          MTK Uzay ve Savunma Teknolojileri A.Ş., Ağustos 2024’te Sakarya
          Teknokent’te kurulmuş; savunma, enerji depolama ve radar teknolojileri
          alanlarında yenilikçi çözümler geliştiren bir teknoloji girişimidir.
          Şirket, yüksek enerji yoğunluklu batarya sistemleri, yapay zekâ
          destekli batarya yönetim sistemleri (BMS), hibrit enerji depolama
          çözümleri ve radar teknolojileri üzerine Ar-Ge faaliyetleri
          yürütmektedir.
        </p>
        <p className="mt-4 text-white/80">
          MTK, donanım ve yazılım entegrasyonunu kendi bünyesinde gerçekleştirme
          kabiliyetiyle; güvenilir, ölçeklenebilir ve yerli mühendislik
          çözümleri üretmektedir. Çalışmalarını hem savunma sanayii hem de sivil
          uygulamalar için sürdüren şirket, teknoloji üretiminde
          sürdürülebilirlik, verimlilik ve milli katkı ilkelerini esas
          almaktadır.
        </p>
      </section>

      {/* Misyon & Vizyon */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Misyon</h2>
          <p className="mt-2 text-white/80">
            MTK’nın misyonu; Türkiye’nin savunma kabiliyetini artırmak, enerji
            teknolojilerinde dışa bağımlılığı azaltmak ve stratejik alanlarda
            yerli ve özgün çözümler geliştirmektir. Şirket, yüksek performanslı
            batarya sistemleri ve yapay zekâ tabanlı kontrol yazılımlarıyla
            savunma platformlarının güvenliğini ve verimliliğini yükseltmeyi
            hedeflemektedir.
          </p>
          <p className="mt-2 text-white/80">
            Ayrıca, üniversite–sanayi iş birlikleriyle araştırma ekosistemine
            katkı sunmak, genç mühendislerin Ar-Ge süreçlerine aktif katılımını
            teşvik etmek ve Türkiye’nin ileri teknoloji üretim kapasitesini
            güçlendirmek MTK’nın temel amaçları arasındadır.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Vizyon</h2>
          <p className="mt-2 text-white/80">
            MTK Uzay ve Savunma Teknolojileri, uzay, kara ve hava savunma
            sistemlerinde öncü teknolojiler geliştirerek, Türkiye’nin teknoloji
            ihracatında güçlü bir marka hâline gelmeyi vizyon edinmiştir.
          </p>
          <p className="mt-2 text-white/80">
            Uzun vadede hedef; enerji depolama, radar sistemleri ve kuantum
            teknolojilerini bir araya getirerek, geleceğin savunma mimarisini
            şekillendiren çözümler üretmektir. MTK, bilime, mühendisliğe ve
            yeniliğe dayalı üretim anlayışıyla yalnızca bugünün değil, geleceğin
            güvenlik ve enerji altyapılarını da inşa etmeyi amaçlamaktadır.
          </p>
        </div>
      </section>

      {/* Başarımlar */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Başarımlar</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-white/80">
          <li>KOSGEB AR-GE, ÜR-GE ve İnovasyon Destek Programı</li>
          <li>Sakarya Teknokent Final</li>
          <li>İTÜ Çekirdek Final</li>
          <li>TÜBİTAK 1005</li>
          <li>KOSGEB İleri Girişimcilik</li>
        </ul>
      </section>
    </main>
  );
}

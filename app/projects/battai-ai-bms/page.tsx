// app/projects/battai-ai-bms/page.tsx
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import BattaiHero from "./battai-hero"; // ✅ doğru import (PascalCase + doğru dosya adı)

export const metadata = {
  title: "BATTAI – AI Destekli Batarya Yönetim Sistemi",
  description:
    "AI tabanlı SoC/SoH, hibrit hücre yönetimi, %63 yerlilik. TÜBİTAK & KOSGEB destekli. Patent başvurusu yapıldı.",
};

export default function BattaiPage() {
  return (
    <>
      {/* HERO – slider client bileşeni */}
      <div className="relative">
        <BattaiHero /> {/* ✅ doğru kullanım */}

        {/* Metin katmanı */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[72vh] max-w-6xl items-center px-6">
            <div className="max-w-3xl">
              <Link href="/projects" className="text-sm text-white/70 hover:underline">
                ← Projelere dön
              </Link>

              <h1 className="mt-3 text-4xl md:text-6xl font-semibold">
                BATTAI – AI Destekli Batarya Yönetim Sistemi
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>AI-BMS</Badge>
                <Badge>Hibrit Hücre Yönetimi</Badge>
                <Badge>%63 Yerli</Badge>
                <Badge>Patent Başvurusu</Badge>
              </div>

              <p className="mt-4 text-white/85">
                LFP/NMC/NCA gibi farklı kimyalarda çalışan modüler BMS; AI ile SoC/SoH,
                termal güvenlik ve görev profiline göre verim optimizasyonu.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/downloads/battai-brosur.pdf"
                  download
                  className="rounded-xl px-5 py-3 bg-white text-black text-sm font-medium"
                >
                  Broşürü İndir (PDF)
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl px-5 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10"
                >
                  Demo / Görüşme
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İÇERİK */}
      <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">
        {/* 1) Hibrit Mimari */}
        <section id="hibrit-mimari" className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Hibrit Mimari</h2>
            <p className="mt-4 text-white/80">
              Farklı hücre kimyalarını tek platformda güvenli ve verimli yöneten,
              görev profiline uyarlanabilir modüler topoloji.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>LFP/NMC/NCA birlikte kullanım</li>
              <li>Akıllı dengeleme & modüler yapı</li>
              <li>Görev profiline göre esnek konfigürasyon</li>
            </ul>
          </div>
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/projects/battai-hibrit.png"
              alt="BATTAI hibrit mimari şeması"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
        </section>

        {/* 2) Yapay Zekâ */}
        <section id="yapay-zeka" className="grid gap-8 md:grid-cols-2 md:items-center">
          <figure className="order-last rounded-2xl border border-white/10 overflow-hidden md:order-first">
            <Image
              src="/projects/battai-ai.png"
              alt="Yapay zekâ tabanlı SoC/SoH tahmini"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Yapay Zekâ ile Durum Tahmini</h2>
            <p className="mt-4 text-white/80">
              SoC/SoH tahmini, yaşlanma modellemesi ve anomali tespitiyle erken
              uyarı; telemetri verileriyle sürekli öğrenen BMS.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>SoC / SoH kestirimi</li>
              <li>Anomali tespiti & erken uyarı</li>
              <li>Gerçek zamanlı telemetri</li>
            </ul>
          </div>
        </section>

        {/* 3) Taşınabilirlik */}
        <section id="tasinabilirlik" className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Taşınabilirlik & Entegrasyon</h2>
            <p className="mt-4 text-white/80">
              Uçan/kara/deniz platformlarına kolay entegrasyon; sahada servis edilebilir
              kompakt tasarım.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>UGV/UA, sabit tesis ve deniz entegrasyonu</li>
              <li>CAN, UART (opsiyonel Ethernet)</li>
              <li>Kompakt ve dayanıklı mekanik</li>
            </ul>
          </div>
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/projects/battai-mobilite.png"
              alt="BATTAI taşınabilirlik ve entegrasyon"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
        </section>

        {/* 4) Ölçeklenebilirlik */}
        <section id="olceklenebilirlik" className="grid gap-8 md:grid-cols-2 md:items-center">
          <figure className="order-last rounded-2xl border border-white/10 overflow-hidden md:order-first">
            <Image
              src="/projects/battai-scale.png"
              alt="Ölçeklenebilir enerji paketi konfigürasyonları"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Ölçeklenebilirlik & Konfigürasyon</h2>
            <p className="mt-4 text-white/80">
              Hücre, modül ve paket seviyesinde seri/paralel genişleme;
              farklı platform gereksinimleri için güç/enerji optimizasyonu.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>1–10 kWh taşınabilir paketlerden yüzlerce kWh sabit sistemlere</li>
              <li>Seri/paralel esnek topoloji, plug & play modüller</li>
              <li>Redundancy ve sıcak-swap senaryoları</li>
            </ul>
          </div>
        </section>

        {/* 5) Enerji Yönetim Stratejileri */}
        <section id="enerji-stratejileri" className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Enerji Yönetim Stratejileri</h2>
            <p className="mt-4 text-white/80">
              Görev profiline göre güç limitleme, tepe akım yönetimi (peak shaving),
              dengeleme ve ömür uzatma stratejileri.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>Isıl kısıtlar altında performans koruma</li>
              <li>Cycle-life & calendar-life optimizasyonu</li>
              <li>Akıllı dengeleme: pasif/aktif</li>
            </ul>
          </div>
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/projects/battai-strategy.png"
              alt="Enerji yönetim stratejileri"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
        </section>

        {/* 6) Telemetri & OTA */}
        <section id="telemetri-ota" className="grid gap-8 md:grid-cols-2 md:items-center">
          <figure className="order-last rounded-2xl border border-white/10 overflow-hidden md:order-first">
            <Image
              src="/projects/battai-ota.png"
              alt="Telemetri ve OTA güncellemeleri"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Telemetri & Uzak Güncelleme (OTA)</h2>
            <p className="mt-4 text-white/80">
              Canlı veri izleme, log analizi ve güvenli OTA ile sahada kalibrasyon
              ve algoritma güncellemeleri.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>Gerçek zamanlı SoC/SoH & ısı profilleri</li>
              <li>Güvenli firmware/parametre güncellemesi</li>
              <li>Uçtan uca izlenebilirlik</li>
            </ul>
          </div>
        </section>

        {/* 7) Güvenlik & Sertifikasyon */}
        <section id="guvenlik-sertifikasyon" className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Güvenlik & Sertifikasyon Yol Haritası</h2>
            <p className="mt-4 text-white/80">
              Termal kaçak erken uyarı, izolasyon izleme ve fonksiyonel güvenlik
              hedefleri; savunma ve sanayide yaygın standartlarla uyum.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>EMC/EMI uyumluluğu hedefleri</li>
              <li>Çevresel test ve dayanım (sarsıntı/şok)</li>
              <li>Fonksiyonel güvenlik gereksinimleri</li>
            </ul>
          </div>
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/projects/battai-safety.png"
              alt="Güvenlik ve sertifikasyon yaklaşımı"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
        </section>

        {/* 8) Kullanım Senaryoları */}
        <section id="kullanim-senaryolari">
          <h2 className="text-3xl md:text-4xl font-semibold">Kullanım Senaryoları</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "UGV/İnsansız Kara", d: "Yüksek akım ve dayanıklılık odaklı konfigürasyon." },
              { t: "UA/VTOL", d: "Ağırlık/enerji optimizasyonlu paket tasarımı." },
              { t: "Radar & İstasyon", d: "Sabit sistemlerde uzun süreli güç sürekliliği." },
              { t: "Sahil & Deniz", d: "Korozyon/EMI kısıtlarına uygun muhafaza." },
              { t: "Saha Güç Ünitesi", d: "Hızlı kurulum, modüler genişleme." },
              { t: "Yenilenebilir Entegrasyonu", d: "PV/RES ile hibrit depolama." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 p-5">
                <div className="text-lg font-semibold">{c.t}</div>
                <p className="mt-2 text-white/75 text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Teknik tablo + CTA */}
        <section id="teknik-ozellikler" className="rounded-2xl border border-white/10 p-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Teknik Özellikler</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-2 pr-6 text-white/70">Hücre Kimyası</td>
                  <td className="py-2">LFP / NMC / NCA (hibrit destek)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">AI-BMS</td>
                  <td className="py-2">SoC/SoH, anomali tespiti, yaşlanma modeli</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">Güvenlik</td>
                  <td className="py-2">Termal kaçak erken uyarı, hücre dengeleme</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">İletişim</td>
                  <td className="py-2">CAN, UART (opsiyonel Ethernet)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">Verim</td>
                  <td className="py-2">%98</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/downloads/battai-brosur.pdf"
              download
              className="rounded-xl px-5 py-3 bg-white text-black text-sm font-medium"
            >
              Broşürü İndir (PDF)
            </a>
            <Link
              href="/contact"
              className="rounded-xl px-5 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10"
            >
              Demo / Görüşme Talep Et
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

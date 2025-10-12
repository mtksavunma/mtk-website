// app/projects/radar-zeka-modulu/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import RadarHero from "./radar-hero";

export const metadata: Metadata = {
  title: "Radar Zekâ Modülü – Geliştirme Aşamasında",
  description:
    "Mevcut radar platformlarına tak-çalıştır analiz katmanı: düşük RCS hedeflerde gelişmiş tespit/izleme ve menzil optimizasyonu.",
};

export default function RadarPage() {
  return (
    <>
      {/* HERO – 3 görsel, 2 sn’de bir geçiş + noktalar */}
      <div className="relative">
        <RadarHero />

        {/* Metin katmanı */}
        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[72vh] max-w-6xl items-center px-6">
            <div className="max-w-3xl">
              <Link href="/projects" className="text-sm text-white/70 hover:underline">
                ← Projelere dön
              </Link>

              <h1 className="mt-3 text-4xl md:text-6xl font-semibold">
                Radar Zekâ Modülü
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge>Analiz &amp; Algoritma Katmanı</Badge>
                <Badge>Düşük RCS Tespit/İzleme</Badge>
                <span className="inline-flex items-center rounded-full bg-amber-400/20 text-amber-200 ring-1 ring-inset ring-amber-300/30 px-3 py-1 text-xs font-semibold">
                  Geliştirme Aşamasında
                </span>
              </div>

              <p className="mt-4 text-white/85">
                Mevcut radar platformlarına tak-çalıştır yazılım/analiz katmanı.
                Düşük RCS hedeflerde gelişmiş tespit/izleme, menzil ve çözünürlük
                optimizasyonu; uyarlanabilir filtre zinciri ve gürültüye dayanıklı takip.
              </p>

              {/* ÜSTTEKİ CTA'LAR KALDI */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl px-5 py-3 bg-white text-black text-sm font-medium"
                >
                  Görüşme Talep Et
                </Link>
                <Link
                  href="/news"
                  className="rounded-xl px-5 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10"
                >
                  Gelişmeler
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* İçerik – kısa özet ve teknik özellikler */}
      <main className="mx-auto max-w-6xl px-6 py-16 space-y-20">
        {/* Geliştirme uyarısı */}
        <section className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-4">
          <p className="text-sm text-amber-200">
            Bu proje <strong>geliştirme aşamasındadır</strong>. Özellikler değişebilir.
            Detaylar için bizimle iletişime geçebilirsiniz.
          </p>
        </section>

        {/* ÖZET */}
        <section className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Özet</h2>
            <p className="mt-4 text-white/80">
              Modül; zayıf hedeflerde (düşük RCS) yüksek doğruluk için gelişmiş
              sinyal işleme ve yapay zekâ tabanlı sınıflandırma uygular. Gürültü
              altında hedef tespiti, stabil takip konsolidasyonu ve anomali
              tespiti hedeflenir. Platformdan bağımsız arayüz ile farklı radar
              sistemlerine entegre edilebilir.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/75">
              <li>Uyarlanabilir filtreleme &amp; kalibrasyon</li>
              <li>Çok hedefli tespit/izleme senaryoları</li>
              <li>Gerçek zamanlı telemetri &amp; log analizi</li>
            </ul>
          </div>

          {/* Tek temsil görseli */}
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/projects/radar-overview.png"
              alt="Radar zekâ modülü özet diyagram"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </figure>
        </section>

        {/* TEKNİK ÖZELLİKLER (kısa tablo) */}
        <section id="teknik-ozellikler" className="rounded-2xl border border-white/10 p-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Teknik Özellikler</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="py-2 pr-6 text-white/70">Girdi</td>
                  <td className="py-2">IQ / Range-Doppler / Track mesajları (platforma bağlı)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">İşlevler</td>
                  <td className="py-2">Tespit, sınıflandırma, izleme konsolidasyonu, anomali tespiti</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">Optimizasyon</td>
                  <td className="py-2">Uyarlanabilir menzil/çözünürlük, düşük SNR dayanımı</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">Arayüz</td>
                  <td className="py-2">CAN / UDP / gRPC (proje gereksinimine göre)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 text-white/70">Çalışma</td>
                  <td className="py-2">Gerçek zamanlı; GPU hızlandırma opsiyonel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* Not: sayfanın altındaki CTA butonları kaldırıldı */}
      </main>
    </>
  );
}

import Badge from "@/components/Badge";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "BATTAI – AI Destekli Batarya Yönetim Sistemi",
  description:
    "AI tabanlı SoC/SoH, hibrit hücre yönetimi, %63 yerlilik. TÜBİTAK & KOSGEB destekli. Patent başvurusu yapıldı.",
};

export default function BattaiPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm text-white/70 hover:underline">
        ← Projelere dön
      </Link>

      <h1 className="mt-4 text-4xl font-semibold">
        BATTAI – AI Destekli Batarya Yönetim Sistemi
      </h1>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge>%63 Yerli Üretim</Badge>
        <Badge>TÜBİTAK & KOSGEB Destekleri</Badge>
        <Badge>Patent Başvurusu Yapıldı</Badge>
        <Badge>AI-BMS</Badge>
      </div>

      <Section title="Özet">
        <p className="text-gray-300">
          BATTAI; LFP/NMC/NCA gibi farklı kimyalarla çalışabilen modüler bir
          batarya yönetim sistemi (BMS). Yapay zekâ destekli SoC/SoH tahmini ve
          termal güvenlik algoritmaları ile görev profiline göre verim artışı
          hedefler.
        </p>
      </Section>

      {/* GÖRSELLER – iki adet */}
      <Section title="Görseller">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["/projects/battai-g1.png", "/projects/battai-g2.png"].map((src, i) => (
            <figure key={src} className="rounded-xl border border-white/10 overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={src}
                  alt={i === 0 ? "BATTAI görseli 1" : "BATTAI görseli 2"}
                  fill
                  className="object-cover"
                />
                {/* Tıklayınca büyük aç (dosya linki, <a> uygun) */}
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Görseli büyük aç"
                />
              </div>
            </figure>
          ))}
        </div>
        <p className="mt-2 text-xs text-white/60">Görselleri büyütmek için tıklayın.</p>
      </Section>

      <Section title="Teknik Özellikler">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="py-2 pr-6 text-white/70">Hücre Kimyası</td>
                <td className="py-2">LFP / NMC / NCA (hibrit destek)</td>
              </tr>
              <tr>
                <td className="py-2 pr-6 text-white/70">AI-BMS</td>
                <td className="py-2">SoC/SoH tahmini, yaşlanma modeli, anomali tespiti</td>
              </tr>
              <tr>
                <td className="py-2 pr-6 text-white/70">Güvenlik</td>
                <td className="py-2">Termal kaçak erken uyarı, hücre dengeleme</td>
              </tr>
              <tr>
                <td className="py-2 pr-6 text-white/70">Modülerlik</td>
                <td className="py-2">Yenilenebilir enerji, Hava Kara ve Deniz sistemleri entegrasyonu</td>
              </tr>
              <tr>
                <td className="py-2 pr-6 text-white/70">Verim</td>
                <td className="py-2">%98</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Destekler & Fikri Mülkiyet">
        <ul className="list-disc pl-6 text-gray-300">
          <li>TÜBİTAK ve KOSGEB programları kapsamında proje destekleri</li>
          <li>BATTAI için patent başvurusu yapılmıştır</li>
        </ul>
      </Section>

      {/* Dokümanlar */}
      <Section>
        <div className="flex flex-wrap gap-3">
          {/* PDF: dosya olduğu için <a> doğru */}
          <a
            href="/downloads/battai-brosur.pdf"
            download
            className="rounded-xl px-5 py-3 bg-white text-black text-sm font-medium"
            aria-label="BATTAI broşürünü indir (PDF)"
          >
            Broşürü İndir (PDF)
          </a>

          {/* İç sayfa: Link kullan */}
          <Link
            href="/contact"
            className="rounded-xl px-5 py-3 border border-white text-white text-sm font-medium"
          >
            Demo / Görüşme Talep Et
          </Link>
        </div>

        <p className="mt-3 text-xs text-white/60">
          Dosya yolu: <code>/public/downloads/battai-brosur.pdf</code> — ad/büyük-küçük
          harf birebir aynı olmalı.
        </p>
      </Section>
    </main>
  );
}

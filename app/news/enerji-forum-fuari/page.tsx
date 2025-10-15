"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EVFNewsPage() {
  // --- Slider görselleri ---
  const slides = useMemo(
    () => ["/news/evf-1.jpg", "/news/evf-2.jpg", "/news/evf-3.jpg"],
    []
  );
  const [idx, setIdx] = useState(0);

  // 2 sn’de bir otomatik geçiş
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 2000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-8">
      {/* Üst: görseller (kayan) */}
      <section className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((src, i) => (
            <div key={src} className="relative min-w-full aspect-[16/9]">
              <Image
                src={src}
                alt={`Enerji Verimliliği Forumu ve Fuarı görseli ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
            </div>
          ))}
        </div>

        {/* Noktalar */}
        <div className="pointer-events-auto absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slayt ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Başlık (fotoğrafların altında, kalın) */}
      <header className="mt-1">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Enerji Verimliliği Forumu ve Fuarı’nda Yer Aldık
        </h1>
        <div className="mt-2 text-sm text-white/70">7 Ekim 2025</div>
      </header>

      {/* Gövde */}
      <article className="grid gap-8 md:grid-cols-[1fr_300px] md:items-start">
        {/* Metin */}
        <div className="prose prose-invert max-w-none">
          <p>
              MTK Uzay ve Savunma Teknolojileri A.Ş., <strong>Enerji Verimliliği Forumu ve Fuarı 2025</strong>’te
            (6–7 Ekim, İstanbul Kongre Merkezi) yer aldı. Etkinlik, enerji ve
             teknoloji sektörlerinden şirketleri; kamu, akademi ve sivil toplum
           temsilcileriyle bir araya getiren Türkiye’nin önemli buluşmalarından
            biri konumunda.
          </p>

          <p>
            Şirketimizin kurucusu ve CEO’su <strong>Mert Karakoç</strong>,
            enerji verimliliği ve <em>yenilenebilir enerji + depolama</em>{" "}
            başlıklarında MTK’nın saha tecrübelerini ve çözüm yaklaşımını paylaştı;
            farklı firmalarla ikili görüşmeler gerçekleştirilerek potansiyel
            iş birlikleri değerlendirildi.
          </p>

          <p>
            Görüşmelerde; yenilenebilir üretimle entegre <strong>batarya
            depolama</strong>, görev profiline göre <strong>enerji yönetimi</strong>
            ve <strong>uzaktan izleme/analitik</strong> odaklı çözümler öne çıktı.
            Önümüzdeki dönemde pilot uygulamalar ve ortak geliştirme alanlarının
            netleştirilmesi hedefleniyor.
          </p>

          <p className="mt-6">
            <Link href="/news" className="underline underline-offset-4">
              ← Tüm Haberler
            </Link>
          </p>
        </div>

        {/* Sağda küçük görsel (opsiyonel) */}
        <aside>
          <figure className="rounded-2xl border border-white/10 overflow-hidden">
            <Image
              src="/news/evf-side.jpg"
              alt="EVF 2025 - MTK standından bir kare"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </figure>
        </aside>
      </article>
    </main>
  );
}

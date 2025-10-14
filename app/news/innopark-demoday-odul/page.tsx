"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  // 3 görsel – public/news altına koyacağız
  const slides = useMemo(
    () => [
      "/news/innopark-demoday-1.jpg",
      "/news/innopark-demoday-2.jpg",
      "/news/innopark-demoday-3.png",
    ],
    []
  );
  const [idx, setIdx] = useState(0);

  // 2 sn’de bir otomatik geçiş
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % slides.length), 2000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      {/* ÜST: Slider */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
          aria-live="polite"
        >
          {slides.map((src, i) => (
            <div key={src} className="relative min-w-full aspect-[16/9]">
              <Image
                src={src}
                alt={`İnnopark Demoday ödül görseli ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              {/* İnce koyu maske, yazı yok ama foto kontrastı için hoş durur */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30" />
            </div>
          ))}
        </div>

        {/* Noktalar */}
        <div className="pointer-events-auto absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Görsel ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Başlık (fotoğrafların altında, kalın) */}
      <h1 className="mt-5 text-2xl md:text-3xl font-semibold">
        Konya İnnopark Demoday’de Finalist Olarak 3.’lük Ödülü
      </h1>

      {/* Metin */}
      <article className="prose prose-invert mt-4 max-w-none">
        <p>
          MTK Uzay ve Savunma Teknolojileri A.Ş., Konya’da{" "}
          <strong>İnnopark</strong> tarafından düzenlenen{" "}
          <strong>Demoday</strong> etkinliğine katıldı ve jüri değerlendirmeleri sonucu
          finalistler arasından <strong>3.’lük ödülünü</strong> kazandı.
        </p>
        <p>
          <strong>28 Eylül</strong> tarihinde gerçekleşen etkinlikte; savunma ve enerji
          odaklı yerli teknolojilerimiz, özellikle de yapay zekâ destekli batarya
          yönetim yaklaşımımız ve radar zekâ modülü vizyonumuz, katılımcılardan
          yoğun ilgi gördü. Sunum ve değerlendirme turlarının ardından,
          mentör görüşmeleri ve jüri soruları bölümünde projelerimizin ölçeklenebilir
          mimarisi ve saha uyumluluğu öne çıktı.
        </p>
        <p>
          Elde ettiğimiz bu başarıyı; ürünleşme yol haritamız, sahadaki partner
          geri bildirimleri ve yerli ekosistemle kurduğumuz güçlü iş birliği
          motivasyonumuzun bir yansıması olarak görüyoruz.
        </p>

        {/* Tarih ve konum satırı */}
        <p className="text-white/70 text-sm mt-6">
          Tarih: 28 Eylül &nbsp;•&nbsp; Yer: Konya, İnnopark
        </p>
      </article>
    </main>
  );
}

// app/news/tusiad/page.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function TusiadPage() {
  const images = [
    "/News/tusiad-1.jpg",
    "/News/tusiad-2.jpg",
    "/News/tusiad-3.jpg",
    "/News/tusiad-4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      {/* FOTOĞRAF KARUSELİ */}
      <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative h-[60vh] w-full shrink-0">
              <Image
                src={src}
                alt={`TÜSİAD Bu Gençlikte İş Var ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/60" />
            </div>
          ))}
        </div>

        {/* Noktalar */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Görsel ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* HABER BAŞLIĞI */}
      <h1 className="text-4xl font-bold">
        MTK Uzay ve Savunma Teknolojileri A.Ş., TÜSİAD Bu Gençlikte İş Var! Girişimcilik Kampı’nda Yer Aldı
      </h1>

      {/* HABER METNİ */}
      <section className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-start">
        <div className="leading-relaxed text-[var(--muted)] [&_strong]:text-[var(--accent)] [&_em]:text-[var(--accent)]">
          <p>
            <strong>TÜSİAD Bu Gençlikte İş Var!</strong> girişimcilik programı kapsamında
            düzenlenen 5 günlük girişimcilik kampına katılan
            <strong> MTK Uzay ve Savunma Teknolojileri A.Ş.</strong>, yenilikçi savunma ve
            ileri teknoloji odaklı çalışmalarıyla programda yer alma fırsatı elde etti.
            Kamp süresince girişimcilik ekosisteminin farklı paydaşlarıyla bir araya gelen
            şirketimiz, geliştirdiği teknoloji vizyonunu paylaşarak önemli temaslar kurdu.
          </p>

          <p className="mt-4">
            Eğitim, mentorluk ve iş dünyası etkileşimini bir araya getiren program
            boyunca; iş modeli geliştirme, sunum stratejisi, ölçeklenme ve yatırımcıya
            erişim gibi başlıklarda yoğun bir süreç yürütüldü. MTK Uzay ve Savunma
            Teknolojileri A.Ş. de bu süreçte savunma teknolojileri, enerji sistemleri ve
            yüksek katma değerli Ar-Ge yaklaşımını öne çıkaran yapısıyla dikkat çekti.
          </p>

          <p className="mt-4">
            Kampın ardından gerçekleştirilen değerlendirme sürecinde şirketimiz,
            program kapsamında öne çıkan girişimler arasında gösterilerek
            <strong> ilk 10 içerisinde yer alma</strong> başarısı elde etti. Bu sonuç,
            MTK’nın teknoloji geliştirme kabiliyetinin, girişimcilik potansiyelinin ve
            büyüme vizyonunun güçlü bir göstergesi oldu.
          </p>

          <p className="mt-4">
            MTK Uzay ve Savunma Teknolojileri A.Ş. olarak, yerli ve yenilikçi çözümler
            üretme hedefimiz doğrultusunda savunma ve ileri teknoloji alanlarında değer
            üretmeye, ulusal girişimcilik ekosisteminde aktif biçimde yer almaya ve
            geliştirdiğimiz projeleri daha geniş iş birlikleriyle büyütmeye devam ediyoruz.
          </p>
        </div>

        {/* SAĞDA KÜÇÜK FOTOĞRAF */}
        <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/News/tusiad-thumb.jpg"
            alt="MTK Uzay ve Savunma Teknolojileri A.Ş. - TÜSİAD etkinliği"
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
        </figure>
      </section>
    </main>
  );
}
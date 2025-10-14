"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InnovationWeekPage() {
  const images = [
    "/news/innovation-1.jpg",
    "/news/innovation-2.jpg",
    "/news/innovation-3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-10">
      {/* FOTOĞRAF KARUSELİ */}
      <section className="relative h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative h-[60vh] w-full shrink-0">
              <Image
                src={src}
                alt={`Türkiye Innovation Week ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
            </div>
          ))}
        </div>

        {/* Noktalar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* HABER BAŞLIĞI */}
      <h1 className="text-4xl font-bold">MTK Uzay ve Savunma Teknolojileri A.Ş, Türkiye Innovation Week’te Yerini Aldı</h1>

      {/* HABER METNİ */}
      <section className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-start">
        <div className="text-white/85 leading-relaxed">
          <p>
            Türkiye’nin en büyük inovasyon ve teknoloji etkinliklerinden biri olan
            <strong> Türkiye Innovation Week</strong>, bu yıl da binlerce katılımcıyı
            yenilikçi fikirler, sürdürülebilir teknolojiler ve girişimcilik vizyonu
            etrafında bir araya getirdi. Etkinlik; savunma, enerji, yapay zekâ,
            mobilite ve ileri üretim alanlarında geleceğin teknolojilerini sergileyen
            çok sayıda yerli girişime ev sahipliği yaptı.
          </p>

          <p className="mt-4">
            <strong>MTK Uzay ve Savunma Teknolojileri A.Ş.</strong>, yenilikçi enerji
            depolama çözümleri ve radar zekâ modülleriyle etkinlikte yer aldı.
            Şirket, yerli savunma sanayiinde bağımsız teknolojilerin geliştirilmesi
            amacıyla yürüttüğü projeleri ve yapay zekâ destekli radar analiz sistemini
            katılımcılara tanıttı.
          </p>

          <p className="mt-4">
            Şirketin kurucusu ve CEO’su <strong>Mert Karakoç</strong>, etkinlik
            kapsamında gerçekleştirilen “Savunma Teknolojilerinde Yapay Zekâ ve
            Otonomi” başlıklı panelde konuşmacı olarak yer aldı. Konuşmasında,
            Türkiye’nin savunma teknolojilerinde yenilikçi kabiliyetlerini artırmak
            için akademi-sanayi iş birliğinin önemine vurgu yaptı.
          </p>

          <p className="mt-4">
            Karakoç ayrıca, MTK’nın geliştirdiği hibrit batarya yönetim sistemi
            <em> (BATTAI)</em> ve radar zekâ modülünün, milli savunma ekosisteminde
            veri güvenliği ve operasyonel dayanıklılığı artırmaya yönelik
            çözümler sunduğunu belirtti.
          </p>
        </div>

        {/* SAĞDA KÜÇÜK FOTOĞRAF */}
        <figure className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 overflow-hidden">
          <Image
            src="/news/innovation-thumb.jpeg"
            alt="MTK standı Türkiye Innovation Week"
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover"
          />
        </figure>
      </section>
    </main>
  );
}

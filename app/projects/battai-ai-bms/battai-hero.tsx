"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function BattaiHero() {
  const slides = useMemo(
    () => [
      "/projects/battai-hero-1.png",
      "/projects/battai-hero-2.png",
      "/projects/battai-hero-3.png",
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  // 2 sn'de bir otomatik geçiş
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 2000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden radarsweep">
      {/* Kayar görseller */}
      <div
        className="absolute inset-0 flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <Image
              src={src}
              alt={`BATTAI hero görseli ${i + 1}`}
              fill
              sizes="100vw"
              className="pointer-events-none select-none object-cover object-center"
              priority={i === 0}
            />
            {/* Daha şeffaf maske */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65"
            />
          </div>
        ))}
      </div>

      {/* Nokta göstergeler */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => {
          const active = i === idx;
          return (
            <button
              key={i}
              aria-label={`Görsel ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                active ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

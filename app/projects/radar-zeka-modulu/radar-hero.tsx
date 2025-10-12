// app/projects/radar-zeka-modulu/radar-hero.tsx
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";

export default function RadarHero() {
  const slides = useMemo(
    () => [
      "/projects/radar-hero-1.png",
      "/projects/radar-hero-2.png",
      "/projects/radar-hero-3.png",
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (n: number) => setIdx((i) => (i + n + slides.length) % slides.length),
    [slides.length]
  );

  // 2 sn’de bir otomatik geçiş (hover’da durur)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 2000);
    return () => clearInterval(t);
  }, [go, paused]);

  // Klavye ile kontrol (← / →)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden radarsweep"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Arka plan – 3 görsel kaydırıcı */}
      <div
        className="absolute inset-0 flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <Image
              src={src}
              alt={`Radar zekâ modülü görseli ${i + 1}`}
              fill
              sizes="100vw"
              className="pointer-events-none select-none object-cover object-center"
              priority={i === 0}
            />
            {/* Maske: okunabilirlik için; Battai ile aynı yoğunlukta */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65"
            />
          </div>
        ))}
      </div>

      {/* Noktalar */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
  );
}

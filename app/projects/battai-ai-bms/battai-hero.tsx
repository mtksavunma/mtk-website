"use client";

import { useEffect, useMemo, useState } from "react";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";

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

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 3500);

    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <ParallaxHeroImage
              src={src}
              alt={`BATTAI hero görseli ${i + 1}`}
              priority={i === 0}
              offset={70}
            />

            <div
              className="absolute inset-0"
              aria-hidden
              style={{
                background: `
                  linear-gradient(to right,
                    rgba(245,247,251,0.86) 0%,
                    rgba(245,247,251,0.72) 30%,
                    rgba(245,247,251,0.42) 55%,
                    rgba(245,247,251,0.16) 78%,
                    rgba(245,247,251,0.20) 100%
                  ),
                  linear-gradient(to bottom,
                    rgba(255,255,255,0.42) 0%,
                    rgba(255,255,255,0.12) 48%,
                    rgba(245,247,251,0.88) 100%
                  )
                `,
              }}
            />

            <div
              className="absolute inset-0 opacity-70"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.45), transparent 24%), radial-gradient(circle at 78% 18%, rgba(245,158,11,0.08), transparent 20%), radial-gradient(circle at 60% 72%, rgba(19,41,75,0.06), transparent 24%)",
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,247,251,0) 0%, rgba(245,247,251,0.72) 62%, rgba(245,247,251,1) 100%)",
        }}
      />

      <div className="pointer-events-auto absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => {
          const active = i === idx;

          return (
            <button
              key={i}
              type="button"
              aria-label={`Görsel ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                active
                  ? "w-6 bg-[var(--accent)]"
                  : "w-2.5 bg-[rgba(19,41,75,0.28)] hover:bg-[rgba(19,41,75,0.45)]"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
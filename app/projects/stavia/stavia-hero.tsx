"use client";

import { useEffect, useMemo, useState } from "react";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";

export default function StaviaHero() {
  const slides = useMemo(
    () => [
      "/projects/stavia-hero-1.png",
      "/projects/stavia-hero-2.png",
      "/projects/stavia-hero-3.png",
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
      >
        {slides.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0">
            <ParallaxHeroImage
              src={src}
              alt={`STAVIA hero görseli ${i + 1}`}
              priority={i === 0}
              offset={70}
            />

            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to right,
                    rgba(245,247,251,0.85) 0%,
                    rgba(245,247,251,0.70) 30%,
                    rgba(245,247,251,0.35) 55%,
                    rgba(245,247,251,0.15) 75%,
                    rgba(245,247,251,0.2) 100%
                  ),
                  linear-gradient(to bottom,
                    rgba(255,255,255,0.35) 0%,
                    rgba(255,255,255,0.1) 50%,
                    rgba(245,247,251,0.9) 100%
                  )
                `,
              }}
            />

            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(circle at 80% 25%, rgba(56,189,248,0.12), transparent 25%), radial-gradient(circle at 20% 70%, rgba(245,158,11,0.08), transparent 25%)",
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,247,251,0) 0%, rgba(245,247,251,0.7) 60%, rgba(245,247,251,1) 100%)",
        }}
      />

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => {
          const active = i === idx;
          return (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                active
                  ? "w-6 bg-[var(--accent)]"
                  : "w-2.5 bg-[rgba(19,41,75,0.25)] hover:bg-[rgba(19,41,75,0.4)]"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
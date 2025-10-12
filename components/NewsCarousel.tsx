"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export type NewsItem = {
  id: string;
  title: string;
  date: string;         // "2025-09-10" gibi
  href: string;         // detay/bağlantı
  image: string;        // /news/odul-1.jpg gibi (public altında)
  summary?: string;
};

type Props = { items: NewsItem[]; autoMs?: number };

export default function NewsCarousel({ items, autoMs = 3000 }: Props) {
  const slides = useMemo(() => items, [items]);
  const [idx, setIdx] = useState(0);

  const go = useCallback(
    (n: number) => setIdx((i) => (i + n + slides.length) % slides.length),
    [slides.length]
  );

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => go(1), autoMs);
    return () => clearInterval(t);
  }, [go, autoMs]);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((s) => (
          <article key={s.id} className="min-w-full grid gap-6 md:grid-cols-2 p-4 md:p-6">
            {/* Görsel */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image src={s.image} alt={s.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>

            {/* Metin */}
            <div className="flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wide text-white/60">{new Date(s.date).toLocaleDateString("tr-TR")}</div>
              <h3 className="mt-1 text-2xl md:text-3xl font-semibold">{s.title}</h3>
              {s.summary ? <p className="mt-3 text-white/80">{s.summary}</p> : null}

              <div className="mt-5">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:shadow"
                >
                  Detayları Gör
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Oklar */}
      <button
        aria-label="Önceki"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/75"
      >
        ‹
      </button>
      <button
        aria-label="Sonraki"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white hover:bg-black/75"
      >
        ›
      </button>

      {/* Noktalar */}
      <div className="pointer-events-auto absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slayt ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"}`}
          />
        ))}
      </div>
    </section>
  );
}

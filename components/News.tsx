// components/News.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO: "2025-10-12"
};

const MONTHS_TR_SHORT = [
  "OCA", "ŞUB", "MAR", "NİS", "MAY", "HAZ", "TEM", "AĞU", "EYL", "EKİ", "KAS", "ARA",
];

const SAMPLE_NEWS: NewsItem[] = [
  {
    slug: "turkiye-innovation-week",
    title: "Türkiye Innovation Week 2025 Sahnesi",
    summary:
      "Türkiye İhracatçılar Meclisi tarafından düzenlenen TIW’25 etkinliği başarıyla tamamlandı.",
    date: "2025-10-11",
  },
  {
    slug: "enerji-forum-fuari", // ✅ sayfa klasörüyle birebir aynı
    title: "Enerji Forum ve Fuarı",
    summary:
      "Yenilenebilir + depolama odaklı çözümlerimizle fuarda yer aldık.",
    date: "2025-10-07",
  },
  {
    slug: "innopark-demoday-odul",
    title: "Ödül Aldık",
    summary:
      "Konya Innopark’ta düzenlenen DemoDay’de finalist olarak ödül kazandık.",
    date: "2025-09-28",
  },
  {
    slug: "yeni-is-birligi-cercevesi",
    title: "Yeni iş birliği çerçevesi",
    summary:
      "Savunma tedarik ekosistemi için ortak geliştirme ve pilot uygulama anlaşması imzalandı.",
    date: "2025-08-19",
  },
  {
    slug: "pilot-entegrasyon-basladi",
    title: "Pilot entegrasyon başladı",
    summary:
      "Saha güç birimiyle BATTAI paketinin modüler entegrasyonu ilk tesiste devreye alındı.",
    date: "2025-08-05",
  },
];

function formatDateTR(iso: string) {
  const d = new Date(iso);
  const day = d.getDate().toString().padStart(2, "0");
  const month = MONTHS_TR_SHORT[d.getMonth()] ?? "";
  return { day, month };
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

type Props = { showHeading?: boolean };

export default function News({ showHeading = true }: Props) {
  const items = useMemo(
    () => [...SAMPLE_NEWS].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  // 3'erli gruplar + sonsuz döngü için ilk grubun klonu
  const groups = useMemo(() => chunk(items, 3), [items]);
  const loopSlides = useMemo(
    () => (groups.length ? [...groups, groups[0]] : groups),
    [groups]
  );

  const [index, setIndex] = useState(0);
  const [enableAnim, setEnableAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const transitionRef = useRef<HTMLDivElement>(null);

  // Otomatik ilerleme
  useEffect(() => {
    if (loopSlides.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
      setEnableAnim(true);
    }, 3000);
    return () => clearInterval(id);
  }, [loopSlides.length, paused]);

  // Klona gelince animasyonsuz başa sar
  useEffect(() => {
    if (loopSlides.length <= 1) return;
    if (index === loopSlides.length - 1) {
      const t = setTimeout(() => {
        setEnableAnim(false);
        setIndex(0);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [index, loopSlides.length]);

  const realCount = groups.length || 0;
  const visibleDot = realCount ? index % realCount : 0;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      {showHeading && (
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Haberler</h2>
        </div>
      )}

      {/* Dış kabın yatay paddingi YOK → sızıntı önlenir */}
      <div
        className="relative overflow-hidden pb-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slider hattı */}
        <div
          ref={transitionRef}
          className={`flex will-change-transform ${enableAnim ? "transition-transform duration-500 ease-out" : ""}`}
          style={{
            transform: `translateX(-${index * 100}%)`,
            width: `${loopSlides.length * 100}%`,
          }}
          aria-live="polite"
        >
          {loopSlides.map((group, slideIdx) => (
            // Her slayt tam viewport genişliğinde; padding burada
            <div key={slideIdx} className="min-w-full shrink-0 px-2 md:px-3">
              <div className="grid grid-cols-1 gap-5">
                {group.map((n) => {
                  const { day, month } = formatDateTR(n.date);
                  return (
                    <article
                      key={n.slug}
                      className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5
                                 p-5 pl-28 sm:pl-28 md:pl-32 shadow-sm ring-1 ring-inset ring-white/10"
                    >
                      {/* Sol tarih rozeti */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 select-none rounded-xl bg-white/15 border border-white/20 px-3 py-2 text-center leading-none backdrop-blur-sm">
                        <div className="text-2xl md:text-3xl font-bold text-white">{day}</div>
                        <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wide text-white/90">
                          {month}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold">{n.title}</h3>
                      <p className="mt-2 text-sm text-white/80">{n.summary}</p>
                      <div className="mt-4">
                        <Link href={`/news/${n.slug}`} className="font-semibold underline underline-offset-4">
                          Detay Gör
                        </Link>
                      </div>
                    </article>
                  );
                })}

                {/* 3’ten azsa boş kartlarla yüks. sabitle */}
                {group.length < 3 &&
                  Array.from({ length: 3 - group.length }).map((_, i) => (
                    <div key={`ghost-${i}`} className="rounded-2xl p-5 opacity-0">
                      &nbsp;
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Noktalar */}
        {realCount > 1 && (
          <div className="pointer-events-auto absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: realCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slayt ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === visibleDot ? "w-6 bg-white" : "w-2.5 bg-white/55 hover:bg-white/75"
                }`}
                onClick={() => {
                  setEnableAnim(true);
                  setIndex(i);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

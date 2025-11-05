"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

type Category = "ENERJI" | "RADAR" | "TUMU";

type Project = {
  slug: string;
  title: string;
  category: Exclude<Category, "TUMU">;
  summary: string;
  tags: string[];
  image?: string;
  upcoming?: boolean;
};

const ALL_PROJECTS: Project[] = [
  {
    slug: "battai-ai-bms",
    title: "BATTAI – AI Destekli Batarya Yönetim Sistemi",
    category: "ENERJI",
    summary:
      "Hibrit hücre yönetimi; AI tabanlı SoC/SoH tahmini, yerli üretim oranı %63.",
    tags: ["AI-BMS", "Hibrit Paket", "Enerji Depolama"],
    image: "/projects/battai-main.png",
  },
  {
    slug: "radar-zeka-modulu",
    title: "Radar Zekâ Modülü (Geliştirme Aşamasında)",
    category: "RADAR",
    summary:
      "Menzil optimizasyonu ve düşük RCS hedeflerde yüksek doğruluk hedefleyen analiz yazılımı. Patent başvurusu planlanıyor.",
    tags: ["Radar", "Hedef Tespiti", "Sinyal Analizi"],
    image: "/projects/radar-main.png",
  },
  {
    slug: "stavia",
    title: "STAVIA – Taşınabilir Akıllı Şarj İstasyonu Sistemi",
    category: "ENERJI",
    summary: "Elektrikli araçlar için taşıanbilir akıllı depolama sistemleri",
    tags: ["Taşınabilir", "Şarj", "Enerji"],
    image: "/projects/stavia.png",
    upcoming: true,
  },
];

const CATS: Category[] = ["TUMU", "ENERJI", "RADAR"];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("TUMU");
  const filtered = useMemo(
    () =>
      active === "TUMU"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter((p) => p.category === active),
    [active]
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Projeler</h1>

      {/* Kategori butonları */}
      <div className="mt-8 flex flex-wrap gap-3">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 border transition ${
              active === c
                ? "bg-white text-black border-white"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            {c === "TUMU" ? "Tümü" : c === "ENERJI" ? "Enerji" : "Radar"}
          </button>
        ))}
      </div>

      {/* Proje kartları */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) =>
          p.upcoming ? (
            // 🔸 YAKINDA (Tıklanamaz kart)
            <div
              key={p.slug}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 opacity-80 cursor-default hover:opacity-100 transition"
            >
              {/* Görsel kısmı */}
              <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden flex items-center justify-center bg-black/10">
                <Image
                  src={p.image ?? "/placeholder.png"}
                  alt={p.title}
                  fill
                  className="object-contain"
                />

                {/* YAKINDA etiketi */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-700/70 to-yellow-500/50 text-yellow-100 font-semibold text-xs sm:text-sm px-3 py-1 rounded-full border border-yellow-400/70 shadow-md backdrop-blur-sm">
                  Yakında
                </div>
              </div>

              {/* Bilgi kısmı */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs rounded-full border border-white/20 px-2 py-1 text-white/80">
                    {p.category === "ENERJI" ? "Enerji" : "Radar"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // 🔸 NORMAL (Tıklanabilir kart)
            <a
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden">
                <Image
                  src={p.image ?? "/placeholder.png"}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={p.slug === "battai-ai-bms"}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs rounded-full border border-white/20 px-2 py-1 text-white/80">
                    {p.category === "ENERJI" ? "Enerji" : "Radar"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-300">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-sm text-white/70 group-hover:underline">
                  Detayı aç →
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-white/10 to-transparent" />
            </a>
          )
        )}
      </div>
    </main>
  );
}

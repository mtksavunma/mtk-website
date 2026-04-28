"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  getProjectsMessages,
  type ProjectCategory,
} from "@/messages/projects";

const CATS: ProjectCategory[] = ["TUMU", "ENERJI", "RADAR"];

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = getProjectsMessages(lang);

  const [active, setActive] = useState<ProjectCategory>("TUMU");

  const filtered = useMemo(() => {
    return active === "TUMU"
      ? t.projects
      : t.projects.filter((p) => p.category === active);
  }, [active, t.projects]);

  const categoryLabel = (category: ProjectCategory) => {
    return t.categories[category];
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Reveal>
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--accent)] md:text-5xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
            {t.intro}
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.06}>
        <section className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {CATS.map((c) => {
              const activeClass =
                active === c
                  ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-[0_10px_24px_rgba(19,41,75,0.12)]"
                  : "border-[rgba(19,41,75,0.12)] bg-white/60 text-[var(--accent)] hover:bg-white hover:-translate-y-[1px]";

              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 ${activeClass}`}
                >
                  {categoryLabel(c)}
                </button>
              );
            })}
          </div>
        </section>
      </Reveal>

      <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, index) =>
          p.upcoming && p.slug !== "stavia" ? (
            <Reveal key={p.slug} delay={index * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="relative h-56 w-full overflow-hidden bg-[rgba(19,41,75,0.04)]">
                  <Image
                    src={p.image ?? "/placeholder.png"}
                    alt={p.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.10)]">
                    {t.upcoming}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold leading-snug text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[rgba(19,41,75,0.10)] px-3 py-1 text-xs text-[var(--accent)]">
                      {categoryLabel(p.category)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[rgba(19,41,75,0.06)] px-3 py-1 text-xs text-[var(--accent)] transition-all duration-300 group-hover:bg-[rgba(19,41,75,0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-medium text-[var(--muted)]">
                    {t.upcomingText}
                  </div>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal key={p.slug} delay={index * 0.08}>
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="relative h-56 w-full overflow-hidden bg-[rgba(19,41,75,0.04)]">
                  <Image
                    src={p.image ?? "/placeholder.png"}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold leading-snug text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
                      {p.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[rgba(19,41,75,0.10)] px-3 py-1 text-xs text-[var(--accent)]">
                      {categoryLabel(p.category)}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[rgba(19,41,75,0.06)] px-3 py-1 text-xs text-[var(--accent)] transition-all duration-300 group-hover:bg-[rgba(19,41,75,0.08)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center text-sm font-medium text-[var(--accent)] transition-all duration-300 group-hover:text-[var(--secondary)]">
                    {t.viewProject}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )
        )}
      </section>
    </main>
  );
}
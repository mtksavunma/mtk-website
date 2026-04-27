"use client";

import Link from "next/link";
import { useMemo } from "react";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getNewsMessages } from "@/messages/news";

type Props = { showHeading?: boolean };

function formatDate(iso: string, monthsShort: readonly string[]) {
  const d = new Date(iso);
  const day = d.getDate().toString().padStart(2, "0");
  const month = monthsShort[d.getMonth()] ?? "";
  const year = d.getFullYear();
  return `${day} ${month} ${year}`;
}

export default function News({ showHeading = true }: Props) {
  const { lang } = useLanguage();
  const t = getNewsMessages(lang);

  const items = useMemo(() => {
    const sorted = [...t.items].sort(
      (a, b) => +new Date(b.date) - +new Date(a.date)
    );

    return showHeading ? sorted.slice(0, 3) : sorted;
  }, [t.items, showHeading]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-18 md:py-24">
      <Reveal>
        <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div>
            {showHeading && (
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.section.title}
              </h2>
            )}
            <p className="mt-3 max-w-2xl text-sm text-[var(--muted)] md:text-base">
              {t.section.description}
            </p>
          </div>

          <div className="hidden md:block">
            <Button href="/news" variant="secondary">
              {t.section.allNews}
            </Button>
          </div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((n, index) => (
          <Reveal key={n.slug} delay={index * 0.08}>
            <article className="glass group flex h-full flex-col rounded-2xl border border-[rgba(19,41,75,0.07)] p-6 transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
              <div className="text-sm text-[var(--muted)]">
                {formatDate(n.date, t.section.monthsShort)}
              </div>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--secondary)]">
                {n.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                {n.summary}
              </p>

              <div className="mt-6 border-t border-[rgba(15,23,42,0.06)] pt-4">
                <Link
                  href={`/news/${n.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[var(--accent)] transition-all duration-300 group-hover:text-[var(--secondary)]"
                >
                  {t.section.readMore}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 md:hidden">
          <Button href="/news" variant="secondary" className="w-full">
            {t.section.allNews}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
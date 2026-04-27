"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getStaviaMessages } from "@/messages/stavia";
import StaviaHero from "@/app/projects/stavia/stavia-hero";

export default function StaviaContent() {
  const { lang } = useLanguage();
  const t = getStaviaMessages(lang);

  return (
    <>
      <div className="relative">
        <StaviaHero />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6">
            <Reveal className="max-w-3xl">
              <Link
                href="/projects"
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
              >
                {t.hero.back}
              </Link>

              <div className="mt-6 rounded-full border border-[rgba(19,41,75,0.1)] bg-white/60 px-4 py-2 text-xs text-[var(--accent)] backdrop-blur-md">
                {t.hero.eyebrow}
              </div>

              <h1 className="mt-6 text-4xl font-semibold text-[var(--accent)] md:text-6xl">
                {t.hero.title1}
                <span className="block">{t.hero.title2}</span>
              </h1>

              <p className="mt-5 text-[var(--muted)] md:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.hero.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">{t.hero.cta1}</Button>

                <Button href="/projects/battai-ai-bms" variant="secondary">
                  {t.hero.cta2}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20">
        <section className="grid gap-4 md:grid-cols-4">
          {t.quickCards.map((card, index) => (
            <Reveal key={card} delay={index * 0.06}>
              <div className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                <div className="font-semibold text-[var(--accent)]">{card}</div>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)]">
                {t.modular.title}
              </h2>
              <p className="mt-4 text-[var(--muted)]">
                {t.modular.text}
              </p>
            </div>

            <Image
              src="/projects/stavia-structure.png"
              alt={t.modular.imageAlt}
              width={1200}
              height={900}
              className="rounded-2xl"
            />
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-[var(--accent)]">
              {t.cta.title}
            </h2>

            <div className="mt-6 flex gap-3">
              <Button href="/contact">{t.cta.button}</Button>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getRadarMessages } from "@/messages/radar";
import RadarHero from "@/app/projects/radar-zeka-modulu/radar-hero";

const imageFrameClass =
  "overflow-hidden rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[3px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]";

export default function RadarContent() {
  const { lang } = useLanguage();
  const t = getRadarMessages(lang);

  return (
    <>
      <div className="relative">
        <RadarHero />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl items-center justify-center px-6">
            <Link
              href="/projects"
              className="absolute left-6 top-28 text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline md:left-10"
            >
              {t.hero.back}
            </Link>

            <Reveal className="mx-auto max-w-3xl -translate-y-8 text-center md:-translate-y-14">
              <h1 className="text-center text-4xl font-semibold leading-tight text-[var(--accent)] md:text-6xl">
                {t.hero.title1}
                <span className="block">{t.hero.title2}</span>
              </h1>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact">{t.hero.cta1}</Button>
                <Button href="/projects" variant="secondary">
                  {t.hero.cta2}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-16 md:py-20">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.quickStats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 p-5 backdrop-blur-xl">
                <div className="text-sm text-[var(--muted)]">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-[var(--accent)]">
                  {item.value}
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="mx-auto -mt-10 max-w-5xl md:-mt-12">
            <p className="text-justify text-base leading-8 text-[var(--muted)] md:text-lg md:leading-9">
              <strong className="font-semibold text-[var(--accent)]">
                Radar Zekâ Modülü
              </strong>{" "}
              {t.hero.description.replace(/^Radar Zekâ Modülü[;:\s-]*/i, "")}
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.approach.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.approach.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.approach.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <figure className={imageFrameClass}>
              <Image
                src="/projects/radar-overview.png"
                alt={t.imageAlt.approach}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </figure>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className={`${imageFrameClass} order-last md:order-first`}>
              <Image
                src="/projects/radar-bir.png"
                alt={t.imageAlt.detection}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.detection.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.detection.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.detection.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.lowVisibility.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.lowVisibility.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.lowVisibility.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <figure className={imageFrameClass}>
              <Image
                src="/projects/radar-iki.png"
                alt={t.imageAlt.lowVisibility}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </figure>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className={`${imageFrameClass} order-last md:order-first`}>
              <Image
                src="/projects/radar-uc.png"
                alt={t.imageAlt.integration}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.integration.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.integration.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.integration.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
              {t.sections.useCases.title}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.sections.useCases.items.map((c, index) => (
                <Reveal key={c.t} delay={index * 0.06}>
                  <div className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/75 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                    <div className="text-lg font-semibold text-[var(--accent)]">
                      {c.t}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {c.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-6 backdrop-blur-xl md:p-8">
            <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
              {t.sections.specs.title}
            </h2>

            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-sm">
                <tbody className="divide-y divide-[rgba(19,41,75,0.08)]">
                  {t.sections.specs.rows.map(([label, value]) => (
                    <tr key={label}>
                      <td className="py-3 pr-6 text-[var(--muted)]">{label}</td>
                      <td className="py-3 text-[var(--foreground)]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{t.sections.specs.cta1}</Button>
              <Button href="/projects" variant="secondary">
                {t.sections.specs.cta2}
              </Button>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
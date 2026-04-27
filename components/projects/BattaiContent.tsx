"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badge";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getBattaiMessages } from "@/messages/battai";
import BattaiHero from "@/app/projects/battai-ai-bms/battai-hero";

const imageFrameClass =
  "group overflow-hidden rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[3px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/70 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]";

export default function BattaiContent() {
  const { lang } = useLanguage();
  const t = getBattaiMessages(lang);

  return (
    <>
      <div className="relative">
        <BattaiHero />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl items-center px-6">
            <Reveal className="max-w-3xl">
              <Link
                href="/projects"
                className="inline-flex text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline"
              >
                {t.hero.back}
              </Link>

              <div className="mt-6 inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-white/60 px-4 py-2 text-xs text-[var(--accent)] backdrop-blur-md md:text-sm">
                {t.hero.eyebrow}
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--accent)] md:text-6xl">
                {t.hero.title1}
                <span className="block">{t.hero.title2}</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-xl md:leading-8">
                {t.hero.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.hero.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/downloads/battai-brosur.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(19,41,75,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_14px_32px_rgba(19,41,75,0.22)] active:scale-[0.98]"
                >
                  {t.hero.brochure}
                </a>

                <Button href="/contact" variant="secondary">
                  {t.hero.demo}
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
              <div className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                <div className="text-sm text-[var(--muted)]">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-[var(--accent)]">
                  {item.value}
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.hybrid.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.hybrid.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.hybrid.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <figure className={imageFrameClass}>
              <Image
                src="/projects/battai-hibrit.png"
                alt={t.imageAlt.hybrid}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className={`${imageFrameClass} order-last md:order-first`}>
              <Image
                src="/projects/battai-ai.png"
                alt={t.imageAlt.ai}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>

            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.ai.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.ai.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.ai.bullets.map((item) => (
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

            <figure className={imageFrameClass}>
              <Image
                src="/projects/battai-mobilite.png"
                alt={t.imageAlt.integration}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className={`${imageFrameClass} order-last md:order-first`}>
              <Image
                src="/projects/battai-scale.png"
                alt={t.imageAlt.scale}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>

            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.scale.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.scale.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.scale.bullets.map((item) => (
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
                {t.sections.strategy.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.strategy.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.strategy.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <figure className={imageFrameClass}>
              <Image
                src="/projects/battai-strategy.png"
                alt={t.imageAlt.strategy}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
          </section>
        </Reveal>

        <Reveal>
          <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <figure className={`${imageFrameClass} order-last md:order-first`}>
              <Image
                src="/projects/battai-ota.png"
                alt={t.imageAlt.ota}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>

            <div>
              <h2 className="text-3xl font-semibold text-[var(--accent)] md:text-4xl">
                {t.sections.ota.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.ota.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.ota.bullets.map((item) => (
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
                {t.sections.safety.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {t.sections.safety.text}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
                {t.sections.safety.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <figure className={imageFrameClass}>
              <Image
                src="/projects/battai-safety.png"
                alt={t.imageAlt.safety}
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </figure>
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
                  <div className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
                    <div className="text-lg font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
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
          <section className="rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[rgba(19,41,75,0.12)] hover:bg-white/78 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-8">
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
              <a
                href="/downloads/battai-brosur.pdf"
                download
                className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(19,41,75,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_14px_32px_rgba(19,41,75,0.22)] active:scale-[0.98]"
              >
                {t.sections.specs.brochure}
              </a>

              <Button href="/contact" variant="secondary">
                {t.sections.specs.demo}
              </Button>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
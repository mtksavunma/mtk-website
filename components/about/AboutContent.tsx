"use client";

import Reveal from "@/components/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getAboutMessages } from "@/messages/about";

const largeCardClass =
  "rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] md:p-8";

const smallCardClass =
  "rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]";

export default function AboutContent() {
  const { lang } = useLanguage();
  const t = getAboutMessages(lang);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Reveal>
        <section className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-white/60 px-4 py-2 text-xs text-[var(--accent)] backdrop-blur-md md:text-sm">
            {t.page.eyebrow}
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--accent)] md:text-5xl">
            {t.page.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
            {t.page.intro}
          </p>
        </section>
      </Reveal>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.04}>
          <div className={largeCardClass}>
            <h2 className="text-2xl font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
              {t.page.corporateTitle}
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.corporateText1}
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.corporateText2}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={largeCardClass}>
            <h2 className="text-2xl font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
              {t.page.approachTitle}
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.approachText1}
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.approachText2}
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[var(--accent)] md:text-3xl">
            {t.page.focusTitle}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.focusAreas.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className={smallCardClass}>
                  <h3 className="text-lg font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal delay={0.04}>
          <div className={largeCardClass}>
            <h2 className="text-2xl font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
              {t.page.missionTitle}
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.missionText1}
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.missionText2}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={largeCardClass}>
            <h2 className="text-2xl font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
              {t.page.visionTitle}
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.visionText1}
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              {t.page.visionText2}
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[var(--accent)] md:text-3xl">
            {t.page.ecosystemTitle}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {t.ecosystem.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className={smallCardClass}>
                  <h3 className="text-lg font-semibold text-[var(--accent)] transition-colors duration-300 hover:text-[var(--secondary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[var(--accent)] md:text-3xl">
            {t.page.achievementsTitle}
          </h2>

          <div className="mt-6 rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/55 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[rgba(19,41,75,0.12)] hover:bg-white/80 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-8">
            <ul className="space-y-3 text-[var(--muted)]">
              {t.achievements.map((item, index) => (
                <Reveal key={item} delay={index * 0.05}>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--secondary)]" />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
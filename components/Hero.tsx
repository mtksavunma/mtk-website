"use client";

import { motion } from "framer-motion";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getHomeMessages } from "@/messages/home";

export default function Hero() {
  const { lang } = useLanguage();
  const t = getHomeMessages(lang);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden">
      <ParallaxHeroImage
        src="/hero/mtk-hero.png"
        alt={t.hero.imageAlt}
        priority
        offset={90}
      />

      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: `
            linear-gradient(to right,
              rgba(245,247,251,0.82) 0%,
              rgba(245,247,251,0.68) 28%,
              rgba(245,247,251,0.34) 52%,
              rgba(245,247,251,0.12) 72%,
              rgba(245,247,251,0.18) 100%
            ),
            linear-gradient(to bottom,
              rgba(255,255,255,0.36) 0%,
              rgba(255,255,255,0.10) 48%,
              rgba(245,247,251,0.85) 100%
            )
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.45), transparent 24%), radial-gradient(circle at 78% 18%, rgba(245,158,11,0.08), transparent 20%), radial-gradient(circle at 60% 72%, rgba(19,41,75,0.06), transparent 24%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-40"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,247,251,0) 0%, rgba(245,247,251,0.72) 62%, rgba(245,247,251,1) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-[rgba(255,255,255,0.58)] px-4 py-2 text-xs text-[var(--accent)] backdrop-blur-md md:text-sm">
              {t.hero.eyebrow}
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--accent)] md:text-6xl">
              {t.hero.title1}
              <span className="block">{t.hero.title2}</span>
              <span className="block">{t.hero.title3}</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-xl md:leading-8">
              {t.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {t.hero.pills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(19,41,75,0.10)] bg-[rgba(255,255,255,0.52)] px-4 py-2 text-sm text-[var(--foreground)] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/projects">{t.hero.primaryCta}</Button>
              <Button href="/contact" variant="secondary">
                {t.hero.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
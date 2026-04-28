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
              rgba(245,247,251,0.86) 0%,
              rgba(245,247,251,0.72) 30%,
              rgba(245,247,251,0.42) 55%,
              rgba(245,247,251,0.16) 78%,
              rgba(245,247,251,0.20) 100%
            ),
            linear-gradient(to bottom,
              rgba(255,255,255,0.42) 0%,
              rgba(255,255,255,0.12) 48%,
              rgba(245,247,251,0.88) 100%
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

      <div className="relative z-10 flex min-h-screen items-center justify-center pt-10 md:pt-0">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl -translate-y-10 text-center md:-translate-y-16"
          >
            <h1 className="text-center text-4xl font-semibold leading-tight tracking-tight text-[var(--accent)] md:text-6xl">
              {t.hero.title1}
              <span className="block">{t.hero.title2}</span>
              <span className="block">{t.hero.title3}</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-[var(--muted)] md:text-xl md:leading-8">
              {t.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {t.hero.pills.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(19,41,75,0.10)] bg-[rgba(255,255,255,0.52)] px-4 py-2 text-sm text-[var(--foreground)] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
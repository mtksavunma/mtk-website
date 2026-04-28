"use client";

import Image from "next/image";
import Link from "next/link";
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
      {/* HERO */}
      <div className="relative">
        <StaviaHero />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex min-h-[88vh] max-w-6xl items-center justify-center px-6">
            
            {/* SOL ÜST BACK */}
            <Link
              href="/projects"
              className="absolute left-6 top-28 text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:underline md:left-10"
            >
              {t.hero.back}
            </Link>

            <Reveal className="mx-auto max-w-3xl text-center -translate-y-10 md:-translate-y-16">
              
              {/* 🔥 BÜYÜK BAŞLIK */}
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-[var(--accent)]">
                {t.hero.title1}
                <span className="block">{t.hero.title2}</span>
              </h1>

              {/* BUTON */}
              <div className="mt-8 flex justify-center">
                <Button href="/contact">
                  {t.cta.button}
                </Button>
              </div>

            </Reveal>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl space-y-20 px-6 py-16 md:py-20">

        {/* 🔥 AÇIKLAMA (AŞAĞI ALINDI) */}
        <Reveal>
          <section className="mx-auto max-w-5xl -mt-10 md:-mt-12">
            <p className="text-justify text-base leading-8 text-[var(--muted)] md:text-lg md:leading-9">
              <strong className="text-[var(--accent)]">STAVIA</strong>{" "}
              {t.hero.description.replace(/^STAVIA[;:\s-]*/i, "")}
            </p>
          </section>
        </Reveal>

        {/* CARDS */}
        <section className="grid md:grid-cols-4 gap-4">
          {t.quickCards.map((c: any, i: number) => (
            <div key={i} className="border p-4 rounded-xl">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm mt-2">{c.text}</p>
            </div>
          ))}
        </section>

        {/* SYSTEM */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold">{t.system.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.system.text}</p>
          </div>
          <Image src="/projects/stavia-bir.png" alt="" width={1200} height={800} />
        </section>

        {/* ENERGY */}
        <section className="grid md:grid-cols-2 gap-8">
          <Image src="/projects/stavia-iki.png" alt="" width={1200} height={800} />
          <div>
            <h2 className="text-3xl font-semibold">{t.energy.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.energy.text}</p>
          </div>
        </section>

        {/* FEATURES */}
        <section>
          <h2 className="text-3xl font-semibold">{t.features.title}</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {t.features.items.map((f: any, i: number) => (
              <div key={i} className="border p-4 rounded-xl">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BATTAI */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold">{t.battai.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.battai.text}</p>
          </div>
          <Image src="/projects/stavia-uc.png" alt="" width={1200} height={800} />
        </section>

        {/* VISION */}
        <section className="grid md:grid-cols-2 gap-8">
          <Image src="/projects/stavia-dord.png" alt="" width={1200} height={800} />
          <div>
            <h2 className="text-3xl font-semibold">{t.vision.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.vision.text}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="border p-8 rounded-xl">
          <h2 className="text-3xl font-semibold">{t.cta.title}</h2>
          <p className="mt-4">{t.cta.text}</p>
          <Button href="/contact" className="mt-4">
            {t.cta.button}
          </Button>
        </section>

      </main>
    </>
  );
}
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
            <div className="max-w-3xl">
              <Link href="/projects">{t.hero.back}</Link>

              <h1 className="mt-6 text-4xl font-semibold">
                {t.hero.title1}
                <span className="block">{t.hero.title2}</span>
              </h1>

              <p className="mt-4">{t.hero.description}</p>

              <div className="mt-4 flex gap-2">
                {t.hero.badges.map((b: string) => (
                  <Badge key={b}>{b}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-20 px-6 py-20">

        {/* Cards */}
        <section className="grid md:grid-cols-4 gap-4">
          {t.quickCards.map((c: any, i: number) => (
            <div key={i} className="border p-4 rounded-xl">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="text-sm mt-2">{c.text}</p>
            </div>
          ))}
        </section>

        {/* System */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold">{t.system.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.system.text}</p>
          </div>
          <Image src="/projects/stavia-bir.png" alt="" width={1200} height={800} />
        </section>

        {/* Energy */}
        <section className="grid md:grid-cols-2 gap-8">
          <Image src="/projects/stavia-iki.png" alt="" width={1200} height={800} />
          <div>
            <h2 className="text-3xl font-semibold">{t.energy.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.energy.text}</p>
          </div>
        </section>

        {/* Features */}
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

        {/* Battai */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold">{t.battai.title}</h2>
            <p className="mt-4 whitespace-pre-line">{t.battai.text}</p>
          </div>
          <Image src="/projects/stavia-uc.png" alt="" width={1200} height={800} />
        </section>

        {/* Vision */}
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
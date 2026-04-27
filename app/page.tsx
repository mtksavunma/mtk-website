"use client";

import Hero from "@/components/Hero";
import News from "@/components/News";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getSiteMessages } from "@/messages/site";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = getSiteMessages(lang);

  return (
    <main className="flex flex-col">
      <Hero />
      <News />

      <section className="py-20 text-center text-sm text-[var(--muted)]">
        {t.footer.company}
      </section>
    </main>
  );
}
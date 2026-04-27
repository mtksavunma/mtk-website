"use client";

import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getContactMessages } from "@/messages/contact";

export default function ThanksPage() {
  const { lang } = useLanguage();
  const t = getContactMessages(lang);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl bg-white/60 p-8 rounded-2xl">
        <h1 className="text-3xl text-[var(--accent)]">
          {t.thanksTitle}
        </h1>

        <p className="mt-4 text-[var(--muted)]">
          {t.thanksText}
        </p>

        <div className="mt-6">
          <Button href="/">{t.home}</Button>
        </div>
      </div>
    </main>
  );
}
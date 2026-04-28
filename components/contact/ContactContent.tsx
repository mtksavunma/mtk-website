"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { getContactMessages } from "@/messages/contact";

const cardClass =
  "rounded-2xl border border-[rgba(19,41,75,0.08)] bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-[4px] hover:border-[rgba(19,41,75,0.12)] hover:bg-white/82 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]";

export default function ContactContent() {
  const { lang } = useLanguage();
  const t = getContactMessages(lang);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Mesajınız başarıyla gönderildi.");
        form.reset();
      } else {
        setStatus("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
      }
    } catch {
      setStatus("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      {/* HEADER */}
      <Reveal>
        <section className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-white/60 px-4 py-2 text-xs text-[var(--accent)] backdrop-blur-md md:text-sm">
            {t.eyebrow}
          </div>

          <h1 className="mt-5 text-4xl font-semibold text-[var(--accent)] md:text-5xl">
            {t.title}
          </h1>

          <p className="mt-5 text-[var(--muted)] md:text-lg">{t.intro}</p>
        </section>
      </Reveal>

      {/* OFİSLER */}
      <Reveal>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--accent)] md:text-3xl">
            {t.officesTitle}
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className={`${cardClass} p-4`}>
              <Image
                src="/maps/itu-arikent.png"
                alt=""
                width={600}
                height={400}
                className="rounded-xl"
              />
              <div className="mt-4 font-semibold text-[var(--accent)]">
                {t.istanbul}
              </div>
            </div>

            <div className={`${cardClass} p-4`}>
              <Image
                src="/maps/sakarya-teknokent.png"
                alt=""
                width={600}
                height={400}
                className="rounded-xl"
              />
              <div className="mt-4 font-semibold text-[var(--accent)]">
                {t.sakarya}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT + FORM */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className={`${cardClass} p-6`}>
            <h2 className="text-2xl font-semibold text-[var(--accent)]">
              {t.contactTitle}
            </h2>

            <p className="mt-4 text-[var(--muted)]">{t.contactText}</p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="text-sm text-[var(--muted)]">{t.email}</div>
                <div className="text-[var(--accent)]">
                  info@mtksavunma.com
                </div>
              </div>

              <div>
                <div className="text-sm text-[var(--muted)]">{t.work}</div>
                <div>Defence · Energy · AI</div>
              </div>

              <div>
                <div className="text-sm text-[var(--muted)]">{t.offices}</div>
                <div>Istanbul · Sakarya</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className={`${cardClass} grid gap-4 p-6`}>
            <h2 className="text-2xl font-semibold text-[var(--accent)]">
              {t.formTitle}
            </h2>

            <input
              name="name"
              placeholder={t.name}
              className="input"
              required
            />

            <input
              name="email"
              type="email"
              placeholder={t.emailPlaceholder}
              className="input"
              required
            />

            <textarea
              name="message"
              placeholder={t.message}
              className="input min-h-32"
              required
            />

            <Button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : t.submit}
            </Button>

            {status && (
              <p className="text-sm text-[var(--muted)]">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </section>
    </main>
  );
}
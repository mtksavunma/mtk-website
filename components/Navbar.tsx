"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  useLanguage,
  type Language,
} from "@/components/providers/LanguageProvider";
import { getSiteMessages } from "@/messages/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { lang, setLang, mounted: languageMounted } = useLanguage();
  const t = getSiteMessages(lang);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/about", label: t.nav.about },
    { href: "/projects", label: t.nav.projects },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === pathname) return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const navScrolled = mounted && scrolled;

  const languageButtonClass = (value: Language) =>
    [
      "rounded-full px-2.5 py-1 text-xs font-semibold transition-all duration-300",
      lang === value
        ? "bg-[rgba(19,41,75,0.10)] text-[var(--accent)]"
        : "text-[var(--muted)] hover:bg-[rgba(19,41,75,0.05)] hover:text-[var(--accent)]",
    ].join(" ");

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        navScrolled
          ? "border-[rgba(19,41,75,0.12)] bg-[rgba(255,255,255,0.88)] backdrop-blur-2xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
          : "border-[rgba(19,41,75,0.10)] bg-[rgba(255,255,255,0.72)] backdrop-blur-xl",
      ].join(" ")}
    >
      <nav
        className={[
          "mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300",
          navScrolled ? "h-[68px]" : "h-[76px]",
        ].join(" ")}
      >
        <Link
          href="/"
          className="flex items-center"
          aria-label="MTK Savunma - Anasayfa"
        >
          <Image
            src="/logo/mtk-logo.png"
            alt="MTK Savunma"
            width={140}
            height={44}
            priority
            className={[
              "w-auto shrink-0 brightness-0 transition-all duration-300",
              navScrolled ? "h-9 md:h-10" : "h-11 md:h-12",
            ].join(" ")}
          />
          <span className="sr-only">MTK Savunma</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-[rgba(19,41,75,0.10)] text-[var(--accent)]"
                    : "text-[var(--accent)] hover:bg-[rgba(19,41,75,0.05)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-white/70 p-1 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setLang("tr")}
              className={languageButtonClass("tr")}
              aria-pressed={lang === "tr"}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={languageButtonClass("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <Link
            href="/contact"
            className={[
              "inline-flex items-center justify-center rounded-full border text-sm font-medium text-[var(--accent)] transition-all duration-300",
              navScrolled
                ? "border-[rgba(19,41,75,0.14)] bg-white px-4 py-2 shadow-[0_6px_20px_rgba(15,23,42,0.05)] hover:bg-[rgba(19,41,75,0.04)]"
                : "border-[rgba(19,41,75,0.12)] bg-white px-4 py-2 hover:bg-[rgba(19,41,75,0.04)]",
            ].join(" ")}
          >
            {t.nav.contactCta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {languageMounted && (
            <div className="inline-flex items-center rounded-full border border-[rgba(19,41,75,0.10)] bg-white/70 p-1 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setLang("tr")}
                className={languageButtonClass("tr")}
                aria-pressed={lang === "tr"}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={languageButtonClass("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
          )}

          <Link
            href="/contact"
            className={[
              "inline-flex items-center justify-center rounded-full border text-sm font-medium text-[var(--accent)] transition-all duration-300",
              navScrolled
                ? "border-[rgba(19,41,75,0.14)] bg-white px-4 py-2 shadow-[0_6px_20px_rgba(15,23,42,0.05)] hover:bg-[rgba(19,41,75,0.04)]"
                : "border-[rgba(19,41,75,0.12)] bg-white px-4 py-2 hover:bg-[rgba(19,41,75,0.04)]",
            ].join(" ")}
          >
            {t.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
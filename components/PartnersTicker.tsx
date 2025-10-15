// components/PartnersTicker.tsx
"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type MarqueeVars = CSSProperties & { ["--marquee-speed"]?: string };

const LOGOS = [
  { src: "/logo/sakarya-teknokent.png", alt: "Sakarya Teknokent" },
  { src: "/logo/fuzyon-kulucka.png",    alt: "Füzyon Kuluçka" },
  { src: "/logo/itu-arikent.png",       alt: "İTÜ ARI Teknokent" },
  { src: "/logo/itu-cekirdek.png",      alt: "İTÜ Çekirdek" },
  { src: "/logo/kosgeb.png",            alt: "KOSGEB" },
  { src: "/logo/tubitak.png",           alt: "TÜBİTAK" },
];

export default function PartnersTicker() {
  const styleVars: MarqueeVars = { ["--marquee-speed"]: "22s" };

  return (
    <section className="relative group overflow-hidden border-t border-white/10 py-2" style={styleVars}>
      <div className="marquee-fade-l" />
      <div className="marquee-fade-r" />
      <div className="marquee-track flex w-[200%] items-center gap-12">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex w-1/2 items-center justify-around gap-12 px-6">
            {LOGOS.map((l) => (
              <div key={`${loopIdx}-${l.src}`} className="shrink-0 opacity-80 transition group-hover:opacity-100">
                <Image
                  src={l.src}
                  alt={l.alt}
                  width={240}
                  height={80}
                  className="h-14 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

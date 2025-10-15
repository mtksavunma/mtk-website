// app/page.tsx
import Image from "next/image";
import Hero from "@/components/Hero";
import News from "@/components/News";
import type { CSSProperties } from "react";

// NOT: Görselleri public/logo klasörüne koy:
// public/logo/sakarya-teknokent.png, fuzyon-kulucka.png, itu-arikent.png,
// public/logo/itu-cekirdek.png, public/logo/kosgeb.png, public/logo/tubitak.png
const partnerLogos = [
  { src: "/logo/sakarya-teknokent.png", alt: "Sakarya Teknokent" },
  { src: "/logo/fuzyon-kulucka.png",    alt: "Füzyon Kuluçka" },
  { src: "/logo/itu-arikent.png",       alt: "İTÜ ARI Teknokent" },
  { src: "/logo/itu-cekirdek.png",      alt: "İTÜ Çekirdek" },
  { src: "/logo/kosgeb.png",            alt: "KOSGEB" },
  { src: "/logo/tubitak.png",           alt: "TÜBİTAK" },
];

// CSS değişkenini typesafe kullan
type MarqueeVars = CSSProperties & { ["--marquee-speed"]?: string };
const marqueeStyle: MarqueeVars = { ["--marquee-speed"]: "22s" };

export default function HomePage() {
  return (
    <main>
      <Hero />
      <News />

      {/* Destekçiler – başlıksız, ince akış şeridi */}
      <section
        className="partners-band relative group overflow-hidden py-2"
        style={marqueeStyle}
        aria-label="Destek veren kuruluşların logoları"
      >
        {/* Sol/Sağ fade */}
        <div className="marquee-fade-l" />
        <div className="marquee-fade-r" />

        {/* Sonsuz akan hat */}
        <div className="marquee-track flex w-[200%] items-center gap-12">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex w-1/2 items-center justify-around gap-12 px-6">
              {partnerLogos.map((l) => (
                <div key={`${loopIdx}-${l.src}`} className="partners-logo shrink-0">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={240}
                    height={80}
                    className="h-14 md:h-16 w-auto object-contain"
                    priority={loopIdx === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

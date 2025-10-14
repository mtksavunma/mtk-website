// app/page.tsx
import Image from "next/image";
import Hero from "@/components/Hero";
import News from "@/components/News";

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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <News />

      {/* Destekçiler – başlıksız, ince akış şeridi */}
      <section
        className="relative group overflow-hidden border-t border-white/4 py-2" // ↑ şerit yüksekliği
        style={{ ["--marquee-speed" as any]: "22s" }}
        aria-label="Destek veren kuruluşların logoları"
      >
        {/* Sol/Sağ fade (globals.css’te tanımlı) */}
        <div className="marquee-fade-l" />
        <div className="marquee-fade-r" />

        {/* Sonsuz akan hat */}
        <div className="marquee-track flex w-[200%] items-center gap-12">
          {[...Array(2)].map((_, loopIdx) => (
            <div
              key={loopIdx}
              className="flex w-1/2 items-center justify-around gap-12 px-6"
            >
              {partnerLogos.map((l) => (
                <div
                  key={`${loopIdx}-${l.src}`}
                  className="shrink-0 opacity-80 transition group-hover:opacity-100"
                >
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={240}
                    height={80}
                    className="h-14 md:h-16 lg:h-18 w-auto object-contain" // ↑ LOGO BOYUTU
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

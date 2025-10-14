// components/PartnersTicker.tsx
"use client";

type Partner = { src: string; alt: string };

const PARTNERS: Partner[] = [
  { src: "/logo/sakarya-teknokent.png", alt: "Sakarya Teknokent" },
  { src: "/logo/fuzyon-kulucka.png",    alt: "Füzyon Kuluçka" },
  { src: "/logo/itu-arikent.png",       alt: "İTÜ ARI Teknokent" },
  { src: "/logo/itu-cekirdek.png",      alt: "İTÜ Çekirdek" },
  { src: "/logo/kosgeb.png",            alt: "KOSGEB" },
  { src: "/logo/tubitak.png",           alt: "TÜBİTAK" },
];

export default function PartnersTicker() {
  return (
    <section
      className="relative group overflow-hidden border-t border-white/10"
      style={{ ["--speed" as any]: "22s" }} // kayma hızı
      aria-label="İş birliği yapılan kurumlar"
    >
      {/* Daha DAR bant: yüksekliği düşürdüm */}
      <div className="h-10 md:h-8"></div>

      {/* Kaydırma hattı */}
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <div className="track flex w-[200%] items-center gap-12 px-6">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex w-1/2 items-center justify-around gap-12">
              {PARTNERS.map((p) => (
                <div key={`${loop}-${p.src}`} className="shrink-0 opacity-80 transition group-hover:opacity-100">
                  <img
                    src={p.src}
                    alt={p.alt}
                    height={26}
                    className="h-6 md:h-5 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Sol/sağ fade efektleri */}
        <div className="fade fade-l" />
        <div className="fade fade-r" />
      </div>

      <style jsx>{`
        .track { animation: partners-marquee var(--speed) linear infinite; }
        .group:hover .track { animation-play-state: paused; }
        @keyframes partners-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fade {
          position: absolute; top: 0; bottom: 0; width: 60px; pointer-events: none;
        }
        .fade-l { left: 0;  background: linear-gradient(to right, rgba(11,18,32,1), rgba(11,18,32,0)); }
        .fade-r { right: 0; background: linear-gradient(to left, rgba(11,18,32,1), rgba(11,18,32,0)); }
        @media (prefers-color-scheme: light) {
          .fade-l { background: linear-gradient(to right, rgba(246,248,251,1), rgba(246,248,251,0)); }
          .fade-r { background: linear-gradient(to left, rgba(246,248,251,1), rgba(246,248,251,0)); }
        }
      `}</style>
    </section>
  );
}

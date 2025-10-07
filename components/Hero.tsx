"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden radarsweep">
      {/* Arka plan görseli */}
      <Image
        src="/hero/mtk-hero.png" // public/hero/mtk-hero.png
        alt="Enerji depolama, batarya ve savunma sistemleri arka planı"
        fill
        sizes="100vw"
        className="object-cover object-[center_30%] pointer-events-none select-none"
        priority
      />

      {/* Overlay: her iki temada da yazıyı okunur yapar */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90"
        aria-hidden
      />

      {/* Metin */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            Geleceğin Savunma Sistemlerini Bugün İnşa Ediyoruz.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white/85">
            Yapay zekâ, enerji sistemleri ve ileri mühendislikle milli çözümler.{" "}
            <span className="text-white font-semibold">BATTAI</span> odakta; radar zekâ modülü yolda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-xl px-6 py-3 bg-white text-black font-medium shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Projelerimizi Keşfedin
            </Link>

            <Link
              href="/contact"
              className="rounded-xl px-6 py-3 border border-white/30 text-white font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Bize Ulaşın
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

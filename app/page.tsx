// app/page.tsx
import Hero from "@/components/Hero";
import News from "@/components/News";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* İsteğe bağlı: küçük açıklama */}
      {/* <section className="mx-auto max-w-6xl px-6 pt-10">
        <p className="text-white/70">En güncel gelişmelerimiz aşağıda.</p>
      </section> */}
      <News />
    </main>
  );
}

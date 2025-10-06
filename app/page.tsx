import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Announcements from "../components/Announcements";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Announcements />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold">Odak Alanları</h2>
        <p className="mt-3 text-gray-300">
          Enerji • Radar
        </p>
      </section>
    </main>
  );
}

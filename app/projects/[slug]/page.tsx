// app/projects/[slug]/page.tsx
import Link from "next/link";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm text-white/70 hover:underline">
        ← Projelere dön
      </Link>

      <h1 className="mt-4 text-4xl font-semibold">
        Proje Detayı: {slug.replaceAll("-", " ").toUpperCase()}
      </h1>

      <p className="mt-4 text-gray-300">
        Bu sayfada projenin teknik özellikleri, mimarisi, KPI’lar, test
        sonuçları ve entegrasyon senaryoları yer alacak.
      </p>

      <section className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold">Teknik Özellikler</h2>
          <ul className="mt-2 list-disc pl-6 text-gray-300">
            <li>Gerilim/Kapasite/Yoğunluk</li>
            <li>AI-BMS Algoritmaları (SoC/SoH)</li>
            <li>Termal yönetim &amp; güvenlik</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 p-5">
          <h2 className="text-lg font-semibold">Entegrasyon</h2>
          <ul className="mt-2 list-disc pl-6 text-gray-300">
            <li>VTOL / UGV / Radar arayüzleri</li>
            <li>CAN / Ethernet / SDR</li>
            <li>Sertifikasyon &amp; testler</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

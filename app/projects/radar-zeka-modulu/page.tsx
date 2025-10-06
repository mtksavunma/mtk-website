import Badge from "@/components/Badge";
import Section from "@/components/Section";

export const metadata = {
  title: "Radar Zekâ Modülü – Geliştirme Aşamasında",
  description:
    "Menzil optimizasyonu ve düşük RCS hedeflerde yüksek doğruluk hedefleyen analiz katmanı. Patent süreci planlı.",
};

export default function RadarPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <a href="/projects" className="text-sm text-white/70 hover:underline">
        ← Projelere dön
      </a>

      <h1 className="mt-4 text-4xl font-semibold">
        Radar Zekâ Modülü (Geliştirme Aşamasında)
      </h1>

      <div className="mt-3 flex flex-wrap gap-2">
        <Badge>Analiz & Algoritma Katmanı</Badge>
        <Badge>Hedef Tespiti / Sınıflandırma</Badge>
        <Badge>Geliştirme Sürmekte</Badge>
      </div>

      <Section title="Kapsam">
        <p className="text-gray-300">
          Mevcut radar platformlarına tak-çalıştır bir yazılım/analiz katmanı
          olarak tasarlanan bu modül; menzil optimizasyonu ve düşük RCS
          (Radar Kesit Alanı) hedeflerde yüksek doğruluk hedeflemektedir.
          Geliştirme sürmekte olup detaylar patent süreci planlaması nedeniyle
          sınırlı paylaşılmaktadır.
        </p>
      </Section>

      <Section title="Hedeflenen Yetkinlikler">
        <ul className="list-disc pl-6 text-gray-300">
          <li>Hedef tespiti ve takipte gürültüye dayanıklı analiz</li>
          <li>Düşük RCS hedefler için hassas sinyal işleme</li>
          <li>Uyarlanabilir menzil/çözünürlük optimizasyonu</li>
        </ul>
      </Section>

      <Section>
        <a
          href="/contact"
          className="rounded-xl px-5 py-3 border border-white text-white text-sm font-medium"
        >
          İş Birliği / Pilot Çalışma İçin İletişime Geç
        </a>
      </Section>
    </main>
  );
}

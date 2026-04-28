// app/news/page.tsx
import News from "@/components/News";
import { getNewsMessages } from "@/messages/news";
import { useLanguage } from "@/components/providers/LanguageProvider";

export const metadata = {
  title: "Haberler",
  description: "MTK Savunma’dan en güncel haberler ve gelişmeler.",
};

export default function NewsPage() {
  // ⚠️ server component olduğu için direkt lang alamıyoruz
  // o yüzden basit çözüm: TR default (istersen sonra dynamic yaparız)
  const t = getNewsMessages("tr");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      
      {/* 🔥 ORTALANMIŞ HEADER */}
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--accent)] md:text-5xl">
          {t.section.title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">
          {t.section.description}
        </p>
      </section>

      {/* HABERLER */}
      <div className="mt-12">
        <News showHeading={false} />
      </div>
    </main>
  );
}
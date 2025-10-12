// app/news/page.tsx
import News from "@/components/News";

export const metadata = {
  title: "Haberler",
  description: "MTK Savunma’dan en güncel haberler ve gelişmeler.",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Haberler</h1>
      <News showHeading={false} />
    </main>
  );
}

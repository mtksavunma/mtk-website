type Item = { date: string; title: string; summary?: string };

const items: Item[] = [
  {
    date: "30.09.2025",
    title: "Ödül Kazandık",
    summary: "MTK Uzay ve Savunma Teknolojileri Final'de!",
  },
  {
    date: "06.10.2025",
    title: "Enerji Verimliliği Forum ve Fuarı",
    summary: "Stand ziyaretleri ve demo randevuları için iletişime geçebilirsiniz.",
  },
   {
    date: "11.10.2025",
    title: "Innovation Week 2025",
    summary: "Stand ziyaretleri ve demo randevuları için iletişime geçebilirsiniz.",
  },
];

export default function Announcements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold">Duyurular</h2>
      <div className="mt-6 grid gap-4">
        {items.map((a, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-sm text-white/60">{a.date}</div>
            <div className="text-lg font-semibold mt-1">{a.title}</div>
            {a.summary && <p className="text-gray-300 mt-2">{a.summary}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

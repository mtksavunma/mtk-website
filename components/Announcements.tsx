// components/Announcements.tsx
import Link from "next/link";

type Item = { date: string; title: string; summary?: string; href: string };

const MONTHS_TR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

function formatDateTR(d: string) {
  const dt = new Date(d); // "YYYY-MM-DD" ya da "DD.MM.YYYY" kabul eder (tarayıcıya göre)
  const isDots = d.includes(".");
  const safe = isDots
    ? new Date(d.split(".").reverse().join("-")) // 30.09.2025 -> 2025-09-30
    : dt;

  const day = safe.getDate().toString().padStart(2, "0");
  const month = MONTHS_TR[safe.getMonth()] ?? "";
  return { day, month };
}

// ——— Duyuru verileri (href’leri kendi sayfalarınıza göre güncelleyebilirsiniz)
const items: Item[] = [
  {
    date: "2025-09-30",
    title: "Ödül Kazandık",
    summary: "MTK Uzay ve Savunma Teknolojileri Final'de!",
    href: "/announcements/odul-kazandik",
  },
  {
    date: "2025-10-06",
    title: "Enerji Verimliliği Forum ve Fuarı",
    summary: "Stant ziyaretleri ve demo randevuları için iletişime geçebilirsiniz.",
    href: "/announcements/enerji-verimliligi-forumu",
  },
  {
    date: "2025-10-11",
    title: "Innovation Week 2025",
    summary: "Stant ziyaretleri ve demo randevuları için iletişime geçebilirsiniz.",
    href: "/announcements/innovation-week-2025",
  },
];

export default function Announcements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold">Duyurular</h2>

      <div className="mt-6 grid gap-5">
        {items.map((a) => {
          const { day, month } = formatDateTR(a.date);
          return (
            <Link
              key={a.href}
              href={a.href}
              className="relative block rounded-2xl border border-white/10 bg-white/[0.03] pl-28 pr-5 py-5 hover:bg-white/[0.06] transition-colors"
            >
              {/* Sol büyük tarih rozeti */}
              <div className="absolute left-4 top-4 select-none rounded-xl bg-white/12 px-3 py-2 text-center leading-none backdrop-blur-sm">
                <div className="text-2xl font-bold text-white/95">{day}</div>
                <div className="mt-0.5 text-[11px] uppercase tracking-wide text-white/85">
                  {month}
                </div>
              </div>

              <div className="text-lg font-semibold">{a.title}</div>
              {a.summary && (
                <p className="mt-2 text-sm text-white/80">{a.summary}</p>
              )}

              <div className="mt-4 font-semibold underline underline-offset-4">
                Detay Gör
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

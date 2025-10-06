export default function Stats() {
    const items = [
      { label: "BATTAI Yerli Üretim", value: "%63" },
      { label: "Destek Programları", value: "TÜBİTAK & KOSGEB" },
      { label: "Patent Durumu", value: "BATTAI için başvuru yapıldı" },
    ];
    return (
      <section className="bg-white/5 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-6 sm:grid-cols-3">
          {items.map(i => (
            <div key={i.label} className="rounded-2xl border border-white/10 p-6">
              <div className="text-3xl font-semibold">{i.value}</div>
              <div className="mt-2 text-white/70">{i.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
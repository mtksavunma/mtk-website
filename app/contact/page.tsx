// app/contact/page.tsx
import Image from "next/image";

export const metadata = {
  title: "İletişim | MTK Savunma",
  description: "İTÜ ARI Teknokent ve Sakarya Teknokent ofislerimizin konumları ve iletişim bilgileri.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold">İletişim</h1>

      {/* HARİTALAR */}
      <section className="mt-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* İTÜ ARI */}
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/maps/itu-arikent.png"
                alt="İTÜ ARI Teknokent konumu"
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 text-sm text-white/80">
              İstanbul Teknik Üniversitesi İTÜ Arı Sarıyer/ İstanbul
            </figcaption>
          </figure>

          {/* Sakarya Teknokent */}
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/maps/sakarya-teknokent.png"
                alt="Sakarya Teknokent konumu"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-white/80">
              Teknoloji Geliştirme Bölgeleri Sitesi Sakarya Teknokent Serdivan/ Sakarya
            </figcaption>
          </figure>
        </div>
      </section>

      {/* BİLGİ + FORM */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Bilgi kartı */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">İletişim Bilgileri</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <span className="text-white font-medium">E-posta: </span>
              <a href="mailto:info@mtksavunma.com" className="underline">
                info@mtksavunma.com
              </a>
            </li>
            <li>
              <span className="text-white font-medium">Faks: </span>
              
            </li>
          </ul>
        </div>

        {/* Form (mevcut POST endpoint’inle) */}
        <form
          action="/api/contact"
          method="POST"
          className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4"
        >
          <input
            className="bg-white/10 border border-white/20 rounded-lg p-3"
            name="name"
            placeholder="Ad Soyad"
            required
          />
          <input
            className="bg-white/10 border border-white/20 rounded-lg p-3"
            type="email"
            name="email"
            placeholder="E-posta"
            required
          />
          <textarea
            className="bg-white/10 border border-white/20 rounded-lg p-3"
            name="message"
            rows={5}
            placeholder="Mesajınız"
            required
          />
          {/* basit honeypot */}
          <input type="text" name="company" className="hidden" aria-hidden="true" />
          <button className="rounded-xl px-6 py-3 bg-white text-black font-medium w-fit">
            Gönder
          </button>
        </form>
      </section>
    </main>
  );
}

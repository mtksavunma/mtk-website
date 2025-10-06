import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} MTK Uzay ve Savunma Teknolojileri A.Ş. Tüm hakları saklıdır.</div>

        <nav className="flex gap-4">
          <Link className="hover:underline" href="/news">Duyurular</Link>
          <Link className="hover:underline" href="/projects">Projeler</Link>
          <Link className="hover:underline" href="/contact">İletişim</Link>
          {/* public/ altındaki statik dosya olduğundan <a> ile bırakmak doğru */}
          <a className="hover:underline" href="/sitemap.xml">Sitemap</a>
        </nav>
      </div>
    </footer>
  );
}

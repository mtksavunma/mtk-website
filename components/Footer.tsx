export default function Footer() {
    return (
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} [Şirket Adı]. Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <a className="hover:underline" href="/news">Duyurular</a>
            <a className="hover:underline" href="/projects">Projeler</a>
            <a className="hover:underline" href="/contact">İletişim</a>
            <a className="hover:underline" href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </footer>
    );
  }
  
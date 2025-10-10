import Link from "next/link";

/** Sosyal ikonlar */
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5Zm.02 6H2v11h3V9.5Zm5 0H7v11h3v-5.9c0-1.57.9-2.6 2.34-2.6 1.4 0 2.16.95 2.16 2.6v5.9h3v-6.64c0-3.34-1.78-4.9-4.16-4.9-1.87 0-2.67.98-3.14 1.66h-.04l-.12-1.42Z"
      />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm7.93 9h-3.07a15.27 15.27 0 0 0-1.1-5A8.01 8.01 0 0 1 19.93 11ZM12 4c.87 0 2.5 2.26 3.02 6h-6C9.54 6.26 11.13 4 12 4ZM4.07 13h3.07a15.27 15.27 0 0 0 1.1 5 8.01 8.01 0 0 1-4.17-5ZM7.14 11H4.07A8.01 8.01 0 0 1 8.24 6a15.27 15.27 0 0 0-1.1 5Zm1.88 2h5.96c-.52 3.74-2.15 6-2.98 6-.87 0-2.46-2.26-2.98-6Zm6.84 0h3.07a8.01 8.01 0 0 1-4.17 5 15.27 15.27 0 0 0 1.1-5Z"
      />
    </svg>
  );
}

const EMAIL = "info@mtksavunma.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 text-sm text-white/70 sm:grid-cols-3">
        {/* SOL */}
        <div>
          <div>© {year} MTK Savunma. Tüm hakları saklıdır.</div>
          <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/about" className="hover:underline">Hakkımızda</Link>
            <Link href="/news" className="hover:underline">Duyurular</Link>
          </nav>
        </div>

        {/* ORTA — Sosyal */}
        <div className="flex items-start justify-center sm:items-center">
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/mtk-uzay-ve-savunma-teknoloji%CC%87leri%CC%87-a-%C5%9F/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="MTK Savunma LinkedIn"
              className="text-white/70 hover:text-white transition"
            >
              <LinkedInIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/mtkdefence/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="MTK Savunma Instagram"
              className="text-white/70 hover:text-white transition"
            >
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://mtksavunma.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Web"
              title="Web Sitesi"
              className="text-white/70 hover:text-white transition"
            >
              <GlobeIcon className="h-6 w-6" />
              <span className="sr-only">Web</span>
            </a>
          </div>
        </div>

        {/* SAĞ — Bize Ulaşın */}
        <div className="sm:justify-self-end">
          <h3 className="text-white/90 font-medium">Bize Ulaşın</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                İletişim Formu
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

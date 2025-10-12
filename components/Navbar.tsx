// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      {/* h-16: 64px navbar yüksekliği */}
      <nav className="mx-auto max-w-6xl h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="MTK Savunma - Anasayfa">
          <Image
            src="/logo/mtk-logo.png"
            alt="MTK Savunma"
            width={160}            // tahmini genişlik; w-auto olduğu için oranı korur
            height={40}            // referans yükseklik
            priority
            className="h-20 md:h-22 w-auto shrink-0" // ← asıl boyut kontrolü
          />
          <span className="sr-only">MTK</span>
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link href="/about" className="hover:underline">Hakkımızda</Link>
          <Link href="/projects" className="hover:underline">Projeler</Link>
          <Link href="/news" className="hover:underline">Haberler</Link>
          <Link href="/contact" className="hover:underline">İletişim</Link>
        </div>
      </nav>
    </header>
  );
}

// app/contact/thanks/page.tsx
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Mesajınız ulaştı ✔</h1>
      <p className="mt-3 text-gray-300">
        En kısa sürede sizinle iletişime geçeceğiz. Anasayfaya dönmek için{" "}
        <Link href="/" className="underline">
          tıklayın
        </Link>
        .
      </p>
    </main>
  );
}

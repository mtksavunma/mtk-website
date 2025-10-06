// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
};

// Node'a özel kütüphane kullanmıyorsan Edge iyi; ileride nodemailer vb. kullanırsan 'nodejs' yap.
export const runtime = "edge"; // veya: export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", missing: ["name", "email", "message"] },
        { status: 400 }
      );
    }

    // TODO: Burada mail/DB entegrasyonunu yapabilirsiniz.

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
  }
}

// (İsteğe bağlı) GET istekleri için basit cevap
export function GET() {
  return NextResponse.json({ ok: true, endpoint: "contact" });
}

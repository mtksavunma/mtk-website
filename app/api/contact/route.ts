// app/api/contact/route.ts
import { NextResponse } from "next/server";

// Node kütüphanesi kullanmıyorsanız Edge idealdir.
// (İlerde nodemailer kullanırsanız: export const runtime = "nodejs")
export const runtime = "edge";

type Fields = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const fields: Fields = {
      name: typeof form.get("name") === "string" ? (form.get("name") as string) : undefined,
      email: typeof form.get("email") === "string" ? (form.get("email") as string) : undefined,
      message: typeof form.get("message") === "string" ? (form.get("message") as string) : undefined,
      company: typeof form.get("company") === "string" ? (form.get("company") as string) : undefined,
    };

    // Basit bot filtresi (honeypot alanı)
    if (fields.company && fields.company.trim() !== "") {
      return NextResponse.redirect(new URL("/contact/thanks", req.url), { status: 303 });
    }

    // TODO: Buraya mail/CRM gönderimi (Resend, SendGrid vs.)
    return NextResponse.redirect(new URL("/contact/thanks", req.url), { status: 303 });
  } catch {
    // Geçersiz form / JSON vb. durumda nazikçe geri döndür
    return NextResponse.redirect(new URL("/contact?e=1", req.url), { status: 303 });
  }
}

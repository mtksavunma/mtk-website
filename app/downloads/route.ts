// app/downloads/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs"; // fs kullanmak için Node.js runtime

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "downloads", "battai-brosur.pdf");
  const data = await fs.readFile(filePath); // Buffer/Uint8Array

  return new NextResponse(data, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="battai-brosur.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

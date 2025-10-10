import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "downloads", "battai-brosur.pdf");
  const file = await fs.readFile(filePath); // Buffer döner

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="battai-brosur.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

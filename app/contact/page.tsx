import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "İletişim | MTK Savunma",
  description:
    "MTK Uzay ve Savunma Teknolojileri ile iletişime geçin.",
};

export default function ContactPage() {
  return <ContactContent />;
}
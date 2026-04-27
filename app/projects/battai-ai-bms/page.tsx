import type { Metadata } from "next";
import BattaiContent from "@/components/projects/BattaiContent";

export const metadata: Metadata = {
  title: "BATTAI – Hibrit Batarya Yönetim Sistemi",
  description:
    "BATTAI; savunma sistemlerine yönelik geliştirilen, yapay zekâ destekli durum tahmini, hibrit hücre yönetimi, termal güvenlik ve modüler entegrasyon kabiliyeti sunan patentli bir hibrit batarya yönetim sistemidir.",
};

export default function BattaiPage() {
  return <BattaiContent />;
}
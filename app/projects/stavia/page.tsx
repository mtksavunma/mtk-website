import type { Metadata } from "next";
import StaviaContent from "@/components/projects/StaviaContent";

export const metadata: Metadata = {
  title: "STAVIA – Taşınabilir Enerji Platformu",
  description:
    "STAVIA; BATTAI altyapısını kullanan taşınabilir, modüler ve yenilenebilir enerji uyumlu akıllı şarj platformudur.",
};

export default function StaviaPage() {
  return <StaviaContent />;
}
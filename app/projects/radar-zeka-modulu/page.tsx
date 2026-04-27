import type { Metadata } from "next";
import RadarContent from "@/components/projects/RadarContent";

export const metadata: Metadata = {
  title: "Radar Zekâ Modülü",
  description:
    "Radar Zekâ Modülü; savunma sistemlerine yönelik geliştirilen, hedef tespiti, sinyal analizi ve düşük görünürlüklü hedeflerin değerlendirilmesine odaklanan yapay zekâ destekli radar analiz modülüdür.",
};

export default function RadarPage() {
  return <RadarContent />;
}
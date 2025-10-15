// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ❗ derlemede lint hatalarını es geç
  },
};

export default nextConfig;

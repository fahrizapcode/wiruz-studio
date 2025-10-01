import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/wiruz-studio-if", // pakai nama repo kamu
};

export default nextConfig;

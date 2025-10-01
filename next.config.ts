import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export
  images: { unoptimized: true },
  basePath: "/wiruz-studio", // pakai nama repo kamu
  assetPrefix: "/wiruz-studio/",
};

export default nextConfig;

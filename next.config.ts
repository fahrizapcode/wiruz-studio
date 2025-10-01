import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // penting untuk GitHub Pages
  },
  basePath: "/wiruz-studio", // Ganti dengan nama repo GitHub kamu
};

export default nextConfig;

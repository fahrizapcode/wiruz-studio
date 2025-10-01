/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/wiruz-studio", // karena repo kamu bukan username.github.io
};

export default nextConfig;

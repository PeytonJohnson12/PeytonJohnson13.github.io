import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/business-website",
  assetPrefix: "/business-website",
  images: { unoptimized: true },
};

export default nextConfig;

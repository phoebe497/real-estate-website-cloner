import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.batdongsan.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'vinhomes.vn',
      },
    ],
  },
};

export default nextConfig;

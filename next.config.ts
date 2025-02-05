import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        pathname: '*',
        hostname: '*'
      }
    ],
  }
  /* config options here */
};

export default nextConfig;

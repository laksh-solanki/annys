import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;

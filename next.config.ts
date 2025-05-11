import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // wyłącz minifikację JS
    if (config.optimization) {
      config.optimization.minimize = false;
    }
    return config;
  },
  swcMinify: false,
};

export default nextConfig;

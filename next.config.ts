import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  turbo: {
    root: '/home/fazzy/alx-listing-app-03',
  },
};

export default nextConfig;

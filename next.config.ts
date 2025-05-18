import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enables static export (required for GitHub Pages or Netlify)
  reactStrictMode: true,};

export default nextConfig;

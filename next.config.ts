import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com", pathname: "/**" },
      { hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;

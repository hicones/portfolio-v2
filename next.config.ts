import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* add unsplash to images*/

  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

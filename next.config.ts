import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "xpkrrokuoulyadlcdhjt.supabase.co",
        protocol: "https",
      }
    ],
  },

  assetPrefix: "/portfolio",

  output: "standalone",
};

export default withNextIntl(nextConfig);

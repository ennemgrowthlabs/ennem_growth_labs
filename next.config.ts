import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Keep the Next.js "N" badge off the WhatsApp chip (bottom-left).
  devIndicators: {
    position: "bottom-right",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
      { protocol: "https", hostname: "www.google.com", pathname: "/s2/**" },
      { protocol: "https", hostname: "taskwagon.com" },
      { protocol: "https", hostname: "app.taskwagon.com" },
      { protocol: "https", hostname: "greatindiaformationteam.com" },
      { protocol: "https", hostname: "snapvy.ennemmarketings.com" },
      { protocol: "https", hostname: "elquora.com" },
      { protocol: "https", hostname: "thenithaniyam.com" },
      { protocol: "https", hostname: "ramyamcreations.com" },
      { protocol: "https", hostname: "toddlersdiapers.com" },
      { protocol: "https", hostname: "brewishstore.com" },
      { protocol: "https", hostname: "tsbrandjewellery.com" },
      { protocol: "https", hostname: "tossca.net" },
      { protocol: "https", hostname: "dfwin.co" },
      { protocol: "https", hostname: "ddcarz.com" },
      { protocol: "https", hostname: "littlebabe.in" },
      { protocol: "https", hostname: "ennemholidays.com" },
      { protocol: "https", hostname: "ennemmarketings.com" },
      { protocol: "https", hostname: "ai.ennemmarketings.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|avif|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

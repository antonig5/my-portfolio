/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-symbol-logo.tradingview.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "us.123rf.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "repository-images.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "obuldanrptloktxcffvn.supabase.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.ecestaticos.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;

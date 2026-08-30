/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.imgflip.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.imgflip.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  unoptimized: true,
};

export default nextConfig;

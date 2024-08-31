/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
    serverActions: {
      allowedOrigins: ["tt9mb8xn-3000.asse.devtunnels.ms", "localhost:3000"],
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;

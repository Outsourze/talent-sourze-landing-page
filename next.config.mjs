/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"], // 👈 allow localhost:4000 images
    // or use remotePatterns if you want more control:
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: "localhost",
    //     port: "4000",
    //     pathname: "/images/**",
    //   },
    // ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'], // Enables SVG imports as React components
    });
    return config;
  },
};

export default nextConfig;

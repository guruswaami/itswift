/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/itswift',
  assetPrefix: '/itswift/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

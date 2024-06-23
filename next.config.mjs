/** @type {import('next').NextConfig} */

import { withContentlayer } from 'next-contentlayer2';

// const withBundleAnalyzer = import('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    minimumCacheTTL: 3600,
  },
};

export default withContentlayer(nextConfig);

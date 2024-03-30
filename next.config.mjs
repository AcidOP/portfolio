/** @type {import('next').NextConfig} */

import analyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = import('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default analyzer(nextConfig);

import { withContentlayer } from 'next-contentlayer2';

// const withBundleAnalyzer = import('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
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
  webpack: config => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
      'supports-color': 'commonjs supports-color',
    });
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
};

export default withContentlayer(nextConfig);

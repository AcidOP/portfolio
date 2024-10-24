import { inter_500 } from '@/components/fonts';

import '@/styles/globals.css';

import Analytics from '@/components/analytics';
import Favicon from '@/components/favicon';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar/Navbar';
import config from '@/data/config';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
  openGraph: {
    url: './',
    title: config.title,
    description: config.description,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
  },
  twitter: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? '',
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: config.title,
      },
    ],
  },
  alternates: { canonical: './' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='scroll-pt-20 lg:scroll-pt-28'>
      <head>
        <Favicon />
        <Analytics />
      </head>

      <body>
        <Navbar />
        <div className={inter_500.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

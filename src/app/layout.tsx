import { inter_500 } from '@/components/fonts';

import './globals.css';

import Analytics from '@/components/analytics';
import Favicon from '@/components/favicon';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import config from '@/data/config';
import { cn } from '@/utils/cn';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <Favicon />
        <Analytics />
      </head>

      <body
        className={cn(
          'mx-auto overflow-x-hidden px-6 lg:max-w-[calc(100vw-8rem)] lg:px-0',
          inter_500.className,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

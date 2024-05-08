import { inter_500 } from '@/components/fonts';

import './globals.css';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import config from '@/data/config';
import { cn } from '@/utils/cn';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          defer
          src='https://eu.umami.is/script.js'
          data-website-id='250028b4-b3d2-4b39-8140-57b7cc9edb1b'
        />
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

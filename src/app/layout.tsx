import './globals.css';

import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

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
      <body
        className={cn(
          'mx-auto overflow-x-hidden px-6 lg:max-w-[calc(100vw-8rem)] lg:px-0',
          inter.className,
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

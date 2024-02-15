import './globals.css';

import Navbar from '@/components/Navbar/Navbar';
import config from '@/data/config.json';

import clsx from 'clsx';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          'mx-auto max-w-[calc(100vw-2.5rem)] overflow-x-hidden lg:max-w-[calc(100vw-8rem)]',
          inter.className,
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

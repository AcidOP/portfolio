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
      <body className={clsx('max-w-[calc(100vw-2.5rem)] lg:max-w-[calc(100vw-8rem)] mx-auto overflow-x-hidden', inter.className)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import './globals.css';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import config from '@/data/config';

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

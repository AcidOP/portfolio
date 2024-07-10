'use client';

import { useEffect } from 'react';

import links from '../navlinks';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MobileNavbarProps {
  toggle: () => void;
}

const MobileNavbar = ({ toggle }: MobileNavbarProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '200%' }}
      className='absolute left-0 top-20 flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-3 bg-black text-3xl font-medium text-white opacity-90 backdrop-blur-sm'
    >
      {links.map(link => (
        <Link key={link.url} href={link.url} onClick={toggle}>
          {link.text}
        </Link>
      ))}
    </motion.div>
  );
};

export default MobileNavbar;

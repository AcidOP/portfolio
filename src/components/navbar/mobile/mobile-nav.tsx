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
    <motion.nav
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '250%', opacity: 0 }}
      className='absolute left-0 top-20 flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-5 bg-black text-3xl font-black text-white'
    >
      {links.map(link => (
        <Link key={link.url} href={link.url} onClick={toggle}>
          {link.text}
        </Link>
      ))}
    </motion.nav>
  );
};

export default MobileNavbar;

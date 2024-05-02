'use client';

import { FC, useEffect } from 'react';

import links from '../navlinks';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface MobileNavbarProps {
  toggle: () => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ toggle }) => {
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
      className='absolute left-0 top-20 z-50 grid h-[calc(100vh-5rem)] w-screen place-content-center bg-black text-white opacity-90 backdrop-blur-sm'
    >
      <div>
        <ul className='space-y-6 text-4xl font-bold' onClick={toggle}>
          {links.map(link => (
            <li key={link.url}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileNavbar;

'use client';

import { cn } from '@/utils/cn';

import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerButton = ({ isOpen, toggle }: HamburgerProps) => {
  const Icon = isOpen ? IoMdClose : IoMenu;

  return (
    <motion.button
      initial={false}
      onClick={toggle}
      className={cn(
        'relative rounded-full text-4xl transition-all duration-200 lg:bg-violet-200 lg:p-2 lg:text-2xl',
        isOpen && 'lg:bg-violet-600 lg:text-white',
      )}
      aria-label='Toggle menu'
    >
      <Icon />
    </motion.button>
  );
};

export default HamburgerButton;

'use client';

import { useState } from 'react';

import Hamburger from '../Hamburger';
import links from '../navlinks';
import Menu from './menu';

import { cn } from '@/utils/cn';

import { AnimatePresence } from 'framer-motion';

interface IProps {
  className?: string;
}

const DropdownMenu = ({ className }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const dropdownLinks = links.filter(({ dropdown }) => dropdown);

  return (
    <div className={cn('relative', className)}>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <AnimatePresence>
        {isOpen && <Menu links={dropdownLinks} toggle={toggle} />}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;

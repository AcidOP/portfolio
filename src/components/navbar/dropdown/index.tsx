'use client';

import { useState } from 'react';

import Hamburger from '../Hamburger';
import links from '../navlinks';
import Menu from './menu';

import useClickOutside from '@/hooks/use-click-outside';
import { cn } from '@/utils/cn';

import { AnimatePresence } from 'framer-motion';

interface IProps {
  className?: string;
}

const DropdownMenu = ({ className }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const ref = useClickOutside(close);

  const handleClick = () => {
    setIsOpen(value => !value);
  };

  const dropdownLinks = links.filter(({ dropdown }) => dropdown);

  return (
    <div className={cn('relative', className)} ref={ref}>
      <Hamburger isOpen={isOpen} toggle={handleClick} />
      <AnimatePresence>
        {isOpen && <Menu links={dropdownLinks} toggle={close} />}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;

'use client';

import { useState } from 'react';

import Hamburger from '../hamburger';
import links from '../navlinks';
import Menu from './menu';

import { AnimatePresence } from 'framer-motion';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const dropdownLinks = links.filter(({ dropdown }) => dropdown);

  return (
    <div className='relative'>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <AnimatePresence>
        {isOpen && <Menu links={dropdownLinks} toggle={toggle} />}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;

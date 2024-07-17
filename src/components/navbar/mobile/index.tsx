'use client';

import { useState } from 'react';

import Hamburger from '../Hamburger';
import MobileNavbar from './mobile-nav';

import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='lg:hidden'>
      <Hamburger isOpen={isOpen} toggle={toggle} />
      <AnimatePresence mode='sync'>
        {isOpen && <MobileNavbar toggle={toggle} />}
      </AnimatePresence>
    </div>
  );
};

export default Index;

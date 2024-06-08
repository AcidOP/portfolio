'use client';

import { useState } from 'react';

import Hamburger from '../hamburger';
import MobileNavbar from './mobile-nav';

import { AnimatePresence } from 'framer-motion';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <AnimatePresence>
        <Hamburger isOpen={isOpen} toggle={toggle} />
        {isOpen && <MobileNavbar toggle={toggle} />}
      </AnimatePresence>
    </>
  );
};

export default Index;

'use client';

import { useState } from 'react';

import Navbar from './Navbar';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Index = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious() as number;
    latest > previous && latest > 150 ? setHidden(true) : setHidden(false);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: '-100%', opacity: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      className='sticky top-0 z-50 h-20 w-full bg-white'
    >
      <Navbar />
    </motion.nav>
  );
};

export default Index;

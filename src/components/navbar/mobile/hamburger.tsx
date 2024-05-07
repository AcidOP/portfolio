'use client';

import { FC } from 'react';

import { motion, MotionConfig } from 'framer-motion';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const AnimatedHamburgerButton: FC<HamburgerProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        onClick={toggle}
        className='relative h-20 w-10'
        aria-label='Toggle menu'
      >
        <motion.span
          variants={VARIANTS.top}
          className='absolute h-1 w-10 bg-black/60'
          style={{ y: '50%', left: '50%', x: '-50%', top: '50%' }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className='absolute h-1 w-10 bg-black/60'
          style={{ left: '50%', x: '-50%', top: '50%', y: '50%' }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ['0deg', '0deg', '45deg'],
      top: ['35%', '50%', '50%'],
    },
    closed: {
      rotate: ['45deg', '0deg', '0deg'],
      top: ['50%', '50%', '35%'],
    },
  },
  middle: {
    open: {
      rotate: ['0deg', '0deg', '-45deg'],
    },
    closed: {
      rotate: ['-45deg', '0deg', '0deg'],
    },
  },
};

export default AnimatedHamburgerButton;

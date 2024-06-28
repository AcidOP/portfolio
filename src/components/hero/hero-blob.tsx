'use client';

import { motion } from 'framer-motion';

const HeroBlob = () => {
  return (
    <motion.div
      initial={{ x: '-200%', scale: '200%', opacity: 1 }}
      animate={{ x: 0, scale: '100%', opacity: 0.5 }}
      transition={{ duration: 1, ease: 'backInOut' }}
      className='absolute top-0 -z-10 h-full w-full'
    >
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[20%] rounded-full bg-violet-500 blur-3xl' />
    </motion.div>
  );
};

export default HeroBlob;

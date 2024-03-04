'use client';

import { FC, ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.75,
        }}
        className='base-page-size'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Template;

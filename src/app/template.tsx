'use client';

import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.75,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Template;

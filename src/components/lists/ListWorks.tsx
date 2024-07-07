'use client';

import WorkCard from '../cards/WorkCard';

import { motion } from 'framer-motion';

import type { Work } from 'contentlayer/generated';

const ListWorks = ({ works }: { works: Work[] }) => {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      {works.map((work, index) => {
        return (
          <motion.div
            initial={{ x: '100%', scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            key={work.url}
          >
            <WorkCard {...work} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ListWorks;

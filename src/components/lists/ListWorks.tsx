'use client';

import WorkCard from '../cards/WorkCard';

import { Work } from 'contentlayer/generated';
import { motion } from 'framer-motion';

interface IProps {
  works: Work[];
}

const ListWorks = ({ works }: IProps) => {
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

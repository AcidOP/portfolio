'use client';

import { cn } from '@/utils/cn';

import { motion } from 'framer-motion';

interface IProps {
  text: string | string[];
  duration?: number;
  className?: string;
}

interface BlockProps {
  line: string[];
  duration: number;
}

const Block = ({ line, duration }: BlockProps) => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: '-100%' }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      className='flex flex-shrink-0'
    >
      {line.map((item, index) => (
        <span key={index} className='mx-10 w-full max-w-xl'>
          {item}
        </span>
      ))}
    </motion.div>
  );
};

const MarqueeText = ({ text, duration = 30, className }: IProps) => {
  const toArray = Array.isArray(text) ? text : [text];
  const line = Array(10)
    .fill(null)
    .flatMap(() => toArray);

  const dotted = line.flatMap(item => [item, '●']);

  typeof text === 'string' ? (duration = 12) : null;

  return (
    <div
      className={cn(
        'flex items-center justify-between border-y-4 border-black bg-violet-700 py-4 uppercase text-white shadow-2xl lg:text-5xl',
        className,
      )}
    >
      <Block line={dotted} duration={duration} />
      <Block line={dotted} duration={duration} />
    </div>
  );
};

export default MarqueeText;

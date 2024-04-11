'use client';

import { BackgroundBeams } from './backgound';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { motion } from 'framer-motion';
import { Inter, Suez_One } from 'next/font/google';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const Hero = () => {
  return (
    <div className='flex h-[70vh] w-full items-center justify-center lg:h-[calc(100vh-5rem)]'>
      <motion.div className='absolute top-0 -z-10 h-full w-full'>
        <div className='absolute bottom-auto left-auto right-0 top-0 h-[600px] w-[600px] -translate-x-[20%] translate-y-[20%] rounded-full bg-violet-400 opacity-50 blur-[90px]' />
      </motion.div>

      <div className='relative flex h-[32vh] w-full flex-col justify-between lg:h-1/2 lg:px-5'>
        <div className={cn('text-6xl lg:text-[7rem]', heading.className)}>
          <h1>
            <span className='text-4xl font-medium opacity-90 lg:text-7xl'>
              Hello 👋🏻
            </span>
            <br />{' '}
            <span className={cn('text-nowrap', heading.className)}>
              I&apos;m {config.name.split(/ /g)[0]}
            </span>
          </h1>
        </div>

        <div
          className={cn(
            'absolute bottom-0 right-0 max-w-[80%] indent-8 text-xl opacity-75 lg:max-w-3xl lg:text-4xl',
            body.className,
          )}
        >
          <p>— {config.hero}</p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;

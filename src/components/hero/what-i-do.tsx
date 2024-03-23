import Heading from '../heading';
import StackedCard from './stacked-card';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Inter } from 'next/font/google';

const body = Inter({ subsets: ['latin'], weight: '700' });

const WhatIDo = () => {
  const { skills } = config;
  return (
    <div className='mb-36'>
      <div className='flex flex-col justify-between pb-12 lg:flex-row'>
        <Heading text='What I Do.' />

        <h3
          className={cn(
            'mt-7 text-xl opacity-60 lg:mt-0 lg:max-w-2xl lg:text-3xl',
            body.className,
          )}
        >
          My obsession is to deliver a digital experience that not only
          serves a great purpose, but give your business an unfair
          advantage.
        </h3>
      </div>

      <div className='space-y-24'>
        {skills.map((skill, index) => (
          <StackedCard key={index} index={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;

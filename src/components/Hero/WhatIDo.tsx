import StackedCard from './StackedCard';

import config from '@/data/config';

import clsx from 'clsx';
import { Inter, Suez_One } from 'next/font/google';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const WhatIDo = () => {
  const { skills } = config;
  return (
    <div className='mb-36'>
      <div className='flex flex-col justify-between pb-12 lg:flex-row'>
        <h1
          className={clsx(
            'text-7xl font-black lg:text-8xl',
            heading.className,
          )}
        >
          WHAT I DO.
        </h1>

        <h3
          className={clsx(
            'mt-6 text-xl opacity-60 lg:mt-0 lg:max-w-2xl lg:text-3xl',
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

import clsx from 'clsx';
import { Inter, Suez_One } from 'next/font/google';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const WhatIDo = () => {
  return (
    <div className='mb-24'>
      <div className='flex justify-between'>
        <h1 className={clsx('text-8xl font-black', heading.className)}>
          WHAT I DO.
        </h1>

        <h3
          className={clsx('max-w-2xl text-4xl opacity-75', body.className)}
        >
          My obsession is to deliver a digital experience that not only
          serves a great purpose, but give your business an unfair
          advantage.
        </h3>
      </div>
    </div>
  );
};

export default WhatIDo;

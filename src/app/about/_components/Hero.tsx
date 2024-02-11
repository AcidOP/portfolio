import { FC } from 'react';

import clsx from 'clsx';
import { Suez_One } from 'next/font/google';

const body = Suez_One({ subsets: ['latin'], weight: '400' });

const Hero: FC = () => {
  return (
    <div
      className={clsx(
        'flex h-[80vh] items-center justify-center',
        body.className,
      )}
    >
      <p className='max-w-4xl text-center text-4xl lg:text-6xl'>
        This is Zeeshan, a product designer based in Egypt, focused on
        creating.
      </p>
    </div>
  );
};

export default Hero;

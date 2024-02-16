import config from '@/data/config';

import clsx from 'clsx';
import { Inter } from 'next/font/google';

const heading = Inter({ subsets: ['latin'], weight: '800' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const Homepage = () => {
  return (
    <div className='flex h-[70vh] w-full items-center justify-center lg:h-[calc(100vh-5rem)]'>
      <div className='absolute top-0 -z-10 h-full w-full bg-white'>
        <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-violet-400 opacity-50 blur-[80px]' />
      </div>

      <div className='relative flex h-[32vh] w-full flex-col justify-between px-5 lg:h-1/2 lg:w-5/6'>
        <div className={clsx('text-6xl lg:text-8xl', heading.className)}>
          <h1>
            <span className='text-5xl opacity-90 lg:text-7xl'>Hello,</span>
            <br /> I&apos;m {config.name.split(/ /g)[0]}
          </h1>
        </div>

        <div
          className={clsx(
            'absolute bottom-0 right-0 max-w-[75%] text-xl opacity-75 lg:max-w-3xl lg:text-4xl',
            body.className,
          )}
        >
          <p>— {config.hero}</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

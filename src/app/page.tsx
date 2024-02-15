import config from '@/data/config.json';

import clsx from 'clsx';
import { Inter } from 'next/font/google';

const heading = Inter({ subsets: ['latin'], weight: '800' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const Homepage = () => {
  return (
    <div className='flex h-[80vh] w-screen items-center lg:h-screen'>
      <div className='relative mx-auto flex h-[30vh] w-full flex-col justify-between px-5 lg:h-2/5 lg:w-3/4'>
        <div className={clsx('text-6xl lg:text-8xl', heading.className)}>
          <h1>
            Hey,
            <span className='text-5xl opacity-90 lg:text-7xl'>Hey,</span>
            <br /> I&apos;m {config.name.split(/ /g)[0]}
          </h1>
        </div>

        <div
          className={clsx(
            'absolute bottom-0 right-5 max-w-[75%] text-lg opacity-75 lg:right-0 lg:max-w-3xl lg:text-4xl',
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

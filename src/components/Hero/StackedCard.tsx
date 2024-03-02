import { FC } from 'react';

import clsx from 'clsx';
import { Inter, Suez_One } from 'next/font/google';
import Image from 'next/image';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const body = Inter({ subsets: ['latin'], weight: '600' });
const workBody = Inter({ subsets: ['latin'], weight: '900' });

interface StackedCardProps {
  image?: string;
  index: number;
  title: string;
  description: string;
  works: string[];
}

const StackedCard: FC<StackedCardProps> = ({
  index,
  description,
  title,
  works,
}) => {
  return (
    <div
      style={{ top: `calc(5rem + ${index * 5}rem)` }}
      className='sticky top-20 -z-10 mb-16 flex h-96 w-full justify-between border-t-2 border-black/20 bg-white'
    >
      <div className='w-1/2 pt-6'>
        <h1
          className={clsx('pb-6 text-7xl opacity-90', heading.className)}
        >
          {title}
        </h1>
        <h3
          className={clsx(
            'max-w-xl text-xl opacity-50 lg:text-2xl',
            body.className,
          )}
        >
          — {description}
        </h3>
      </div>

      <div className='relative w-1/2 max-w-2xl pt-6'>
        <ul className='flex w-full flex-col gap-y-3 pt-8 lg:pt-24'>
          {works.map((work, index) => (
            <li
              key={index}
              className={clsx(
                'pb-3 text-5xl font-bold opacity-70',
                workBody.className,
              )}
            >
              {work}
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 right-0 text-[15rem] font-black leading-none text-violet-600 opacity-10'>
          0{index + 1}.
        </div>
      </div>
    </div>
  );
};

export default StackedCard;

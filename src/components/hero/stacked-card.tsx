import { FC } from 'react';

import { cn } from '@/utils/cn';

import { Inter, Suez_One } from 'next/font/google';

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
      style={{ top: `calc(5rem + ${index * 5}rem)`, zIndex: 0 + index }}
      className='sticky flex w-full flex-col justify-between border-t-2 border-black/20 bg-white lg:flex-row'
    >
      <div className='w-full pt-6 lg:w-1/2'>
        <h1
          className={cn(
            'pb-6 text-4xl opacity-90 lg:text-6xl',
            heading.className,
          )}
        >
          {title}
        </h1>
        <h3
          className={cn(
            'max-w-xl pt-6 text-lg opacity-50 lg:text-2xl',
            body.className,
          )}
        >
          {description}
        </h3>
      </div>

      <div className='relative w-full max-w-2xl pt-6 lg:w-1/2'>
        <ul className='flex w-full flex-col lg:gap-y-3 lg:pt-28'>
          {works.map((work, index) => (
            <li
              key={index}
              className={cn(
                'pb-3 text-xl font-bold opacity-70 lg:text-5xl',
                workBody.className,
              )}
            >
              — {work}
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 right-0 text-9xl font-black leading-none text-violet-600 opacity-10 lg:text-[15rem]'>
          0{index + 1}.
        </div>
      </div>
    </div>
  );
};

export default StackedCard;

import { inter_600, inter_900 } from '../fonts';

import { cn } from '@/utils/cn';

import { RoughNotation } from 'react-rough-notation';

interface StackedCardProps {
  image?: string;
  index: number;
  title: string;
  description: string;
  works: string[];
}

const StackedCard = ({
  index,
  description,
  title,
  works,
}: StackedCardProps) => {
  return (
    <div
      style={{ top: `calc(5rem + ${index * 5}rem)`, zIndex: 0 + index }}
      className='sticky w-full border-t-2 border-black/20 bg-white p-3'
    >
      <h3
        className={cn(
          'my-12 text-6xl opacity-80 lg:text-8xl',
          inter_900.className,
        )}
      >
        {title}
      </h3>

      <div className='flex w-full flex-col gap-10 lg:flex-row'>
        <RoughNotation type='box' show>
          <p
            className={cn(
              'w-full p-3 text-lg opacity-60 lg:text-2xl',
              inter_600.className,
            )}
          >
            {description}
          </p>
        </RoughNotation>

        <ul className='relative flex w-full flex-col gap-1 lg:gap-y-3 lg:pl-10'>
          {works.map(work => (
            <li
              key={work}
              className={cn(
                'z-10 text-nowrap pb-3 text-3xl font-bold opacity-70 lg:text-5xl',
                inter_900.className,
              )}
            >
              — {work}
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 right-0 -z-10 text-[10rem] font-black leading-none text-violet-600 opacity-30 blur-sm lg:text-[15rem]'>
          0{index + 1}.
        </div>
      </div>
    </div>
  );
};

export default StackedCard;

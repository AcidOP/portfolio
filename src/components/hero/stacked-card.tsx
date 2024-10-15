import { inter_600, inter_900 } from '../fonts';

import { cn } from '@/utils/cn';

import { RoughNotation } from 'react-rough-notation';

interface StackedCardProps {
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
      style={{ top: `calc(4rem + ${index * 5}rem)`, zIndex: 0 + index }}
      className='sticky w-full border-t-2 border-black/20 bg-white p-3'
    >
      <h3
        className={cn(
          'pb-10 pt-3 text-4xl text-gray-900 sm:text-5xl md:text-7xl lg:text-8xl',
          inter_900.className,
        )}
      >
        {title}
      </h3>

      <div className='flex w-full flex-col justify-between gap-20 xl:flex-row'>
        <div className='w-full xl:w-1/2'>
          <RoughNotation type='box' show>
            <p
              className={cn(
                'p-3 text-lg opacity-60 sm:text-2xl',
                inter_600.className,
              )}
            >
              {description}
            </p>
          </RoughNotation>
        </div>

        <ul className='flex w-full flex-col gap-1 xl:w-1/2 xl:gap-y-3'>
          {works.map(work => (
            <li
              key={work}
              className={cn(
                'z-10 text-nowrap pb-3 text-2xl font-bold opacity-70 sm:text-3xl md:text-5xl',
                inter_900.className,
              )}
            >
              — {work}
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 right-0 -z-10 text-[12rem] font-black leading-none text-violet-600 opacity-30 blur-sm lg:text-[17rem]'>
          0{index + 1}.
        </div>
      </div>
    </div>
  );
};

export default StackedCard;

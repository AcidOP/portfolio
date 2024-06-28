import { inter_600, inter_900, suez_400 } from '../fonts';

import { cn } from '@/utils/cn';

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
      className='sticky flex w-full flex-col justify-between border-t-2 border-black/20 bg-white lg:flex-row'
    >
      <div className='w-full pt-6 lg:w-1/2'>
        <h4
          className={cn(
            'pb-6 text-4xl opacity-90 lg:text-6xl',
            suez_400.className,
          )}
        >
          {title}
        </h4>
        <p
          className={cn(
            'max-w-xl pt-6 text-lg opacity-60 lg:text-2xl',
            inter_600.className,
          )}
        >
          {description}
        </p>
      </div>

      <div className='relative w-full max-w-2xl pt-6 lg:w-1/2'>
        <ul className='flex w-full flex-col lg:gap-y-3 lg:pt-28'>
          {works.map(work => (
            <li
              key={work}
              className={cn(
                'z-10 pb-3 text-xl font-bold opacity-70 lg:text-5xl',
                inter_900.className,
              )}
            >
              — {work}
            </li>
          ))}
        </ul>

        <div className='absolute bottom-0 right-0 -z-10 text-9xl font-black leading-none text-violet-600 opacity-30 blur-sm lg:text-[15rem]'>
          0{index + 1}.
        </div>
      </div>
    </div>
  );
};

export default StackedCard;

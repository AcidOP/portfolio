import { FC } from 'react';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Inter, Suez_One } from 'next/font/google';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const workBody = Inter({ subsets: ['latin'], weight: '500' });

const Testimonials: FC = () => {
  return (
    <div className='mb-24'>
      <h1
        className={cn(
          'sticky top-[5rem] mb-16 items-stretch text-7xl font-black',
          heading.className,
        )}
      >
        DON&apos;T JUST TAKE MY WORD FOR IT.
      </h1>

      <div className='flex flex-col gap-y-10'>
        {config.testimonials.map(testimonial => (
          <div
            key={testimonial.title}
            className='relative sticky top-[5rem] flex flex-col gap-y-6 overflow-hidden rounded-lg bg-violet-100 p-6 lg:p-10 2xl:gap-y-10'
          >
            <p
              className={cn(
                'max-w-2xl text-xl opacity-70 lg:text-3xl',
                workBody.className,
              )}
            >
              <span className='text-2xl opacity-90 lg:text-4xl'>
                &#8220;
              </span>
              {testimonial.content}
              <span className='text-2xl opacity-90 lg:text-4xl'>
                &#8221;
              </span>
            </p>

            <div className='flex items-center space-x-6'>
              <div className='h-16 w-16 rounded-full bg-violet-600' />

              <div>
                <h3 className='text-xl font-medium opacity-70 lg:text-2xl'>
                  {testimonial.name}
                </h3>
                <p
                  className={cn(
                    'opacity-60 lg:text-lg',
                    workBody.className,
                  )}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>

            <div className='absolute right-0 h-[700px] w-[700px] translate-x-1/3 rounded-full bg-violet-600 opacity-10' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

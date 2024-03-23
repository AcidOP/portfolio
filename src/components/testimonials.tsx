import { FC } from 'react';

import Heading from './heading';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Inter } from 'next/font/google';
import Image from 'next/image';

const workBody = Inter({ subsets: ['latin'], weight: '400' });

const Testimonials: FC = () => {
  return (
    <div className='mb-24'>
      <Heading
        text="DON'T JUST TAKE MY WORD FOR IT."
        className='mb-16 items-stretch text-7xl'
      />

      <div className='flex flex-col gap-y-10'>
        {config.testimonials.map(testimonial => (
          <div
            key={testimonial.title}
            className='sticky top-[5rem] flex flex-col gap-y-6 overflow-hidden rounded-lg bg-violet-700 p-6 lg:p-10 2xl:gap-y-10'
          >
            <p
              className={cn(
                'max-w-2xl text-white lg:text-3xl',
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
              <Image
                src='/testimonials/julie-pattyn.jpg'
                width={70}
                height={70}
                alt={testimonial.name}
                className='rounded-full border-2 border-white shadow-2xl'
              />

              <div>
                <h3 className='text-xl font-medium text-white opacity-80 lg:text-2xl'>
                  {testimonial.name}
                </h3>
                <p
                  className={cn(
                    'text-white opacity-80 lg:text-lg',
                    workBody.className,
                  )}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>

            <div className='absolute right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-violet-300 opacity-10' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

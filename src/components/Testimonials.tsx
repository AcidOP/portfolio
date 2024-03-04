import { FC } from 'react';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Inter, Suez_One } from 'next/font/google';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });
const workBody = Inter({ subsets: ['latin'], weight: '500' });

const Testimonials: FC = () => {
  return (
    <div className='mb-[200vh]'>
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
            <p className={cn('text-xl lg:text-3xl opacity-70 max-w-2xl', workBody.className)}>
              <span className='text-2xl lg:text-4xl opacity-90'>&#8220;</span>
              {testimonial.content}
              <span className='text-2xl lg:text-4xl opacity-90'>&#8221;</span>
            </p>

            <div className='flex items-center space-x-6'>
              <div className='w-16 h-16 bg-violet-600 rounded-full' />

              <div>
                <h3
                  className='text-xl lg:text-2xl font-medium opacity-70'
                >
                  {testimonial.name}
                </h3>
                <p
                  className={cn(
                    'lg:text-lg opacity-60',
                    workBody.className,
                  )}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>

            <div className='absolute right-0 translate-x-1/3 w-[700px] h-[700px] bg-violet-600 opacity-10 rounded-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

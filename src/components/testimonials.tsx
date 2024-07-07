import { inter_400 } from './fonts';
import Heading from './heading';
import { ScreenFitText } from './ScreenFitText';

import testimonials from '@/data/testimonials';
import { cn } from '@/utils/cn';

import Image from 'next/image';

const Testimonials = () => {
  return (
    <div>
      <Heading
        text='HEAR WHAT PEOPLE SAY ABOUT ME.'
        className='mb-16 hidden text-center text-7xl lg:block'
      />

      <div className='lg:hidden'>
        <ScreenFitText text='HEAR' />
        <ScreenFitText text='WHAT PEOPLE' />
        <ScreenFitText text='SAY ABOUT ME.' />
      </div>

      <div className='mt-10 flex flex-col gap-y-6'>
        {testimonials.map(testimonial => (
          <div
            key={testimonial.title}
            className='sticky top-[5rem] flex flex-col gap-y-6 overflow-hidden rounded-lg border-2 border-black bg-violet-600 p-6 lg:p-10 2xl:gap-y-10'
          >
            <p
              className={cn(
                'max-w-2xl text-white lg:text-3xl',
                inter_400.className,
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
                src={testimonial.image}
                width={70}
                height={70}
                alt={testimonial.name}
                className='rounded-full border-2 border-white shadow-2xl'
              />

              <div>
                <p className='text-xl font-medium text-white lg:text-2xl'>
                  {testimonial.name}
                </p>
                <p
                  className={cn(
                    'text-white opacity-80 lg:text-lg',
                    inter_400.className,
                  )}
                >
                  {testimonial.title}
                </p>
              </div>
            </div>

            <div className='absolute right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-violet-300 opacity-20' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

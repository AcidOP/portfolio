import TimeDisplay from './TimeDisplay';

import { ScreenFitText } from '@/components/ScreenFitText';
import config from '@/data/config';

import moment from 'moment-timezone';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const Hero = () => {
  const timezone = config.timezone;
  const isValidTimezone = moment.tz.zone(timezone as string) !== null;

  return (
    <>
      <div className='my-16'>
        <ScreenFitText text='More' className='lg:hidden' />
        <ScreenFitText text='About Me' />
      </div>

      <div className='mx-auto grid max-w-xl gap-2 lg:max-w-none lg:grid-cols-5'>
        <section className='pb-16 pt-8 text-4xl font-medium lg:col-span-2 lg:py-0 lg:text-5xl'>
          <p>What do I work on?</p>
          <p className='mt-2'>How I got here?</p>
          <p className='mt-2'>My hobbies?</p>

          <p className='my-8 text-white lg:my-16'>
            <a href='#about'>
              <RoughNotation
                type='highlight'
                color='#6d28d9'
                animationDelay={500}
                show
              >
                Let&apos;s find out &darr;
              </RoughNotation>
            </a>
          </p>
        </section>

        <section className='relative h-64 border-2 border-black drop-shadow-2xl transition-all duration-200 md:h-80 lg:col-span-3 lg:h-[30rem] lg:grayscale lg:hover:grayscale-0'>
          <Image
            src='/images/me.jpg'
            fill
            alt='Author image'
            className='-z-10 object-cover'
          />
        </section>

        <section className='hidden text-2xl font-medium opacity-70 lg:col-span-2 lg:block'>
          {isValidTimezone && (
            <TimeDisplay timezone={timezone as string} />
          )}
        </section>

        <section className='text-sm opacity-70 lg:col-span-3 lg:text-2xl'>
          <p>&rarr; A mirror selfie in January 2024</p>
        </section>
      </div>
    </>
  );
};

export default Hero;

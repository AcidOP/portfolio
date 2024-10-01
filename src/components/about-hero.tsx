import { ScreenFitText } from '@/components/screen-fit-text';
import TimeDisplay from '@/components/time-display';
import config from '@/data/config';

import moment from 'moment-timezone';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const Hero = () => {
  const timezone = config.timezone;
  const isValidTimezone = moment.tz.zone(timezone ?? '') !== null;

  return (
    <>
      <div className='mb-16'>
        <ScreenFitText text='More' className='lg:hidden' />
        <ScreenFitText text='About Me' />
      </div>

      <div className='mx-auto grid max-w-xl gap-2 lg:max-w-none lg:grid-cols-5'>
        <section className='pb-16 pt-8 text-4xl font-medium lg:col-span-2 lg:py-0 lg:text-5xl'>
          <div className='space-y-2 font-medium'>
            <p>Who TF am I?</p>
            <p>How I got here?</p>
            <p>My hobbies?</p>
          </div>

          <p className='my-8 w-min text-nowrap text-white lg:my-16'>
            <RoughNotation
              type='highlight'
              color='#6d28d9'
              animationDelay={500}
              show
            >
              <span className='px-3'>Let&apos;s find out &darr;</span>
            </RoughNotation>
          </p>
        </section>

        <section className='relative h-64 border-2 border-black drop-shadow-2xl grayscale transition-all duration-200 md:h-80 lg:col-span-3 lg:h-[30rem]'>
          <Image
            src='/images/me.jpg'
            fill
            alt='Author image'
            className='-z-10 object-cover'
          />
        </section>

        <section className='hidden text-2xl font-medium opacity-70 lg:col-span-2 lg:block'>
          {isValidTimezone && <TimeDisplay timezone={timezone ?? ''} />}
        </section>

        <section className='text-sm opacity-70 lg:col-span-3 lg:text-2xl'>
          &rarr; A mirror selfie in January 2024
        </section>

        <hr className='col-span-5 mt-16' />
      </div>
    </>
  );
};

export default Hero;

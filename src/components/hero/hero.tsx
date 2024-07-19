import { inter_700, inter_900 } from '../fonts';
import MarqueeText from '../MarqueeText';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import dynamic from 'next/dynamic';

const Hero = () => {
  const HeroBlob = dynamic(() => import('./hero-blob'));

  return (
    <>
      <div className='flex h-[70vh] w-full items-center justify-center lg:h-[100vh]'>
        <HeroBlob />

        <div className='relative flex h-[32vh] w-full flex-col place-items-baseline justify-between lg:h-1/2'>
          <div>
            <h1
              className={cn(
                'text-5xl opacity-75 lg:text-[5rem]',
                inter_700.className,
              )}
            >
              Hello,
            </h1>
            <h1
              className={cn(
                'text-6xl lg:text-[7rem]',
                inter_900.className,
              )}
            >
              I&rsquo;m {config.name}.
            </h1>
          </div>

          <p
            className={cn(
              'absolute bottom-0 right-0 w-full indent-8 text-xl opacity-75 sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:text-4xl',
              inter_700.className,
            )}
          >
            — a hybrid developer and designer nudging early-stage startups
            and teams into greatness.
          </p>
        </div>
      </div>
      <MarqueeText
        text={['React Developer', 'Web Design', 'SEO']}
        className='full-width my-10 lg:my-24'
      />
    </>
  );
};

export default Hero;

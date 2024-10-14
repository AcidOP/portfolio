import Container from '../container';
import { inter_700, inter_900 } from '../fonts';
import MarqueeText from '../marquee-text';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import dynamic from 'next/dynamic';

const Hero = () => {
  const HeroBlob = dynamic(() => import('./hero-blob'));

  return (
    <>
      <Container className='flex h-[70vh] w-full items-center justify-center lg:h-[100vh]'>
        <HeroBlob />

        <div className='w-full space-y-10 py-16'>
          <div>
            <h2
              className={cn(
                'text-5xl opacity-75 md:text-6xl lg:text-7xl',
                inter_700.className,
              )}
            >
              Hello,
            </h2>
            <h1
              className={cn(
                'text-6xl md:text-7xl lg:text-8xl',
                inter_900.className,
              )}
            >
              I&rsquo;m {config.name}.
            </h1>
          </div>

          <div
            className={cn(
              'ml-auto w-full indent-8 text-xl opacity-75 sm:max-w-md md:max-w-2xl lg:max-w-3xl lg:text-4xl',
              inter_700.className,
            )}
          >
            — a hybrid developer and designer nudging early-stage startups
            and teams into greatness.
          </div>
        </div>
      </Container>

      <MarqueeText
        text={['React Developer', 'Web Design', 'SEO']}
        className='my-10 lg:my-24'
      />
    </>
  );
};

export default Hero;

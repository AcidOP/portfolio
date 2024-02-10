import clsx from 'clsx';
import { Inter } from 'next/font/google';

const heading = Inter({ subsets: ['latin'], weight: '800' });
const body = Inter({ subsets: ['latin'], weight: '700' });

const Homepage = () => {
  return (
    <div className='h-[80vh] lg:h-screen w-screen flex items-center'>
      <div className='relative h-[35vh] w-full px-5 lg:h-1/2 lg:w-3/4 mx-auto flex flex-col justify-between'>
        <div className={clsx('text-6xl lg:text-8xl', heading.className)}>
          <h1>
            Hey,
            <br /> I&apos;m AcidOP
          </h1>
        </div>

        <div
          className={clsx(
            'absolute bottom-0 right-5 lg:right-0 text-xl lg:text-4xl opacity-85 max-w-[75%] lg:max-w-3xl',
            body.className,
          )}
        >
          <p>
            — a hybrid developer and designer nudging early-stage startups and
            teams into greatness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

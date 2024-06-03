import image404 from '@/../public/images/404/404.svg';
import { suez_400 } from '@/components/fonts';
import { cn } from '@/utils/cn';

import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='grid h-[130vh] place-content-center'>
      <div className='absolute left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] rounded-full bg-violet-600 blur-[100px] lg:h-[1150px] lg:w-[1150px]' />

      <Image
        src={image404}
        alt='404'
        className='absolute left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] rounded-full lg:h-[600px] lg:w-[600px] animate-pulse'
      />

      <div>
        <h1
          className={cn(
            'mb-3 text-6xl drop-shadow-2xl lg:text-9xl lg:text-white',
            suez_400.className,
          )}
        >
          Lost in space?
        </h1>

        <Link
          href='/'
          className='group relative mx-auto grid w-min place-content-center overflow-hidden overflow-x-hidden border-2 border-black bg-violet-700 lg:bg-black px-10 py-4 text-white lg:mt-6'
        >
          <span
            className={cn(
              'relative z-10 text-nowrap text-3xl font-medium text-white transition-all duration-300 group-hover:text-black lg:text-6xl',
              suez_400.className,
            )}
          >
            Come home.
          </span>
          <span className='absolute inset-0 overflow-hidden'>
            <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-white transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150'></span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import image404 from '@/../public/images/404/404.svg';
import { cn } from '@/utils/cn';

import Image from 'next/image';
import Link from 'next/link';

import { Suez_One } from 'next/font/google';
const suez = Suez_One({ subsets: ['latin'], weight: '400' });

const NotFound = () => {
  return (
    <div className='grid place-content-center h-[130vh]'>
      <div className='absolute left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] rounded-full bg-violet-600 blur-[100px] lg:h-[800px] lg:w-[800px]' />

      <Image src={image404} alt='404' className='absolute left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-[20%] rounded-full lg:h-[600px] lg:w-[600px]' />

      <div>
        <h1 className={cn('text-6xl lg:text-9xl mb-3 lg:text-white drop-shadow-lg', suez.className)}>Lost in space?</h1>

        <Link
          href='/'
          className='group relative grid w-min lg:mt-6 place-content-center overflow-hidden overflow-x-hidden border-2 border-black bg-black text-white mx-auto px-10 py-4'
        >
          <span
            className={cn(
              'relative z-10 text-nowrap text-3xl font-medium text-white group-hover:text-black transition-all duration-300 lg:text-6xl',
              suez.className,
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

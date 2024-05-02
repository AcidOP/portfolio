import { FC } from 'react';

import { suez_400 } from '../fonts';

import { cn } from '@/utils/cn';

import Link from 'next/link';

const ContactLink: FC = () => {
  return (
    <div className='mx-auto w-min'>
      <h1
        className={cn(
          'relative text-nowrap text-center text-5xl leading-[80%] after:absolute after:-bottom-2 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-600 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 lg:text-[12rem]',
          suez_400.className,
        )}
      >
        <Link href='/contact' className='opacity-85'>
          Get In Touch
        </Link>
      </h1>

      <p className='mt-3 text-center text-lg font-medium opacity-55 lg:text-[1.5rem]'>
        Have a question or want to work together?
      </p>
    </div>
  );
};

export default ContactLink;

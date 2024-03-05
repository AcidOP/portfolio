import { FC } from 'react';

import { cn } from '@/utils/cn';

import { Suez_One } from 'next/font/google';
import Link from 'next/link';

const heading = Suez_One({ subsets: ['latin'], weight: ['400'] });

const ContactLink: FC = () => {
  return (
    <div className='mx-auto w-min'>
      <h1
        className={cn(
          'relative text-nowrap text-center text-7xl leading-[80%] after:absolute after:-bottom-2 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-600 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 lg:text-[12rem]',
          heading.className,
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

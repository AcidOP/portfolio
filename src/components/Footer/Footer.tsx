import { FC } from 'react';

import ContactLink from './ContactLink';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import { Suez_One } from 'next/font/google';
import Link from 'next/link';
import Newsletter from '../Newsletter';

const heading = Suez_One({ subsets: ['latin'], weight: ['400'] });

const Footer: FC = () => {
  return (
    <footer className='my-24'>
      <ContactLink />

      <div className='my-24 flex flex-col lg:flex-row'>
        <div className='max-w-md'>
          <h1 className={cn('text-3xl font-bold mb-6', heading.className)}>Newsletter</h1>
          <Newsletter />
        </div>

        <div className='w-full lg:w-1/2 mx-auto mt-16 lg:mt-0 flex justify-between'>
          <div>
            <h2 className={cn('text-xl', heading.className)}>Navigation</h2>

            <ul className='space-y-2 mt-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/blogs'>Blogs</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={cn('text-xl', heading.className)}>Socials</h2>

            <ul className='space-y-2 mt-6'>
              {
                config.socials.map(social => (
                  <li key={social.name}>
                    <Link href={social.url} className='capitalize'>{social.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h2 className={cn('text-xl', heading.className)}>Misc</h2>

            <ul className='space-y-2 mt-6'>
              <li>
                <Link href='/privacy-policy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms-and-conditions'>Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className='text-center'>
        <p className='my-6 text-[7rem] font-black leading-[60%] opacity-85'>
          © {new Date().getFullYear()}
        </p>

        <h3 className={cn('text-9xl font-black leading-[70%] opacity-85', heading.className)}>
          {config.name}.
        </h3>
      </div>

    </footer>
  );
};

export default Footer;

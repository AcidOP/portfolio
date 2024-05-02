import { FC } from 'react';

import { suez_400 } from '../fonts';
import links from '../navbar/navlinks';
import Newsletter from '../newsletter';
import ContactLink from './contact-link';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import Link from 'next/link';

const Footer: FC = () => {
  return (
    <>
      <footer className='relative my-24'>
        <ContactLink />

        {/* ERROR: Causes an overflow idk why */}

        {/* <div className='absolute inset-0 -z-10 h-[550px] w-[550px] rounded-full bg-violet-500 opacity-40 blur-[64px] overflow-x-hidden' /> */}

        <div className='my-24 flex flex-col lg:flex-row'>
          <div className='max-w-md'>
            <h1
              className={cn('mb-6 text-3xl font-bold', suez_400.className)}
            >
              Newsletter 📰
            </h1>
            <Newsletter />
          </div>

          <div className='mx-auto mt-16 flex w-full justify-between lg:mt-0 lg:w-1/2'>
            <div className='w-full'>
              <h2 className={cn('text-xl', suez_400.className)}>
                Navigation
              </h2>

              <hr className='my-6 w-[80%] border border-gray-300' />

              <ul className='mt-6 space-y-2'>
                {links.map(link => (
                  <li key={link.url}>
                    <Link href={link.url} className='capitalize'>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full'>
              <h2 className={cn('text-xl', suez_400.className)}>
                Socials
              </h2>

              <hr className='my-6 w-[80%] border border-gray-300' />

              <ul className='mt-6 space-y-2'>
                {config.socials.map(social => (
                  <li key={social.name}>
                    <Link href={social.url} className='capitalize'>
                      {social.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full'>
              <h2 className={cn('text-xl', suez_400.className)}>Misc</h2>

              <hr className='my-6 w-[80%] border border-gray-300' />

              <ul className='mt-6 space-y-2'>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/terms-and-conditions'>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-center'>
          <p className='my-6 text-6xl font-black leading-[0%] opacity-85 lg:text-[7rem] lg:leading-[30%]'>
            © {new Date().getFullYear()}
          </p>

          <h3
            className={cn(
              'text-8xl font-black opacity-85 lg:text-[17rem]',
              suez_400.className,
            )}
          >
            {config.name}.
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;

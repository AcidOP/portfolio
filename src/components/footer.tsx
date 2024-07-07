import { suez_400 } from './fonts';
// import allLinks from '../navbar/navlinks';
import Newsletter from './newsletter/newsletter';
import { ScreenFitText } from './ScreenFitText';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import NextLink from 'next/link';

// import type Link from '@/types/NavLink';

const Footer = () => {
  // const navLinks: Link[] = allLinks.filter(link => !link.dropdown);
  // const miscLinks: Link[] = allLinks.filter(link => link.dropdown);

  return (
    <footer className='mt-24'>
      <ScreenFitText
        text='Have a question or want to work together?'
        className='opacity-60'
      />
      <ScreenFitText
        text='Get in touch'
        href='/contact'
        className='opacity-80'
      />

      {/* FIX: Causes horizontal overflow  */}
      {/* <div className='absolute inset-0 -z-10 h-[550px] w-[550px] overflow-x-hidden rounded-full bg-violet-500 opacity-40 blur-[64px]' /> */}

      <div className='my-24 flex flex-col lg:flex-row'>
        <div className='max-w-md'>
          <h3
            className={cn('mb-6 text-3xl font-bold', suez_400.className)}
          >
            Newsletter 📰
          </h3>
          <Newsletter />
        </div>

        <div className='mx-auto mt-16 flex w-full justify-between lg:mt-0 lg:w-1/2'>
          <div className='w-full'>
            <h4 className={cn('text-xl', suez_400.className)}>
              Navigation
            </h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2 capitalize'>
              <li>
                <NextLink href='/'>Home</NextLink>
              </li>
              <li>
                <NextLink href='/about'>about</NextLink>
              </li>
              <li>
                <NextLink href='/works'>works</NextLink>
              </li>
              <li>
                <NextLink href='/blogs'>blogs</NextLink>
              </li>
              <li>
                <NextLink href='/contact'>contact</NextLink>
              </li>
            </ul>
          </div>

          <div className='w-full'>
            <h4 className={cn('text-xl', suez_400.className)}>Socials</h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2'>
              {config.socials.map(social => (
                <li key={social.name}>
                  <NextLink href={social.url} className='capitalize'>
                    {social.name}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full'>
            <h4 className={cn('text-xl', suez_400.className)}>Misc</h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2 capitalize'>
              <li>
                <NextLink href='/privacy-policy'>Privacy Policy</NextLink>
              </li>
              <li>
                <NextLink href='/tags'>tags</NextLink>
              </li>
              <li>
                <NextLink href='/uses'>uses</NextLink>
              </li>
              <li>
                <NextLink href='/newsletter'>Newsletter</NextLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <time className='my-6 text-6xl font-black opacity-85 lg:text-[7rem]'>
          © {new Date().getFullYear()}
        </time>

        <ScreenFitText text='AcidOP' className='opacity-85' />
      </div>
    </footer>
  );
};

export default Footer;

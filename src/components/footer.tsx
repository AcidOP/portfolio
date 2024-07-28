import Container from './Container';
import { inter_700 } from './fonts';
import MarqueeText from './MarqueeText';
import Newsletter from './newsletter/newsletter';
import { ScreenFitText } from './ScreenFitText';

import config from '@/data/config';
import { cn } from '@/utils/cn';

import NextLink from 'next/link';

const Footer = () => {
  return (
    <footer className='relative mt-24'>
      <Container>
        <ScreenFitText
          text='Have a question or want to work together?'
          className='opacity-60'
        />
        <ScreenFitText
          text='Get in touch'
          href='/contact'
          className='opacity-80'
        />
      </Container>

      <MarqueeText
        text={['React Developer', 'Web Design', 'SEO']}
        className='my-24'
      />

      <div className='absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 overflow-x-hidden rounded-full bg-violet-400 opacity-70 blur-[64px] lg:h-[550px] lg:w-[550px]' />

      <Container className='my-24 flex flex-col lg:flex-row lg:gap-16'>
        <div className='w-full max-w-lg'>
          <h3
            className={cn('mb-6 text-3xl font-bold', inter_700.className)}
          >
            Newsletter 📰
          </h3>
          <Newsletter />
        </div>

        <div className='mx-auto mt-16 flex w-full justify-between lg:mt-0'>
          <div className='w-full'>
            <h4 className={cn('text-xl', inter_700.className)}>
              Navigation
            </h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2 text-lg capitalize'>
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
            <h4 className={cn('text-xl', inter_700.className)}>Socials</h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2 text-lg capitalize'>
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
            <h4 className={cn('text-xl', inter_700.className)}>Misc</h4>

            <hr className='my-6 w-[80%] border border-gray-300' />

            <ul className='space-y-2 text-lg capitalize'>
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
      </Container>

      <div className='layout-container text-center'>
        <time className='my-6 text-6xl font-black opacity-85 lg:text-[7rem]'>
          © {new Date().getFullYear()}
        </time>

        <ScreenFitText text='AcidOP' className='opacity-85' />
      </div>
    </footer>
  );
};

export default Footer;

import { FC } from 'react';

import aboutMe from '../../../../public/images/about-me.png';

import config from '@/data/config';

import clsx from 'clsx';
import { Inter, Suez_One } from 'next/font/google';
import Image from 'next/image';

const suez = Suez_One({ subsets: ['latin'], weight: '400' });
const inter = Inter({ subsets: ['latin'], weight: '500' });

const Whoami: FC = () => {
  return (
    <div className='my-8 flex flex-col lg:my-32 lg:flex-row'>
      <div className='flex flex-col items-center justify-center lg:w-2/5'>
        <Image
          src={aboutMe}
          alt='About me'
          className='w-64 rounded-full border-2 border-black'
        />

        <h2 className={clsx('pb-3 pt-4 text-4xl', suez.className)}>
          {config.name}
        </h2>

        {config.jobTitles.map((jobTitle, index) => {
          return (
            <p key={index} className='font-bold opacity-60'>
              {jobTitle}
            </p>
          );
        })}

        <div className='mt-5 flex space-x-3'>
          {config.socials.map((social, index) => {
            return (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noreferrer'
                className='hover:text-violet-600 hover:opacity-75'
              >
                <Image
                  src={`/icons/${social.name}.svg`}
                  width={24}
                  height={24}
                  alt={social.name}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className='mt-16 px-5 lg:mt-0 lg:w-3/5'>
        {config.about.map((about, index) => {
          return (
            <div key={index} className='mb-12'>
              <h3
                className={clsx(
                  'text-2xl font-bold opacity-85',
                  suez.className,
                )}
              >
                {about.title}{' '}
                <span className='text-3xl text-violet-600'>?</span>
              </h3>

              <p
                className={clsx(
                  'mt-3 max-w-2xl text-lg opacity-60',
                  inter.className,
                )}
              >
                {about.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whoami;

import { FC } from 'react';

import aboutMe from '../../../../public/images/about-me.png';

import config from '@/data/config';

import clsx from 'clsx';
import { Suez_One } from 'next/font/google';
import Image from 'next/image';

const body = Suez_One({ subsets: ['latin'], weight: '400' });

const Whoami: FC = () => {
  return (
    <div className='my-8 lg:my-32 flex flex-col lg:flex-row'>
      <div className='flex flex-col items-center justify-center lg:w-2/5'>
        <Image
          src={aboutMe}
          alt='About me'
          className='w-44 rounded-full border-2 border-black'
        />

        <h2
          className={clsx('pb-3 pt-6 text-3xl font-bold', body.className)}
        >
          {config.name}
        </h2>

        {config.jobTitles.map((jobTitle, index) => {
          return (
            <p key={index} className='text-sm font-bold opacity-80'>
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
                className='hover:text-violet-600'
              >
                <Image
                  src={`/icons/${social.name}.svg`}
                  width={20}
                  height={20}
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
                  'text-xl font-bold opacity-85 lg:text-base',
                  body.className,
                )}
              >
                {about.title}
              </h3>

              <p className='mt-3 max-w-2xl'>{about.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whoami;

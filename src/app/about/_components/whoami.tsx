import aboutMe from '../../../../public/images/about-me.png';

import { inter_500, suez_400 } from '@/components/fonts';
import config from '@/data/config';
import { cn } from '@/utils/cn';

import Image from 'next/image';

const Whoami = () => {
  const jobTitles = ['Full Stack Developer 🐛', 'Cybersecurity Geek 🛡️'];
  const about = [
    {
      title: "WHERE I'M FROM",
      content:
        'Born and raised in India, and since my early years I knew that computer was my passion. From cybersecurity to web development, I started my journey.',
    },
    {
      title: 'WHY I DO WHAT I DO',
      content:
        'I have always been fascinated about the way I can create something from scratch by programming and command the computer to make life easier. I believe that the combination of these two skills can create a powerful impact on the world.',
    },
    {
      title: "WHERE I'M CURRENTLY",
      content:
        "I'm currently upskilling myself in the field of UI/UX and also learning about the latest technologies in the field of web development.",
    },
  ];

  return (
    <div className='my-8 flex flex-col lg:my-32 lg:flex-row'>
      <div className='flex flex-col items-center justify-center lg:w-2/5'>
        <Image
          src={aboutMe}
          alt='About me'
          className='w-64 rounded-full border-2 border-black'
        />

        <h2 className={cn('pb-3 pt-4 text-4xl', suez_400.className)}>
          {config.name}
        </h2>

        {jobTitles.map((jobTitle, index) => {
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
        {about.map((about, index) => {
          return (
            <div key={index} className='mb-12'>
              <h3
                className={cn(
                  'text-2xl font-bold opacity-85',
                  suez_400.className,
                )}
              >
                {about.title}{' '}
                <span className='text-3xl text-violet-600'>?</span>
              </h3>

              <p
                className={cn(
                  'mt-3 max-w-2xl text-lg opacity-60',
                  inter_500.className,
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

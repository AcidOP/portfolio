import { inter_900 } from '@/components/fonts';
import config from '@/data/config';
import { cn } from '@/utils/cn';

import Image from 'next/image';

const aboutItems = [
  {
    heading: 'Crafting Charming experiences',
    description:
      'I am a self taught developer with self diagnosed OCD, thereby ensuring that every project I work on is pixel perfect. I love to start a project from zero and ensure it reaches a hundred, while enjoying the process of bringing ideas to life through good design',
    image: '/images/about-1.png',
  },
  {
    heading: "When I'm not working...",
    description:
      "You can usually find me playing Valorant peacefully on the Mumbai server or debating on twitter about which is the best web framework. I also blog about the most random topic I can think of, so if you are into that, you can check out my blog. I'm also active on Twitter, so feel free to reach out to me there.",
    social: config.socials.find(social => social.name === 'twitter'),
    image: '/images/about-2.png',
  },
  {
    heading: 'Working remotely from Kolkata, India',
    description:
      "Im always in the search of the perfect balance between work, university and personal life. I'm also creating a SaaS product while struggling to manage time. Whenever I need a break, I usually go out for a walk or play Valorant.",
    image:
      'https://images.unsplash.com/photo-1723405073526-67896bc6f818?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imgBorder: true,
  },
];

const DropShadow = () => {
  return (
    <div className='absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700 opacity-90 blur-3xl md:h-[350px] md:w-[350px] md:blur-[96px] lg:h-[500px] lg:w-[500px] lg:blur-[128px]' />
  );
};

const About = () => {
  return (
    <div className='my-36'>
      <h2
        className={cn(
          'mx-auto grid text-center text-4xl text-gray-700 lg:gap-2 lg:text-5xl',
          inter_900.className,
        )}
      >
        <span>FULLSTACK DEVELOPER &</span>
        <span>A LITTLE BIT OF EVERYTHING...</span>
      </h2>

      <section className='mt-48'>
        {aboutItems.map((item, index) => {
          return (
            <div
              key={item.heading}
              className={cn(
                'flex min-h-[600px] flex-col-reverse items-center justify-between gap-16 border-b-2 pb-10 lg:gap-16',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                index > 0 && 'mt-48 lg:mt-16',
              )}
            >
              <div className='w-full space-y-10 lg:w-7/12'>
                <h3
                  className={cn(
                    'text-center text-4xl uppercase md:text-start lg:text-6xl',
                    inter_900.className,
                  )}
                >
                  {item.heading}
                </h3>

                <p className='text-center text-lg text-gray-600 md:text-start lg:text-xl'>
                  {item.description}
                </p>

                {item.social && (
                  <a
                    href={item.social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cn(
                      'mt-8 inline-block text-center text-4xl uppercase text-violet-500 hover:underline md:text-start',
                      inter_900.className,
                    )}
                  >
                    Follow me on {item.social.name} &#8599;
                  </a>
                )}
              </div>

              <div className='relative w-full lg:w-5/12'>
                <Image
                  src={item.image!}
                  width={100}
                  height={100}
                  unoptimized
                  alt={item.heading}
                  className={cn(
                    'mx-auto object-cover sm:w-1/2 md:w-full',
                    item.imgBorder && 'border-2 border-black shadow-2xl',
                  )}
                />

                <DropShadow />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default About;

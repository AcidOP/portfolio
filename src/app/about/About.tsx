import deeds from './listDeeds';

import Image from 'next/image';
import { RoughNotationGroup } from 'react-rough-notation';

const About = () => {
  return (
    <div id='about'>
      <hr className='mt-16' />

      <div className='divide-y-2'>
        {deeds.map(deed => {
          return (
            <RoughNotationGroup key={Math.random()} show>
              <section className='relative mt-16 grid gap-16 pt-16 lg:grid-cols-5 lg:gap-32'>
                <div className='text-xl font-medium lg:col-span-2 lg:text-2xl'>
                  {deed.title}
                </div>

                <div className='text-xl font-normal opacity-90 lg:col-span-3 lg:text-2xl lg:font-medium'>
                  {deed.description}

                  {deed.image && (
                    <div className='relative mt-8 aspect-video w-full border-2 border-black drop-shadow-2xl grayscale hover:grayscale-0 lg:w-[70%]'>
                      <Image
                        src={deed.image}
                        alt=''
                        fill
                        className='object-cover'
                      />
                    </div>
                  )}
                </div>

                <div className='absolute left-0 -z-10 h-[240px] w-[240px] rounded-full bg-violet-500 opacity-50 blur-[64px]' />
              </section>
            </RoughNotationGroup>
          );
        })}
      </div>
    </div>
  );
};

export default About;

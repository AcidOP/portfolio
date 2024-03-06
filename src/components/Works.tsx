import { CardBody, CardContainer, CardItem } from '@/components/3d-card';
import config from '@/data/config';

import clsx from 'clsx';
import { Suez_One } from 'next/font/google';
import Image from 'next/image';

const heading = Suez_One({ subsets: ['latin'], weight: '400' });

const Works = () => {
  const { displayedWorks } = config;

  return (
    <div className='my-24'>
      <h1
        className={clsx(
          'text-7xl font-black lg:text-8xl',
          heading.className,
        )}
      >
        SELECTED WORKS.
      </h1>

      {/* {https://ui.aceternity.com/components/3d-card-effect } */}
      <div className='flex flex-col lg:flex-row lg:space-x-10'>
        {displayedWorks.map((work, index) => (
          <CardContainer key={index} className='inter-var h-[32rem]'>
            <CardBody className='group/card relative h-full w-full rounded-xl border border-black/[0.1] bg-violet-100 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]'>
              <CardItem translateZ='100' className='w-full'>
                <Image
                  src={work.image}
                  width={3000}
                  height={3000}
                  className='h-64 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  alt='thumbnail'
                />
              </CardItem>

              <CardItem
                translateZ='50'
                className={clsx(
                  'mt-6 text-3xl font-bold opacity-80 dark:text-white',
                  heading.className,
                )}
              >
                {work.title}
              </CardItem>

              <CardItem
                as='p'
                translateZ='60'
                className='mt-4 max-w-md opacity-70 dark:text-neutral-300'
              >
                {work.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Works;

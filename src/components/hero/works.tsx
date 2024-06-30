import Heading from '../heading';

import { getXRecentWorks } from '@/utils/works';

import Image from 'next/image';
import Link from 'next/link';

const NO_OF_WORKS = 3;

const Works = () => {
  const worksData = getXRecentWorks(NO_OF_WORKS);

  const firstWork = worksData[0];
  const otherWorks = worksData.slice(1, NO_OF_WORKS);

  return (
    <>
      <Heading text='Selected Works.' className='my-24 uppercase' />

      <Link href={firstWork.url}>
        <Image
          src={firstWork.cover}
          alt={firstWork.title}
          width={1920}
          height={1080}
          className='mt-6 rounded-xl border-2 border-black transition-all duration-200 hover:scale-[1.02]'
        />
      </Link>

      <div className='mb-24 mt-6 flex flex-col gap-6 lg:flex-row'>
        {otherWorks.map(work => (
          <Link href={work.url} key={work.slug} className='flex-1'>
            <Image
              src={work.cover}
              alt={work.title}
              width={1920}
              height={1080}
              className='hover:cursor rounded-xl border-2 border-black transition-all duration-200 hover:scale-105'
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Works;

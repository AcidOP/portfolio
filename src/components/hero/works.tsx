import Heading from '../heading';

import { works } from '@/utils/works';

import Image from 'next/image';
import Link from 'next/link';

const Works = () => {
  const worksData = works();

  const firstWork = worksData[0];
  const otherWorks = worksData.slice(1, 3);

  return (
    <>
      <Heading text='Selected Works.' className='my-24 uppercase' />

      <Link href={`/works/${firstWork.slug}`}>
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
          <Link
            href={`/works/${work.slug}`}
            key={work.slug}
            className='flex-1'
          >
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

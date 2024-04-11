import Heading from './heading';

import { works } from '@/utils/works';

import Image from 'next/image';
import Link from 'next/link';

const Works = () => {
  const worksData = works();

  const firstWork = worksData[0];
  const otherWorks = worksData.slice(1);

  return (
    <div className='my-24'>
      <Heading text='Selected Works.' className='uppercase' />

      <Link href={`/works/${firstWork.data.slug}`}>
        <Image
          src={firstWork.data.image}
          alt=''
          width={1920}
          height={1080}
          className='mt-6 rounded-xl border-2 border-black transition-all duration-200 hover:scale-[1.02]'
        />
      </Link>

      <div className='mt-6 flex flex-col gap-6 lg:flex-row'>
        {otherWorks.map(work => (
          <Link
            href={`/works/${work.data.slug}`}
            key={work.data.slug}
            className='flex-1'
          >
            <Image
              src={work.data.image}
              alt=''
              width={1920}
              height={1080}
              className='hover:cursor rounded-xl border-2 border-black transition-all duration-200 hover:scale-105'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Works;

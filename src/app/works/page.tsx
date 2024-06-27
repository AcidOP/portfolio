import Heading from '@/components/heading';

import { allWorks } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

const AllWorks = () => {
  return (
    <>
      <Heading text='Selected Works' as='h1' className='mb-16 mt-8' />

      <div className='grid gap-6 lg:grid-cols-2'>
        {allWorks.map(work => (
          <Link
            href={work.slug}
            key={work.slug}
            className='border-2 border-black transition duration-200 lg:hover:scale-[1.02]'
          >
            <Image
              src={work.cover}
              alt={work.title}
              height={1920}
              width={1080}
              className='object-cover'
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllWorks;

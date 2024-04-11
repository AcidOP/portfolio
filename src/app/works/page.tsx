import { works } from '@/utils/works';

import Image from 'next/image';
import Link from 'next/link';

const AllWorks = () => {
  const allWorks = works();

  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      {allWorks.map(work => (
        <Link
          href={`/works/${work.data.slug}`}
          key={work.data.slug}
          className='border-2 border-black transition duration-200 lg:hover:scale-[1.02]'
        >
          <Image
            src={work.data.image}
            alt={work.data.title}
            height={1920}
            width={1080}
            className='object-cover'
          />
        </Link>
      ))}
    </div>
  );
};

export default AllWorks;

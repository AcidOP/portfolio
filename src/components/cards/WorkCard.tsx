import Image from 'next/image';
import Link from 'next/link';

import type { Work } from 'contentlayer/generated';

const WorkCard = ({ title, cover, url }: Work) => {
  return (
    <div
      key={url}
      className='origin-right border-2 border-black transition duration-200 lg:hover:scale-105'
    >
      <Link href={url}>
        <Image
          src={cover}
          alt={title}
          height={1920}
          width={1080}
          className='object-cover'
        />
      </Link>
    </div>
  );
};

export default WorkCard;

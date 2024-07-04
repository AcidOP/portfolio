import { inter_900 } from '../fonts';

import { BlogWork } from '@/types/BlogWork';
import { cn } from '@/utils/cn';
import { getPlaceholder } from '@/utils/image';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const Header = async ({
  date,
  description,
  title,
  cover,
  tags,
  services,
  stats,
}: BlogWork) => {
  const blurUrl = await getPlaceholder(cover);

  return (
    <>
      <h1
        className={cn(
          'mt-10 text-4xl font-black lg:text-7xl',
          inter_900.className,
        )}
      >
        {title}
      </h1>

      <div className='mt-5 flex flex-wrap items-center gap-5 lg:mt-10'>
        {tags && (
          <div className='flex flex-wrap gap-2'>
            {tags.map(tag => (
              <Link
                href={'/tags/' + tag}
                key={tag}
                className='rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600'
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {services && (
          <div className='flex flex-wrap gap-2'>
            {services.map(service => (
              <h6
                key={service}
                className='rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600'
              >
                {service}
              </h6>
            ))}
          </div>
        )}

        {date && (
          <time className='text-nowrap opacity-70'>
            📅 {format(date, 'dd-MMM-yyyy').replaceAll('-', ' ')}
          </time>
        )}

        {stats.time && (
          <p className='text-nowrap opacity-70'>
            ⏳ {stats.time} min read
          </p>
        )}

        {stats.wordCount && (
          <p className='text-nowrap opacity-70'>
            🔠 {stats.wordCount} words
          </p>
        )}
      </div>

      <div className='relative mt-7 aspect-video'>
        <Image
          src={blurUrl.src}
          alt={title}
          fill
          priority
          placeholder='blur'
          blurDataURL={blurUrl.placeholder}
          className='border-2 border-black object-cover shadow-md'
          sizes='100vw'
        />
      </div>

      <p className='mt-16 text-lg opacity-75 lg:text-xl'>{description}</p>

      <hr className='my-16 w-full border border-violet-100' />
    </>
  );
};

export default Header;

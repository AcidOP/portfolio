import { getPlaceholder } from '@/utils/image';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import type { Blog } from 'contentlayer/generated';

interface HeaderProps extends Blog {
  services?: string[];
}

const Header = async ({
  date,
  description,
  title,
  cover,
  tags,
  services,
  stats,
}: HeaderProps) => {
  const blurUrl = await getPlaceholder(cover as string);

  return (
    <>
      <h1 className='mt-10 text-4xl font-black lg:text-5xl'>{title}</h1>

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

        {stats.readingTime && (
          <p className='text-nowrap opacity-70'>
            ⏳ {stats.readingTime} min read
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
          quality={100}
          placeholder='blur'
          blurDataURL={blurUrl.placeholder}
          className='border-2 border-black object-cover shadow-md'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>

      <p className='mt-6 text-xl opacity-75'>{description}</p>

      <hr className='my-10 w-full border border-violet-100' />
    </>
  );
};

export default Header;

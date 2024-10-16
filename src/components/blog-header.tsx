import { inter_900 } from './fonts';

import { cn } from '@/utils/cn';
import { getPlaceholder } from '@/utils/image';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import type { Blog } from 'contentlayer/generated';

const BlogHeader = async ({ title, cover, date, tags, stats }: Blog) => {
  const blurUrl = await getPlaceholder(cover!);

  return (
    <div className='mb-16 mt-16 flex flex-col justify-between gap-10 border-b-2 pb-16 md:flex-row md:gap-36'>
      <div className='flex w-full flex-col justify-between gap-5'>
        <div className='flex flex-wrap items-center gap-2 md:gap-5'>
          <time
            key={date}
            className='font-medium text-gray-500 md:text-lg'
          >
            📅 {format(new Date(date), 'MMMM dd, yyyy')}
          </time>

          {stats.time && (
            <p className='text-nowrap text-gray-500 md:text-lg'>
              ⏳ {stats.time} min read
            </p>
          )}

          {stats.wordCount && (
            <p className='text-nowrap text-gray-500 md:text-lg'>
              🔠 {stats.wordCount} words
            </p>
          )}
        </div>

        <h1
          className={cn(
            'text-4xl font-black lg:text-6xl',
            inter_900.className,
          )}
        >
          {title}
        </h1>

        <div>
          {tags && (
            <div className='flex gap-2'>
              {tags.map(tag => (
                <Link
                  href={'/tags/' + tag}
                  key={tag}
                  className='rounded-md bg-violet-600 px-2 py-1 font-medium text-violet-100'
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className='w-full'>
        <Image
          src={blurUrl.src}
          alt={title ?? 'Cover Image'}
          width={1920}
          height={1080}
          priority
          placeholder='blur'
          blurDataURL={blurUrl.placeholder}
          className='aspect-video border-2 border-black object-cover shadow-2xl'
          sizes='100vw'
        />
      </div>
    </div>
  );
};

export default BlogHeader;

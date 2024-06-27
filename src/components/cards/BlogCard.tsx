import { getPlaceholder } from '@/utils/image';

import { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

// https://www.hyperui.dev/components/marketing/blog-cards
// TODO: Add cover image in mobile view
const BlogCard = async ({
  cover,
  date,
  description,
  url,
  title,
}: Blog) => {
  const image = await getPlaceholder(cover);

  return (
    <article className='flex border-2 border-black bg-white transition hover:scale-105 hover:shadow-xl'>
      <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
        <time
          dateTime={date}
          className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
        >
          <span>{format(new Date(date), 'y')}</span>
          <span className='w-px flex-1 bg-gray-900/10'></span>
          <span>
            {format(new Date(date), 'MMM-d').replaceAll('-', ' ')}
          </span>
        </time>
      </div>

      <div className='hidden border-x-2 border-black sm:block sm:basis-56'>
        <Image
          src={image.src}
          alt={title}
          width={1740}
          height={1740}
          placeholder='blur'
          blurDataURL={image.placeholder}
          className='aspect-square h-full w-full object-cover'
        />
      </div>

      <div className='flex flex-1 flex-col justify-between'>
        <div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:px-6'>
          <Link href={url}>
            <h3 className='text-xl font-bold uppercase text-gray-900'>
              {title}
            </h3>
          </Link>

          <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-700'>
            {description}
          </p>
        </div>

        <div className='sm:flex sm:items-end sm:justify-end'>
          <Link
            href={url}
            className='block bg-violet-700 px-6 py-3 text-center text-sm font-bold text-white transition lg:bg-black lg:hover:scale-125'
          >
            READ BLOG
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

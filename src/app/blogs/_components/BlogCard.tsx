import { getPlaceholder } from '@/utils/image';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  slug: string;
  date: string;
  title: string;
  cover: string;
  description: string;
}

// https://www.hyperui.dev/components/marketing/blog-cards
// TODO: Add cover image in mobile view
const BlogCard = async ({
  cover,
  date,
  description,
  slug,
  title,
}: BlogPostProps) => {
  const image = await getPlaceholder(cover);

  return (
    <article className='flex bg-white transition hover:scale-105 hover:shadow-xl'>
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

      <div className='hidden sm:block sm:basis-56'>
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
        <div className='border-s border-gray-900/10 px-4 sm:border-l-transparent sm:px-6'>
          <Link href={`/blogs/${slug}`}>
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
            href={`/blogs/${slug}`}
            className='block bg-violet-700 px-5 py-3 text-center text-xs font-bold uppercase  text-white transition hover:bg-black lg:hover:scale-125'
          >
            Read Blog
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;

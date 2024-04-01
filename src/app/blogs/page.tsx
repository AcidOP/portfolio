import { FC } from 'react';

import { allBlogsMeta } from '@/utils/blog';

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

const BlogCard: FC<BlogPostProps> = ({
  date,
  slug,
  description,
  title,
  cover,
}) => {
  return (
    <div className='m-2 flex flex-col justify-between rounded-md bg-violet-100 p-3'>
      <Image
        src={cover}
        alt={title}
        width={1920}
        height={1080}
        className='aspect-video rounded-xl'
      />

      <h1 className='mt-4 line-clamp-2 text-3xl font-extrabold'>
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h1>

      <p className='my-3 text-sm opacity-60'>
        {format(date, 'yyyy-MMM-dd-E')}
      </p>

      <p className='line-clamp-4'>{description}</p>

      <Link
        href={`/blogs/${slug}`}
        className='mb-2 mt-6 w-min text-nowrap text-violet-600 hover:underline'
      >
        Read more
      </Link>
    </div>
  );
};

const BlogPage = () => {
  const blogs = allBlogsMeta();

  return (
    <div className='grid grid-cols-4'>
      {blogs.map(blog => {
        return <BlogCard key={blog.data.slug} {...blog.data} />;
      })}
    </div>
  );
};

export default BlogPage;

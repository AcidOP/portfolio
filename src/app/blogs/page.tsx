import { FC } from 'react';

import { allBlogsMeta } from '@/utils/blog';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPostProps {
  date: Date;
  slug: string;
  title: string;
  cover: string;
  description: string;
}

const BlogCard: FC<BlogPostProps> = ({
  date,
  description,
  slug,
  title,
  cover,
}) => {
  return (
    <div className='m-2 rounded-md bg-violet-100 p-3'>
      <Image
        src={cover}
        alt={title}
        width={1920}
        height={1080}
        className='aspect-video rounded-md'
      />

      <h1 className='mt-4 line-clamp-2 text-3xl font-bold'>
        <Link href={`/blogs/${slug}`}>{title}</Link>
      </h1>

      <p className='my-3'>{format(date, 'yyyy-MMM-dd-E')}</p>

      <p className='line-clamp-4'>{description}</p>
    </div>
  );
};

const BlogPage: FC<BlogPostProps> = () => {
  const blogs = allBlogsMeta();
  return (
    <div className='grid grid-cols-4'>
      {blogs.map(blog => {
        return (
          <BlogCard key={blog.slug} {...blog.data} slug={blog.slug} />
        );
      })}
    </div>
  );
};

export default BlogPage;

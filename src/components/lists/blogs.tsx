import BlogCard from '@/components/cards/blog';

import type { Blog } from 'contentlayer/generated';

const ListBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
      {blogs.map(blog => {
        return <BlogCard key={blog.slug} {...blog} />;
      })}
    </div>
  );
};

export default ListBlogs;

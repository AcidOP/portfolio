import BlogCard from './_components/BlogCard';

import { allBlogsMeta } from '@/utils/blog';

const BlogPage = () => {
  const blogs = allBlogsMeta();

  return (
    <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
      {blogs.map(blog => {
        return <BlogCard key={blog.data.slug} {...blog.data} />;
      })}
    </div>
  );
};

export default BlogPage;

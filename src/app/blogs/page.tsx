import Pagination from './_components/Pagination';

import BlogCard from '@/components/BlogCard';
import { blogsPerPage, TOTAL_PAGES } from '@/utils/blog';

const BlogPage = () => {
  const blogs = blogsPerPage(1);
  return (
    <>
      <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} {...blog} />;
        })}
      </div>

      <Pagination current={1} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

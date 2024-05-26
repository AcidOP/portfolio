import Pagination from '../../_components/Pagination';

import BlogCard from '@/components/BlogCard';
import { blogsPerPage, TOTAL_PAGES } from '@/utils/blog';

import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { page: string };
}

export const generateStaticParams = async () => {
  const paths = Array.from({ length: TOTAL_PAGES }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const BlogPage = ({ params: { page } }: BlogPageProps) => {
  const currentPage = parseInt(page);
  const blogs = blogsPerPage(currentPage);

  if (blogs.length === 0) return notFound();

  return (
    <>
      <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
        {blogs.map(blog => {
          return <BlogCard key={blog.slug} {...blog} />;
        })}
      </div>

      <Pagination current={currentPage} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

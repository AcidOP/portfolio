import BlogCard from '../../_components/BlogCard';

import { allBlogsMeta } from '@/utils/blog';

import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { page: string };
}

const BLOGS = allBlogsMeta();
const POSTS_PER_PAGE = 6;

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(BLOGS.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

const BlogPage = ({ params: { page } }: BlogPageProps) => {
  const currentPage = parseInt(page);

  const startIndex = POSTS_PER_PAGE * (currentPage - 1);
  const endIndex = POSTS_PER_PAGE * currentPage;

  const blogs = BLOGS.slice(startIndex, endIndex);

  if (blogs.length === 0) return notFound();

  return (
    <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
      {blogs.map(blog => {
        return <BlogCard key={blog.data.slug} {...blog.data} />;
      })}
    </div>
  );
};

export default BlogPage;

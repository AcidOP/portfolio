import Pagination from '../../Pagination';

import ListBlogs from '@/components/cards/ListBlogs';
import { blogsPerPage, TOTAL_PAGES } from '@/utils/blog';

import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { page: string };
}

export const generateStaticParams = async () => {
  const paths = Array.from({ length: TOTAL_PAGES }, (_, i) => ({
    page: `${i + 1}`,
  }));

  return paths;
};

const BlogPage = ({ params: { page } }: BlogPageProps) => {
  const currentPage = parseInt(page);
  const blogs = blogsPerPage(currentPage);

  if (blogs.length === 0) return notFound();

  return (
    <>
      <ListBlogs blogs={blogs} />
      <Pagination current={currentPage} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

import Pagination from './_components/Pagination';

import ListBlogs from '@/components/cards/ListBlogs';
import { blogsPerPage, TOTAL_PAGES } from '@/utils/blog';

const BlogPage = () => {
  const blogs = blogsPerPage(1);
  return (
    <>
      <ListBlogs blogs={blogs} />
      <Pagination current={1} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

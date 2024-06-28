import Pagination from './Pagination';

import ListBlogs from '@/components/lists/ListBlogs';
import config from '@/data/config';
import { blogsPerPage, TOTAL_PAGES } from '@/utils/blog';

export const metadata = {
  title: `Blogs | ${config.name}`,
  alternatives: { canonical: './' },
};

const BlogPage = () => {
  const blogs = blogsPerPage(1);

  return (
    <>
      <h1 className='sr-only'>Blogs</h1>
      <ListBlogs blogs={blogs} />
      <Pagination current={1} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

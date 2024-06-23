import Pagination from './Pagination';

import ListBlogs from '@/components/cards/ListBlogs';
import config from '@/data/config';
import { TOTAL_PAGES } from '@/utils/blog';

import { allBlogs } from 'contentlayer/generated';

export const metadata = {
  title: `Blogs | ${config.name}`,
  alternatives: { canonical: './' },
};

const BlogPage = () => {
  return (
    <>
      <h1 className='sr-only'>Blogs</h1>
      <ListBlogs blogs={allBlogs} />

      <Pagination current={1} total={TOTAL_PAGES} />
    </>
  );
};

export default BlogPage;

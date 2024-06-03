import ListBlogs from '@/components/cards/ListBlogs';
import { getAllBlogTags, getBlogsByTag } from '@/utils/blog';

interface TagPageParams {
  params: { tag: string };
}

export const generateStaticParams = async () => {
  const allTags = getAllBlogTags();
  return Object.keys(allTags).map(tag => ({ tag }));
};

const Tag = ({ params: { tag } }: TagPageParams) => {
  const blogs = getBlogsByTag(tag);

  return (
    <>
      <h1 className='sr-only'>{tag} blogs.</h1>
      <ListBlogs blogs={blogs} />
    </>
  );
};

export default Tag;

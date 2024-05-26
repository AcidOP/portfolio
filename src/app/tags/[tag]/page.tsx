import BlogCard from '@/components/BlogCard';
import { getAllBlogTags, getBlogsByTag } from '@/utils/blog';

interface TagPageParams {
  params: { tag: string };
}

export const generateStaticParams = async () => {
  const allTags = getAllBlogTags();
  return allTags.map(tag => ({ tag }));
};

const Tag = ({ params: { tag } }: TagPageParams) => {
  const blogs = getBlogsByTag(tag);

  return (
    <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
      {blogs.map(blog => {
        return <BlogCard key={blog.slug} {...blog} />;
      })}
    </div>
  );
};

export default Tag;

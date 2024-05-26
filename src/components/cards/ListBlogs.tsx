import BlogCard from './BlogCard';

interface BlogListProps {
  blogs: any[];
}

const ListBlogs = ({ blogs }: BlogListProps) => {
  return (
    <div className='grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-6'>
      {blogs.map(blog => {
        return <BlogCard key={blog.slug} {...blog} />;
      })}
    </div>
  );
};

export default ListBlogs;

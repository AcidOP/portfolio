import { allBlogsMeta } from '@/utils/blog';

import { format } from 'date-fns';
import Link from 'next/link';

const page = () => {
  const blogs = allBlogsMeta();
  return (
    <div>
      {blogs.map(blog => {
        return (
          <div key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>{blog.data.title}</Link>
            <p>{format(blog.data.date, 'yyyy-MMM-dd-E')}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;

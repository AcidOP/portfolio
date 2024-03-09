import { FC } from 'react';

import { getAllBlogSlugs, getBlogBySlug } from '@/utils/blog';

import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface Props {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
};

const page: FC<Props> = ({ params: { slug } }) => {
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <div className='prose mx-auto w-full max-w-5xl'>
      <h1>{blog.data.title}</h1>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
            },
          ],
          [
            rehypeExternalLinks,
            { content: { type: 'text', value: '🔗' } },
          ],
        ]}
      >
        {blog.content}
      </Markdown>
    </div>
  );
};

export default page;

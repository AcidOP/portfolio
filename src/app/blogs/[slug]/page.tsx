import { FC } from 'react';

import { getAllBlogSlugs, getBlogBySlug } from '@/utils/blog';

import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
};

export const generateMetadata = async ({
  params: { slug },
}: PageProps): Promise<Metadata> => {
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.data.title,
    description: blog.data.description,
    openGraph: {
      title: blog.data.title,
      description: blog.data.description,
      type: 'article',
      url: process.env.SITE_URL + '/blogs/' + slug,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.data.title,
      description: blog.data.description,
    },
  };
};

const page: FC<PageProps> = ({ params: { slug } }) => {
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

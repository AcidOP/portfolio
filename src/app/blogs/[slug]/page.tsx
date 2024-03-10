import { FC } from 'react';

import Mdx from '@/components/mdx/Mdx';
import { getAllBlogSlugs, getBlogBySlug } from '@/utils/blog';

import { notFound } from 'next/navigation';

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
    // openGraph: {
    //   title: blog.data.title,
    //   description: blog.data.description,
    //   type: 'article',
    //   url: process.env.SITE_URL + '/blogs/' + slug,
    // },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: blog.data.title,
    //   description: blog.data.description,
    // },
  };
};

const page: FC<PageProps> = ({ params: { slug } }) => {
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <div className='mx-auto w-full max-w-5xl'>
      <h1>{blog.data.title}</h1>
      <article className='prose mx-auto prose-a:no-underline'>
        <Mdx content={blog.content} />
      </article>
    </div>
  );
};

export default page;

import { FC } from 'react';

import GoBackButton from './_components/GoBackButton';
import Header from './_components/Header';

import Mdx from '@/components/mdx/Mdx';
import { getAllBlogSlugs, getBlogBySlug } from '@/utils/blog';

import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
};

interface PageProps {
  params: { slug: string };
}

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

const BlogPage: FC<PageProps> = ({ params: { slug } }) => {
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className='mx-auto w-full max-w-3xl'>
      <GoBackButton />

      {/* @ts-ignore */}
      <Header {...blog.data} />

      <article className='prose mx-auto w-full max-w-3xl prose-a:no-underline'>
        <Mdx content={blog.content} />
      </article>
    </div>
  );
};

export default BlogPage;

import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
import config from '@/data/config';
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
    openGraph: {
      title: blog.data.title,
      description: blog.data.description,
      type: 'article',
      url: process.env.NEXT_PUBLIC_SITE_URL + `/blogs/${slug}`,
      locale: 'en_US',
      authors: config.name,
      images: [
        {
          url: blog.data.cover,
          width: 1200,
          height: 630,
          alt: blog.data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.data.title,
      description: blog.data.description,
      images: [{ url: blog.data.cover }],
    },
  };
};

const BlogPage = ({ params: { slug } }: PageProps) => {
  const blog = getBlogBySlug(slug);

  if (!blog) notFound();

  return (
    <div className='mx-auto w-full max-w-4xl'>
      <GoBackButton />

      {/* @ts-ignore */}
      <Header {...blog.data} />

      <article className='prose prose-xl mx-auto w-full max-w-4xl prose-a:no-underline'>
        <Mdx content={blog.content} />
      </article>
    </div>
  );
};

export default BlogPage;

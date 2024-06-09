import { generateJsonLd } from '../Schema';
import { generateSeoTags } from '../SEO';

import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
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

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const blog = getBlogBySlug(params.slug);

  if (!blog) return {};

  return generateSeoTags(blog);
};

const BlogPage = ({ params: { slug } }: PageProps) => {
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const jsonLd = generateJsonLd(blog);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='mx-auto w-full max-w-4xl'>
        <GoBackButton />
        <Header {...blog} />
        <Mdx content={blog.content} />
      </div>
    </>
  );
};

export default BlogPage;

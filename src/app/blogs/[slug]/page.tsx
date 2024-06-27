import { generateJsonLd } from '../Schema';
import { generateSeoTags } from '../SEO';

import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
import { blogSlugs, getBlogBySlug } from '@/utils/blog';

import { notFound } from 'next/navigation';

import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  return blogSlugs.map(slug => ({ slug }));
};

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const blog = getBlogBySlug(params.slug);
  return blog ? generateSeoTags(blog) : {};
};

const BlogPage = ({ params: { slug } }: PageProps) => {
  const blog = getBlogBySlug(`/blogs/${slug}`);

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
        <Mdx code={blog.body.code} />
      </div>
    </>
  );
};

export default BlogPage;

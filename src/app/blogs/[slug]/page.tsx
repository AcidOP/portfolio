import BlogHeader from '@/components/blog-header';
import GoBackButton from '@/components/mdx/back-button';
import Header from '@/components/mdx/header';
import Mdx from '@/components/mdx/mdx';
import ScrollTop from '@/components/mdx/scroll-top';
import SharePost from '@/components/mdx/share-post';
import TOC from '@/components/mdx/toc-mdx';
import { generateJsonLd } from '@/components/Schema';
import { generateSeoTags } from '@/components/Seo';
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

  const headings = blog.headings;

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <GoBackButton className='mt-16 md:text-xl' />
      <BlogHeader {...blog} />
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-0'>
        <TOC contents={headings} />
        <Mdx code={blog.body.code} />
        <SharePost {...blog} />
      </div>
      <ScrollTop />
    </>
  );
};

export default BlogPage;

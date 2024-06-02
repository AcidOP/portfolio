import config from '@/data/config';

import type { Blog } from '@/types/Blog';
import type {
  Person,
  BlogPosting,
  ImageObject,
  WithContext,
} from 'schema-dts';

export const generateJsonLd = (blog: Blog): WithContext<BlogPosting> => {
  const url = `https://${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`;

  const author: Person = {
    '@type': 'Person',
    name: config.name,
  };

  const image: ImageObject = {
    '@type': 'ImageObject',
    url: blog.cover,
    height: 630 as any,
    width: 1200 as any,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url,
    image,
    author,
    inLanguage: 'en-US',
    headline: blog.title,
    dateCreated: blog.date,
    datePublished: blog.date,
    description: blog.description,
  };
};

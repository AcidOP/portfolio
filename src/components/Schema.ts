import config from '@/data/config';

import type { Blog } from 'contentlayer/generated';
import type { BlogPosting, WithContext } from 'schema-dts';

export const generateJsonLd = (blog: Blog): WithContext<BlogPosting> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    url: 'https://' + process.env.NEXT_PUBLIC_SITE_URL + blog.slug,
    headline: blog.title,
    description: blog.description,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: config.name,
    },
    image: {
      '@type': 'ImageObject',
      url: blog.cover,
      height: '630',
      width: '1200',
    },
    dateCreated: blog.date,
    datePublished: blog.date,
  };
};

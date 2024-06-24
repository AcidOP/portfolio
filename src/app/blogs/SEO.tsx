import config from '@/data/config';

import type { Blog } from 'contentlayer/generated';
import type { Metadata } from 'next';

export const generateSeoTags = (blog: Blog): Metadata => {
  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      url: blog.slug,
      title: blog.title,
      description: blog.description,
      type: 'article',
      locale: 'en_US',
      authors: config.name,
      images: [
        {
          url: blog.cover,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      site: process.env.NEXT_PUBLIC_SITE_URL + blog.slug,
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.cover }],
    },
    alternates: {
      canonical: blog.slug,
    },
  };
};

import config from '@/data/config';

import type { Blog } from '@/types/Blog';
import type { Metadata } from 'next';

export const generateSeoTags = (blog: Blog): Metadata => {
  const url = `/blogs/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      url,
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
      site: process.env.NEXT_PUBLIC_SITE_URL + url,
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.cover }],
    },
    alternates: {
      canonical: url,
    },
  };
};

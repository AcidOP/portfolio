import extractHeadings from '@/utils/mdx/contentlayer-extract-headings';

import { defineDocumentType } from 'contentlayer2/source-files';
import readingTime from 'reading-time';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blogs/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    cover: {
      type: 'string',
      default:
        'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
    },
    stats: {
      type: 'json',
      resolve: doc => {
        const blogDetails = readingTime(doc.body.raw);

        const time = Math.ceil(blogDetails.minutes);
        const wordCount = blogDetails.words;

        return { time, wordCount };
      },
    },
    url: {
      type: 'string',
      resolve: doc =>
        `/blogs/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
    },
    headings: {
      type: 'json',
      resolve: post => extractHeadings(post.body.raw),
    },
  },
}));

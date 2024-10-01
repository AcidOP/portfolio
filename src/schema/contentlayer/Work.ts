import { defineDocumentType } from 'contentlayer2/source-files';
import readingTime from 'reading-time';

export const Work = defineDocumentType(() => ({
  name: 'Work',
  filePathPattern: 'works/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    services: { type: 'list', of: { type: 'string' } },
    techstack: { type: 'list', of: { type: 'string' } },
    website: { type: 'string' },
    industry: { type: 'string' },
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
        `/works/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
    },
    cover: {
      type: 'string',
      resolve: doc =>
        `/works/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}.jpg`,
    },
  },
}));

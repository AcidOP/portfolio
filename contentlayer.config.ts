import {
  defineDocumentType,
  makeSource,
} from 'contentlayer2/source-files';

import type { ComputedFields } from 'contentlayer2/source-files';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc =>
      `/blogs/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    description: { type: 'string' },
    cover: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
  },
}));

export default makeSource({
  contentDirPath: 'src/data/blogs',
  documentTypes: [Blog],
});

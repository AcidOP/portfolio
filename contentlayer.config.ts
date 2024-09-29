import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
// Contentlayer
import {
  defineDocumentType,
  makeSource,
} from 'contentlayer2/source-files';
import readingTime from 'reading-time';
// Rehype Plugins
import rehypeExternalLinks from 'rehype-external-links';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize from 'rehype-sanitize';
// Remark Plugins
import remarkBreaks from 'remark-breaks';
import remarkCodeTitles from 'remark-flexible-code-titles';
import remarkGfm from 'remark-gfm';
import remarkHeadingGap from 'remark-heading-gap';

import type { ComputedFields } from 'contentlayer2/source-files';
import type { Options } from 'rehype-pretty-code';

const DEFAULT_COVER =
  'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const computedFields: ComputedFields = {
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
};

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
    cover: { type: 'string', default: DEFAULT_COVER },
    canonicalUrl: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    url: {
      type: 'string',
      resolve: doc =>
        `/blogs/${doc._raw.flattenedPath.replace(/^.+?(\/)/, '')}`,
    },
  },
}));

const Work = defineDocumentType(() => ({
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
    ...computedFields,
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

const PrivacyPolicy = defineDocumentType(() => ({
  name: 'PrivacyPolicy',
  filePathPattern: 'privacy-policy.mdx',
  contentType: 'mdx',
  fields: {
    lastUpdated: { type: 'date', required: true },
  },
}));

const prettyCodeOptions: Options = {
  theme: 'andromeeda',
  defaultLang: { block: 'typescript', inline: 'string' },
  transformers: [
    transformerNotationHighlight(),
    transformerNotationDiff(),
    transformerNotationFocus(),
  ],
  keepBackground: false,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted');
  },
};

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Blog, Work, PrivacyPolicy],
  mdx: {
    rehypePlugins: [
      rehypeSanitize,
      rehypePresetMinify,
      [rehypePrettyCode, prettyCodeOptions],
      rehypeExternalLinks,
    ],
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      remarkCodeTitles,
      remarkHeadingGap,
    ],
  },
});

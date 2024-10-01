import { Blog } from '@/schema/contentlayer/Blog';
import { PrivacyPolicy } from '@/schema/contentlayer/PrivacyPolicy';
import { Work } from '@/schema/contentlayer/Work';
import remarkNormalizeHeadings from '@/utils/mdx/remark-normalize-headings';

import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers';
// Contentlayer
import { makeSource } from 'contentlayer2/source-files';
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

import type { Options } from 'rehype-pretty-code';

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
      remarkNormalizeHeadings,
      remarkHeadingGap,
    ],
  },
});

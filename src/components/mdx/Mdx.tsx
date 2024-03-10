import { FC } from 'react';

import { components } from './MDXComponents';

import Markdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

const Mdx: FC<MarkdownProps> = ({ content }) => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }],
      ]}
    >
      {content}
    </Markdown>
  );
};

export default Mdx;

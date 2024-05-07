import { components } from './mdx-components';

import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string;
}

const Mdx = ({ content }: MarkdownProps) => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeSlug,
        rehypeSanitize,
        [rehypeExternalLinks, { content: { type: 'text', value: '🔗' } }],
      ]}
    >
      {content}
    </Markdown>
  );
};

export default Mdx;

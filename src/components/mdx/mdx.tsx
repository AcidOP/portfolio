import { components } from './mdx-components';

import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  content: string | null | undefined;
}

const Mdx = ({ content }: MarkdownProps) => {
  return (
    <article className='prose prose-xl mx-auto w-full max-w-4xl prose-a:no-underline'>
      <Markdown
        components={components}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          rehypeSanitize,
          [
            rehypeExternalLinks,
            { content: { type: 'text', value: '🔗' } },
          ],
        ]}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default Mdx;

import { components } from './mdx-components';

import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMinifyAttrWhitespace from 'rehype-minify-attribute-whitespace';
import rehypeMinifyAttrEnumerated from 'rehype-minify-attribute-whitespace';
import rehypeMinifyWhitespaces from 'rehype-minify-whitespace';
import rehypeSanitize from 'rehype-sanitize';
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
          rehypeSanitize,
          rehypeMinifyWhitespaces,
          rehypeMinifyAttrWhitespace,
          rehypeMinifyAttrEnumerated,
          [
            rehypeExternalLinks,
            { content: { type: 'text', value: '🌐' } },
          ],
        ]}
      >
        {content}
      </Markdown>
    </article>
  );
};

export default Mdx;

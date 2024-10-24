import components from './mdx-components';

import { getMDXComponent } from 'next-contentlayer2/hooks';

import '@/styles/codeblock.css';

interface MarkdownProps {
  code: string;
}

const Mdx = ({ code }: MarkdownProps) => {
  const MDXContent = getMDXComponent(code);
  return (
    <article className='prose mx-auto w-full lg:prose-xl prose-a:no-underline'>
      <MDXContent components={components} />
    </article>
  );
};

export default Mdx;

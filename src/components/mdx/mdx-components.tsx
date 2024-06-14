import { H1, H2, H3, H4, H5, H6 } from './text-headings';

import NextImage from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ ...rest }) => {
  // Inline code
  if (!rest.className?.startsWith('language')) {
    return (
      <code className='not-prose rounded-md bg-slate-200 p-1 font-bold text-violet-600'>
        `{rest.children}`
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={rest.className?.replace(/(?:lang(?:uage)?-)/, '')}
      style={materialOceanic}
      wrapLines={true}
      className='not-prose mb-4 overflow-x-auto rounded-md p-4'
    >
      {rest.children}
    </SyntaxHighlighter>
  );
};

const BetterLink = ({ ...rest }) => {
  const styles =
    'not-prose rounded px-1 py-[2px] font-bold text-violet-600 hover:underline text-nowrap';
  const isInternalLink = rest.href.startsWith('/');

  if (isInternalLink)
    return (
      <Link href={rest.href} className={styles}>
        {rest.children}
      </Link>
    );

  return (
    <a
      href={rest.href}
      target='_blank'
      rel='noopener noreferrer nofollow'
      className={styles}
    >
      {rest.children}
    </a>
  );
};

const BetterImage = ({ ...rest }) => {
  return (
    <NextImage
      src={rest.src}
      alt={rest.alt}
      {...rest}
      width={0}
      height={0}
      sizes='100vw'
      className='mx-auto h-auto w-auto'
    />
  );
};

const P = ({ ...rest }) => (
  <p className='not-prose mt-6 leading-[1.5] lg:mt-12'>{rest.children}</p>
);

const Pre = ({ ...rest }) => (
  <div className='not-prose'>{rest.children}</div>
);

export const components = {
  a: BetterLink,
  p: P,
  pre: Pre,
  code: CodeBlock,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  H6: H6,
  img: BetterImage,
};

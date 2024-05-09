/* eslint-disable react/prop-types */
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ ...props }) => {
  // Inline code
  if (!props.className?.includes('language' || 'language-')) {
    return (
      <code className='not-prose rounded-md bg-slate-200 px-2 py-1 font-bold text-violet-600'>
        `{props.children}`
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={props.className?.replace(/(?:lang(?:uage)?-)/, '')}
      style={materialOceanic}
      wrapLines={true}
      className='not-prose mb-4 overflow-x-auto rounded-md p-4'
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

const CustomH1 = ({ ...rest }) => {
  if (rest.id) {
    return (
      <Link href={`#${rest.id}`}>
        <h1 {...rest} className='mt-16 lg:mt-32'>
          <span className='text-violet-600'>#</span> {rest.children}
        </h1>
      </Link>
    );
  }
  return <h1 {...rest} />;
};

const BetterLink = ({ ...rest }) => {
  const { href } = rest;

  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      className='not-prose rounded px-1 py-[2px] font-bold text-violet-600 transition-all duration-150 hover:bg-violet-600 hover:text-white'
      href={href}
      {...rest}
    />
  );
};

const Pre = ({ ...rest }) => {
  return <div className='not-prose' {...rest} />;
};

export const components = {
  a: BetterLink,
  pre: Pre,
  code: CodeBlock,
  h1: CustomH1,
};

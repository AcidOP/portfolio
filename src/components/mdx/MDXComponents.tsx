/* eslint-disable react/prop-types */
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ ...props }) => {
  // Inline code
  if (!props.className?.includes('language' || 'language-')) {
    return <code {...props} />;
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
    <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
  );
};

const Pre = ({ ...rest }) => {
  return <div className='not-prose' {...rest} />;
};

export const components = { a: BetterLink, pre: Pre, code: CodeBlock };

import { H1, H2, H3, H4, H5, H6 } from './text-headings';

import NextImage from 'next/image';
import Link from 'next/link';

import type { HTMLProps } from 'react';

const BetterLink = (props: HTMLProps<HTMLAnchorElement>) => {
  const styles =
    'rounded px-1 py-[2px] font-bold text-violet-600 hover:underline text-nowrap';
  const href = props.href || '';
  const isInternalLink = href.startsWith('/') || href.startsWith('#');

  if (isInternalLink)
    return (
      <Link href={href} className={styles}>
        {props.children}
      </Link>
    );

  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={styles}
    >
      {props.children} ↗
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
      className='mx-auto h-auto w-auto border-2 border-black shadow-2xl'
    />
  );
};

const p = (props: HTMLProps<HTMLParagraphElement>) => {
  return (
    <div className='not-prose mt-6 leading-[1.5] lg:mt-12'>
      {props.children}
    </div>
  );
};

export const components = {
  p,
  a: BetterLink,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  H6: H6,
  img: BetterImage,
};

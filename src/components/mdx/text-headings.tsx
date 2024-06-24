import React, { createElement } from 'react';

import { inter_900 } from '../fonts';

import { cn } from '@/utils/cn';
import { convertToString, generateSlug } from '@/utils/string';

import Link from 'next/link';

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  [key: string]: any;
}

type Heading = Omit<HeadingProps, 'as'>;

const CustomHeading = ({ as, ...rest }: HeadingProps) => {
  const slug = generateSlug(convertToString(rest.children));

  return (
    <>
      <br />
      <Link href={`#${slug}`}>
        {createElement(as, { id: slug }, rest.children)}
      </Link>
    </>
  );
};

export const Heading = ({ ...rest }: Heading) => {
  const slug = generateSlug(convertToString(rest.children));

  return (
    <>
      <br />
      <h2
        className={cn(
          'mb-4 text-4xl tracking-tight md:text-6xl lg:text-7xl',
          inter_900.className,
        )}
        id={slug}
      >
        <Link href={`#${slug}`} className='text-violet-600'>
          #
        </Link>{' '}
        {rest.children}
      </h2>
    </>
  );
};

export const H1 = (props: Heading) => <Heading {...props} />;
export const H2 = (props: Heading) => <CustomHeading as='h2' {...props} />;
export const H3 = (props: Heading) => <CustomHeading as='h3' {...props} />;
export const H4 = (props: Heading) => <CustomHeading as='h4' {...props} />;
export const H5 = (props: Heading) => <CustomHeading as='h5' {...props} />;
export const H6 = (props: Heading) => <CustomHeading as='h6' {...props} />;

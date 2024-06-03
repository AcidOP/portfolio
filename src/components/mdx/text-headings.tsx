import React, { createElement } from 'react';

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
    <Link href={`#${slug}`}>
      {createElement(
        as,
        { id: slug, ...rest, className: 'mt-16' },
        <>
          <span className='text-violet-600'>#</span> {rest.children}
        </>,
      )}
    </Link>
  );
};

export const H1 = (props: Heading) => <CustomHeading as='h1' {...props} />;
export const H2 = (props: Heading) => <CustomHeading as='h2' {...props} />;
export const H3 = (props: Heading) => <CustomHeading as='h3' {...props} />;
export const H4 = (props: Heading) => <CustomHeading as='h4' {...props} />;
export const H5 = (props: Heading) => <CustomHeading as='h5' {...props} />;
export const H6 = (props: Heading) => <CustomHeading as='h6' {...props} />;

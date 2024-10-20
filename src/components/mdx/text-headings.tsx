import { createElement } from 'react';

import { inter_900 } from '../fonts';

import { convertToString, generateSlug } from '@/utils/string';

import Link from 'next/link';

interface HeadingProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  [key: string]: any;
}

export const CustomHeading = ({
  as,
  className,
  ...rest
}: HeadingProps) => {
  const slug = generateSlug(convertToString(rest.children));

  return (
    <Link href={`#${slug}`} className={className}>
      {createElement(
        as,
        { id: slug, className: inter_900.className },
        rest.children,
      )}
    </Link>
  );
};

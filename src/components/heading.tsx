import { createElement } from 'react';

import { inter_900 } from './fonts';

import { cn } from '@/utils/cn';

interface HeadingProps {
  className?: string;
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({ text, className, as = 'h2' }: HeadingProps) => {
  return createElement(
    as,
    {
      className: cn(
        'text-6xl lg:text-8xl uppercase',
        inter_900.className,
        className,
      ),
    },
    text,
  );
};

export default Heading;

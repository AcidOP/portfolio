import { createElement } from 'react';

import { suez_400 } from './fonts';

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
        'text-6xl font-black lg:text-8xl',
        suez_400.className,
        className,
      ),
    },
    text,
  );
};

export default Heading;

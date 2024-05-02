import { FC } from 'react';

import { suez_400 } from './fonts';

import { cn } from '@/utils/cn';

interface HeadingProps {
  className?: string;
  text: string;
}

const Heading: FC<HeadingProps> = ({ text, className }) => {
  return (
    <h1
      className={cn(
        'text-6xl font-black lg:text-8xl',
        suez_400.className,
        className,
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;

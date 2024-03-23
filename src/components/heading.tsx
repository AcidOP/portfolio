import { FC } from 'react';

import { cn } from '@/utils/cn';

import { Suez_One } from 'next/font/google';

const font = Suez_One({ subsets: ['latin'], weight: '400' });

interface HeadingProps {
  className?: string;
  text: string;
}

const Heading: FC<HeadingProps> = ({ text, className }) => {
  return (
    <h1
      className={cn(
        'text-6xl font-black lg:text-8xl',
        font.className,
        className,
      )}
    >
      {text}
    </h1>
  );
};

export default Heading;

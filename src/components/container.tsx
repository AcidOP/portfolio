import { cn } from '@/utils/cn';

import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className, ...props }: IProps) => {
  return (
    <div
      className={cn(
        'mx-auto px-6 lg:max-w-[calc(100vw-8rem)] lg:px-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;

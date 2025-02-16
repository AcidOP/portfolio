import Button from './button';
import Callout from './callout';
import BetterImage from './image';
import BetterLink from './link';
import { CustomHeading } from './text-headings';
import YouTube from './youtube';

import { cn } from '@/utils/cn';

type ComponentProps = React.HTMLAttributes<HTMLElement>;

const components = {
  h1: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h2'
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-black tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h2'
      className={cn(
        'mt-10 scroll-m-20 border-b pb-1 text-4xl font-black tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h3'
      className={cn(
        'not-prose mt-8 scroll-m-20 text-5xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h4'
      className={cn(
        'mt-8 scroll-m-20 text-xl font-black tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h5'
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentProps) => (
    <CustomHeading
      as='h6'
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps) => (
    <p
      className={cn('leading-8 [&:not(:first-child)]:my-16', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentProps) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentProps) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentProps) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentProps) => (
    <blockquote
      className={cn(
        '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentProps) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentProps) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  div: ({ className, ...props }: ComponentProps) => (
    <div className={cn('my-6', className)} {...props} />
  ),
  // Image,
  a: BetterLink,
  YouTube,
  Button,
  img: BetterImage,
  Callout,
};

export default components;

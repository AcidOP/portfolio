import { cn } from '@/utils/cn';

import Link from 'next/link';

const BetterLink = ({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href || '';

  const isExternal =
    href && (href.startsWith('http') || href.startsWith('www'));

  if (isExternal) {
    return (
      <a
        className={cn(
          'not-prose font-medium underline underline-offset-4 hover:text-violet-800',
          className,
        )}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      />
    );
  }

  return (
    <Link
      className={cn(
        'font-bold tracking-tight text-violet-800 underline underline-offset-4',
        className,
      )}
      href={href || '#'}
      {...props}
    />
  );
};

export default BetterLink;

'use client';

import { cn } from '@/utils/cn';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

interface NavLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const NavLink = ({ children, className, ...rest }: NavLinkProps) => {
  const pathname = usePathname();
  const firstSlug = '/' + pathname.split('/')[1];

  let isActive = false;

  if (rest.href === firstSlug) {
    isActive = true;
  }

  return (
    <Link
      {...rest}
      // https://buttons.ibelick.com/
      className={cn(
        'group relative h-12 px-4 text-neutral-950',
        isActive ? 'font-semibold text-violet-900' : 'opacity-80',
        className,
      )}
    >
      <span className='relative inline-flex overflow-hidden'>
        <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12'>
          {children}
        </div>
        <div className='absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
          {children}
        </div>
      </span>
    </Link>
  );
};

export default NavLink;

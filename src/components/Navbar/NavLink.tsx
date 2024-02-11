'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';

interface NavLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({ children, className, ...rest }) => {
  const pathname = usePathname();
  const firstSlug = '/' + pathname.split('/')[1];

  let isActive = false;

  if (rest.href === firstSlug) {
    isActive = true;
  }

  return (
    <Link
      {...rest}
      className={clsx(isActive ? 'underline' : '', className)}
    >
      {children}
    </Link>
  );
};

export default NavLink;

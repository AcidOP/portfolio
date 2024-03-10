import { FC, ReactNode } from 'react';

import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ href, ...rest }) => {
  const isInternalLink = href.startsWith('/');
  const isAnchorLink = href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return (
    <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
  );
};

export default CustomLink;

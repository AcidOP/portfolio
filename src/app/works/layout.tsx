import Container from '@/components/container';

import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <Container>{children}</Container>;
};

export default Layout;

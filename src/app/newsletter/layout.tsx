import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <div className='overflow-hidden'>{children}</div>;
};

export default Layout;

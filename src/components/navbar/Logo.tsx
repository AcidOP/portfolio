import { inter_900 } from '../fonts';

import config from '@/data/config';
import logo from '@/data/logo.png';
import { cn } from '@/utils/cn';

import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  className?: string;
}

const Logo = ({ className }: IProps) => {
  return (
    <Link href='/' className={cn('flex items-center', className)}>
      <Image src={logo} width={50} height={50} alt='logo' />
      <span className={inter_900.className}>{config.name}</span>
    </Link>
  );
};

export default Logo;

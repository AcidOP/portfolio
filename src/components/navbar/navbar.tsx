import DropdownMenu from './dropdown';
import MobileNav from './mobile';
import NavLink from './nav-link';
import links from './navlinks';

import { inter_900 } from '@/components/fonts';
import config from '@/data/config';
import logo from '@/data/logo.png';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const headerLinks = links.filter(({ dropdown }) => !dropdown);

  return (
    <nav className='sticky top-0 z-50 mx-auto flex h-20 w-full items-center justify-between'>
      <div className='text-3xl font-bold'>
        <Link href='/' className='flex items-center'>
          <Image src={logo} width={50} height={50} alt='logo' />
          <span className={inter_900.className}>{config.name}</span>
        </Link>
      </div>

      <div className='hidden items-center text-xl font-medium lg:flex'>
        <ul className='flex space-x-6'>
          {headerLinks.map(({ url, text }) => (
            <li key={url}>
              <NavLink href={url}>{text}</NavLink>
            </li>
          ))}
        </ul>

        <div className='ml-8 '>
          <DropdownMenu />
        </div>
      </div>

      <div className='hidden lg:block'>
        <Link
          href='/contact'
          className='group relative h-12 overflow-hidden overflow-x-hidden border-2 border-black bg-white px-10 py-2 text-black'
        >
          <span className='relative z-10 font-medium transition-all duration-300 group-hover:text-white'>
            Hire Me
          </span>
          <span className='absolute inset-0 overflow-hidden'>
            <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-violet-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150'></span>
          </span>
        </Link>
      </div>

      <div className='lg:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

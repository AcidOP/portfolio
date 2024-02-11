import NavLink from './NavLink';
import { Suez_One } from 'next/font/google';

import config from '@/data/config.json';

import Link from 'next/link';
import clsx from 'clsx';

const body = Suez_One({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  return (
    <nav className='fixed top-0 flex h-20 w-screen items-center justify-between px-5 lg:px-16'>
      <div className='text-3xl font-bold'>
        <Link href='/'>{config.name}</Link>
      </div>

      <div className='hidden lg:block text-xl'>
        <ul className='flex space-x-10'>
          <li>
            <NavLink href='/'>Home</NavLink>
          </li>
          <li>
            <NavLink href='/about'>About</NavLink>
          </li>
          <li>
            <NavLink href='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink href='/blogs'>Blogs</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>

      <div>
        <button className={clsx('rounded-3xl border-2 border-black bg-gray-300 px-6 py-2 font-semibold transition-all duration-200 hover:bg-purple-600 hover:text-white', body.className)}>
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

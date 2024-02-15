import NavLink from './NavLink';

import config from '@/data/config.json';

import clsx from 'clsx';
import { Suez_One } from 'next/font/google';
import Link from 'next/link';

const body = Suez_One({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  return (
    <nav className='sticky top-0 mx-auto flex h-20 w-full items-center justify-between'>
      <div className='text-3xl font-bold'>
        <Link href='/'>{config.name}</Link>
      </div>

      <div className='hidden text-xl lg:block'>
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
        <button
          className={clsx(
            'rounded-3xl border-2 border-black bg-gray-300 px-6 py-2 font-semibold transition-all duration-200 hover:bg-purple-600 hover:text-white',
            body.className,
          )}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

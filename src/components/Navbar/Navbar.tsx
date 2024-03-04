import NavLink from './NavLink';

import config from '@/data/config';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-40 mx-auto flex h-20 w-full items-center justify-between'>
      <div className='text-3xl font-bold'>
        <Link href='/'>{config.name}</Link>
      </div>

      <div className='hidden text-xl font-medium lg:block'>
        <ul className='flex space-x-6'>
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
        <Link
          href='/contact'
          className='group relative h-12 overflow-hidden overflow-x-hidden border-2 border-black bg-white px-6 py-2 text-black'
        >
          <span className='relative z-10 font-medium transition-all duration-300 group-hover:text-white'>
            Contact Me
          </span>
          <span className='absolute inset-0 overflow-hidden'>
            <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-violet-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150'></span>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

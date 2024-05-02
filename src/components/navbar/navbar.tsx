import MobileNav from './mobile';
import NavLink from './nav-link';
import links from './navlinks';

import config from '@/data/config';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-10 mx-auto flex h-20 w-full items-center justify-between'>
      <div className='text-3xl font-bold'>
        <Link href='/'>{config.name}</Link>
      </div>

      <div className='hidden text-xl font-medium lg:block'>
        <ul className='flex space-x-6'>
          {links.map(link => (
            <li key={link.url}>
              <NavLink href={link.url}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
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

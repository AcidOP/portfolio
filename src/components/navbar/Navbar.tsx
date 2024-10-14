import Container from '../container';
import ContactButton from './ContactBtn';
import DropdownMenu from './dropdown';
import Logo from './Logo';
import MobileNav from './mobile';
import NavLink from './NavLink';
import links from './navlinks';

const Navbar = () => {
  const headerLinks = links.filter(({ dropdown }) => !dropdown);

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-white'>
      <Container className='flex h-16 items-center justify-between'>
        <Logo />

        <div className='hidden items-center text-xl font-medium lg:flex'>
          <div className='flex gap-6'>
            {headerLinks.map(({ url, text }) => (
              <NavLink key={url} href={url}>
                {text}
              </NavLink>
            ))}
          </div>
          <DropdownMenu className='ml-8' />
        </div>

        <ContactButton className='hidden lg:block' />
        <MobileNav />
      </Container>
    </nav>
  );
};

export default Navbar;

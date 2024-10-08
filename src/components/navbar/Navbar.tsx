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
    <Container className='layout-container flex h-full items-center justify-between py-5'>
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
  );
};

export default Navbar;

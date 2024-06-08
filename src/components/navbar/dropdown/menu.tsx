import { motion } from 'framer-motion';
import Link from 'next/link';

type Link = {
  url: string;
  text: string;
};

interface DropdownProps {
  links: Link[];
  toggle: () => void;
}

const Menu = ({ links, toggle }: DropdownProps) => {
  return (
    <motion.div
      initial={{ x: '-10%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '20%', opacity: 0 }}
      className='absolute right-0 top-14 z-10 flex origin-top-right flex-col rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    >
      {links.map(link => (
        <Link
          key={link.url}
          href={link.url}
          className='m-1 block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-violet-100'
          onClick={toggle}
        >
          {link.text}
        </Link>
      ))}
    </motion.div>
  );
};

export default Menu;

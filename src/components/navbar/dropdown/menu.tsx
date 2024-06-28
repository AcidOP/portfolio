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
      initial={{ y: '-10%', scale: 0, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: '-10%', scale: 0, opacity: 0 }}
      className='absolute right-0 top-14 z-10 flex origin-top-right flex-col border-2 border-black bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
    >
      {links.map(link => (
        <Link
          key={link.url}
          href={link.url}
          className='m-1 block border-2 border-transparent px-4 py-2 text-base text-gray-700 hover:border-black hover:bg-violet-200 hover:text-black'
          onClick={toggle}
        >
          {link.text}
        </Link>
      ))}
    </motion.div>
  );
};

export default Menu;

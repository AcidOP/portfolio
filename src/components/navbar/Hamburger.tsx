import { cn } from '@/utils/cn';

import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerButton = ({ isOpen, toggle }: HamburgerProps) => {
  const Icon = isOpen ? IoMdClose : IoMenu;

  return (
    <button
      onClick={toggle}
      className={cn(
        'relative rounded-full border-black text-4xl transition-all duration-200 hover:scale-95 lg:border-2 lg:bg-white lg:p-2 lg:text-2xl',
        isOpen && 'lg:bg-violet-600 lg:text-white',
      )}
      aria-label='Toggle menu'
    >
      <Icon />
    </button>
  );
};

export default HamburgerButton;

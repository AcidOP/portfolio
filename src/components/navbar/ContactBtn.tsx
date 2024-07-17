import { cn } from '@/utils/cn';

import Link from 'next/link';

interface IProps {
  className?: string;
}

const ContactButton = ({ className }: IProps) => {
  return (
    <Link
      href='/contact'
      className={cn(
        'group relative h-12 overflow-hidden overflow-x-hidden border-2 border-black bg-white px-10 py-2 text-black',
        className,
      )}
    >
      <span className='relative z-10 font-medium transition-all duration-300 group-hover:text-white'>
        Hire Me
      </span>
      <span className='absolute inset-0 overflow-hidden'>
        <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-violet-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150' />
      </span>
    </Link>
  );
};

export default ContactButton;

import { cn } from '@/utils/cn';

import { FaInfoCircle, FaLightbulb, FaSkull } from 'react-icons/fa';

import type { ReactNode } from 'react';

const calloutVariants = {
  note: {
    icon: FaInfoCircle,
    title: 'Note',
    styles: 'bg-teal-100 text-teal-950 dark:bg-teal-950 dark:text-teal-50',
  },
  tip: {
    icon: FaLightbulb,
    title: 'Tip',
    styles:
      'bg-yellow-100 text-yellow-950 dark:bg-yellow-950 dark:text-yellow-50',
  },
  danger: {
    icon: FaSkull,
    title: 'Danger',
    styles: 'bg-red-200 text-red-950 dark:bg-red-950 dark:text-red-50',
  },
};

type CalloutProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof calloutVariants;
};

const Callout = ({
  children,
  className,
  variant = 'note',
}: CalloutProps) => {
  const { icon: Icon, styles, title } = calloutVariants[variant];

  return (
    <div
      className={cn(
        'not-prose rounded-global my-4 border-2 border-black p-4 shadow-xl md:p-6 lg:p-8',
        styles,
        className,
      )}
    >
      <p className='flex items-center gap-4 pb-4'>
        <Icon className='text-2xl' />
        <span className='font-bold uppercase'>{title}</span>
      </p>
      <div className='space-y-4 text-current'>{children}</div>
    </div>
  );
};

export default Callout;

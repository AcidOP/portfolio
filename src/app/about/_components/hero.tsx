import { FC } from 'react';

import { suez_400 } from '@/components/fonts';
import { cn } from '@/utils/cn';

const Hero: FC = () => {
  return (
    <div
      className={cn(
        'flex h-[80vh] items-center justify-center',
        suez_400.className,
      )}
    >
      <p className='max-w-4xl text-center text-4xl lg:text-6xl'>
        This is Zeeshan, a fullstack developer focused on creating.
      </p>
    </div>
  );
};

export default Hero;

import { suez_400 } from '@/components/fonts';
import { cn } from '@/utils/cn';

const Hero = () => {
  return (
    <div
      className={cn(
        'flex h-[80vh] items-center justify-center',
        suez_400.className,
      )}
    >
      <h1 className='max-w-4xl text-center text-4xl lg:text-6xl'>
        This is Zeeshan, a fullstack developer focused on creating.
      </h1>
    </div>
  );
};

export default Hero;

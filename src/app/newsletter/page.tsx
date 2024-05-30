import SubscribeBox from './SubscribeBox';

import { suez_400 } from '@/components/fonts';
import { cn } from '@/utils/cn';

const NewsletterPage = () => {
  return (
    <div className='relative mx-auto mt-24 rounded-xl border-2 border-black bg-violet-800 lg:mb-48 lg:w-[80%]'>
      <div className='mx-auto w-full px-3 py-16 lg:max-w-lg lg:px-0'>
        <h1
          className={cn(
            'text-center text-6xl font-black text-white lg:text-7xl',
            suez_400.className,
          )}
        >
          Stay Updated
        </h1>

        <h2 className='mt-4 text-center text-white opacity-70'>
          Stay updated with the latest news about tech and software
          development. Don&apos;t miss out on the latest trends and
          updates.
        </h2>

        <SubscribeBox />
      </div>

      <div className='absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 opacity-50 blur-[64px]' />
      <div className='absolute bottom-0 right-0 -z-10 h-[800px] w-[800px] translate-x-1/2 translate-y-1/2 rounded-full bg-violet-500 opacity-50 blur-[64px]' />
    </div>
  );
};

export default NewsletterPage;

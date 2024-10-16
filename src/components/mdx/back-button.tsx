'use client';

import { cn } from '@/utils/cn';

import { useRouter } from 'next/navigation';

const GoBackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const previousUrl = router.back;

  return (
    <button
      onClick={previousUrl}
      className={cn(
        'rounded-md py-2 font-medium text-violet-600 transition-all duration-200 hover:bg-violet-100 hover:px-3',
        className,
      )}
    >
      <div className='inline-block rotate-180 md:mr-2'>➤</div> Go back
    </button>
  );
};

export default GoBackButton;

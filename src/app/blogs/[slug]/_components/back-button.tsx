'use client';

import { FC } from 'react';

import { useRouter } from 'next/navigation';

const GoBackButton: FC = () => {
  const router = useRouter();
  const previousUrl = router.back;

  return (
    <button
      onClick={previousUrl}
      className='rounded-md px-3 py-2 font-medium text-violet-600 transition-all duration-200 hover:bg-violet-100'
    >
      &#10554; Go back
    </button>
  );
};

export default GoBackButton;

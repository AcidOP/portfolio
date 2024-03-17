'use client';

import { FC } from 'react';

import { useRouter } from 'next/navigation';

const GoBackButton: FC = () => {
  const router = useRouter();
  const previousUrl = router.back;

  return (
    <button onClick={previousUrl} className='font-medium text-violet-600'>
      &#10554; Go back
    </button>
  );
};

export default GoBackButton;

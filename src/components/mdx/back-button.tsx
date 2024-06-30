'use client';

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();
  const previousUrl = router.back;

  return (
    <button
      onClick={previousUrl}
      className='rounded-md py-2 font-medium text-violet-600 transition-all duration-200 hover:bg-violet-100 hover:px-3'
    >
      &#10554; Go back
    </button>
  );
};

export default GoBackButton;

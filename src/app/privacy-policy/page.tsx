import Mdx from '@/components/mdx/mdx';
import { privacy } from '@/utils/works';

import { format } from 'date-fns';

const PrivacyPolicy = () => {
  const lastUpdated = format(privacy.data.lastUpdated, 'yyyy-MMM-dd');

  return (
    <>
      <div className='mx-auto my-16 w-full max-w-2xl'>
        <h1 className='text-6xl font-black'>Privacy Policy</h1>

        <p className='mt-4 text-nowrap text-gray-600'>
          Last updated:{' '}
          <span className='font-medium text-gray-800'>{lastUpdated}</span>
        </p>
      </div>

      <article className='prose mx-auto w-full max-w-2xl'>
        <Mdx content={privacy.content} />
      </article>
    </>
  );
};

export default PrivacyPolicy;

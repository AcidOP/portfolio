import ListWorks from '@/components/lists/ListWorks';
import { ScreenFitText } from '@/components/ScreenFitText';

import { allWorks } from 'contentlayer/generated';

const AllWorks = () => {
  return (
    <>
      <ScreenFitText
        text='Selected Works'
        className='my-16 hidden lg:block'
      />

      <div className='my-16 lg:hidden'>
        <ScreenFitText text='Selected' />
        <ScreenFitText text='Works' />
      </div>

      <ListWorks works={allWorks} />
    </>
  );
};

export default AllWorks;

import ListWorks from '@/components/lists/ListWorks';
import { ScreenFitText } from '@/components/ScreenFitText';

import { allWorks } from 'contentlayer/generated';

const AllWorks = () => {
  return (
    <>
      <ScreenFitText text='Selected Works' className='my-16' />
      <ListWorks works={allWorks} />
    </>
  );
};

export default AllWorks;

import Heading from '@/components/heading';
import ListWorks from '@/components/lists/ListWorks';

import { allWorks } from 'contentlayer/generated';

const AllWorks = () => {
  return (
    <>
      <Heading text='Selected Works' as='h1' className='mb-16 mt-8' />
      <ListWorks works={allWorks} />
    </>
  );
};

export default AllWorks;

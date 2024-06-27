import Tag from './Tag';

import Heading from '@/components/heading';
import { getBlogTags } from '@/utils/blog';

const AllTags = () => {
  const tags = getBlogTags();

  return (
    <>
      <Heading
        text='Blog Tags'
        as='h1'
        className='mb-16 mt-8 text-center'
      />

      <div className='mx-auto flex max-w-lg flex-wrap justify-center'>
        {Object.keys(tags).length === 0 && 'No tags found.'}

        {Object.entries(tags).map(([tag, count]) => (
          <Tag tag={tag} count={count} key={tag} />
        ))}
      </div>
    </>
  );
};

export default AllTags;

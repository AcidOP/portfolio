import Heading from '@/components/heading';
import { getAllBlogTags } from '@/utils/blog';

import Link from 'next/link';

const AllTags = () => {
  const tags = getAllBlogTags();

  return (
    <>
      <Heading text='Tags' className='text-center' />

      <div className='mx-auto space-x-5'>
        {tags.map(tag => {
          return (
            <Link href={`/tags/${tag}`} key={tag}>
              {tag}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AllTags;

import Link from 'next/link';

interface TagProps {
  tag: string;
  count: number;
}

const Tag = ({ tag, count }: TagProps) => {
  return (
    <div className='mb-2 mr-5 mt-2'>
      <Link
        href={`/tags/${tag}`}
        className='font-medium uppercase hover:underline'
      >
        <span className='text-violet-600'>#</span>
        {tag}
      </Link>{' '}
      ({count})
    </div>
  );
};

export default Tag;

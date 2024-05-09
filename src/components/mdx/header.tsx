import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  cover: string;
}

const Header = ({
  date,
  description,
  title,
  cover,
  tags,
}: HeaderProps) => {
  return (
    <>
      <h1 className='mt-10 text-4xl font-black lg:text-5xl'>{title}</h1>

      <div className='mt-4 flex items-center space-x-5'>
        {tags && (
          <div className='flex flex-wrap gap-2'>
            {tags.map(tag => (
              <Link
                href={'/tags/' + tag}
                key={tag}
                className='rounded-md bg-violet-100 px-2 py-1 font-medium text-violet-600'
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {date && (
          <h3 className='opacity-70'>{format(date, 'yyyy-MMM-dd')}</h3>
        )}
      </div>

      {cover && (
        <Image
          src={cover}
          alt='blog image cover'
          width={1920}
          height={1080}
          className='mt-7 aspect-video rounded-md object-cover'
        />
      )}

      <p className='mt-6 text-xl opacity-75'>{description}</p>

      <hr className='mt-10 w-full border border-violet-200' />
    </>
  );
};

export default Header;

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  cover: string;
  time: number;
}

const Header = ({
  date,
  description,
  title,
  cover,
  tags,
  time,
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
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {date && (
          <time className='opacity-70'>
            📅 {format(date, 'dd-MMM-yyyy').replaceAll('-', ' ')}
          </time>
        )}

        <p className='opacity-70'>⏳ {time} min read</p>
      </div>

      <Image
        src={cover}
        alt='blog image cover'
        width={1920}
        height={1080}
        className='mt-7 aspect-video rounded-md object-cover'
      />

      <p className='mt-6 text-xl opacity-75'>{description}</p>

      <hr className='mt-10 w-full border border-violet-100' />
    </>
  );
};

export default Header;

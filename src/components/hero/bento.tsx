import { FC } from 'react';

import authorImage from '../../../public/images/hero-about-transformed.webp';
import lamps from '../../../public/images/lamps.jpg';
import { inter_700, suez_400 } from '../fonts';

import { getXRecentBlogs } from '@/utils/blog';
import { cn } from '@/utils/cn';

import Image from 'next/image';
import Link from 'next/link';

const LATEST_BLOGS = 2;

const About: FC = () => {
  const recentBlogs = getXRecentBlogs(LATEST_BLOGS);
  return (
    <div
      className={cn(
        'relative mb-32 mt-16 flex flex-col gap-6 rounded-3xl lg:flex-row',
        inter_700.className,
      )}
    >
      {/* First Column */}
      <div className='rounded-3xl saturate-0 transition-all duration-200 hover:saturate-100 lg:w-1/3'>
        <Image
          src={authorImage}
          alt='Author Image'
          className='rounded-2xl border-2 border-black transition duration-200 hover:scale-105'
        />
      </div>

      {/* Second column */}
      <div className='flex w-full flex-col space-y-6 lg:max-w-md'>
        <div className='flex space-x-6 text-lg lg:max-w-md'>
          <div className='grid h-24 w-full place-content-center rounded-xl border-2 border-black bg-slate-100 text-lg font-medium transition duration-200 hover:rotate-3 hover:scale-110'>
            20+ Clients
          </div>
          <div className='grid h-24 w-full place-content-center rounded-xl border-2 border-black bg-slate-100 text-lg font-medium transition duration-200 hover:-rotate-6 hover:scale-110'>
            30+ Projects
          </div>
        </div>

        <div className='flex space-x-6 text-lg lg:max-w-md'>
          <div className='grid h-24 w-full place-content-center rounded-xl border-2 border-black bg-slate-100 text-lg font-medium transition duration-200 hover:-rotate-3 hover:scale-110'>
            4000+ Hours
          </div>
          <div className='grid h-24 w-full place-content-center rounded-xl border-2 border-black bg-slate-100 text-lg font-medium transition duration-200 hover:rotate-6 hover:scale-110'>
            2 Awards
          </div>
        </div>

        <Link
          href='/about'
          className='group relative grid h-1/3 place-content-center overflow-hidden overflow-x-hidden border-2 border-black bg-black px-10 py-6 text-white lg:py-2'
        >
          <span
            className={cn(
              'relative z-10 text-5xl font-medium text-white transition-all duration-300 lg:text-6xl',
              suez_400.className,
            )}
          >
            About Me
          </span>
          <span className='absolute inset-0 overflow-hidden'>
            <span className='absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-violet-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150' />
          </span>
        </Link>

        <div className='relative hidden h-2/3 w-full max-w-md space-x-6 object-cover text-lg saturate-0 transition-all duration-300 hover:saturate-100 lg:flex'>
          <Image
            src={lamps}
            fill
            alt='Author Image'
            className='rounded-xl border-2 border-black object-cover transition duration-200 hover:scale-105'
          />
        </div>
      </div>

      <div className='hidden w-full flex-col space-y-6 lg:flex lg:max-w-md'>
        {recentBlogs.map(blog => (
          <Link
            key={blog.data.slug}
            href={`/blogs/${blog.data.slug}`}
            className='h-full transition duration-200 hover:scale-105'
          >
            <div className='grid h-full place-content-center rounded-2xl border-2 border-black bg-slate-300 p-6 text-center text-3xl'>
              {blog.data.title} 🔗
            </div>
          </Link>
        ))}
      </div>

      <div className='absolute bottom-0 right-0 -z-10 flex h-[600px] w-[600px] -translate-x-1/2 translate-y-1/3 items-center justify-center rounded-full bg-violet-500 opacity-35 blur-[64px]' />
    </div>
  );
};

export default About;

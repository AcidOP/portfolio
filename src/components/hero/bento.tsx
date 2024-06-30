import authorImage from '../../../public/images/hero-about-transformed.webp';
import lamps from '../../../public/images/lamps.jpg';

import { inter_700, suez_400 } from '@/components/fonts';
import { getXRecentBlogs } from '@/utils/blog';
import { cn } from '@/utils/cn';

import Image from 'next/image';
import Link from 'next/link';

const LATEST_BLOGS = 2;

const SmallBox = ({ text }: { text: string }) => {
  return (
    <div className='grid h-24 w-full place-content-center rounded-xl border-2 border-black bg-slate-100 transition duration-200 hover:-rotate-6 hover:scale-110'>
      {text}
    </div>
  )
}

const About = () => {
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
          placeholder='blur'
          priority
          alt='Author Image'
          className='rounded-2xl border-2 border-black transition duration-200 hover:scale-105'
        />
      </div>

      {/* Second column */}
      <div className='flex w-full flex-col space-y-6 lg:max-w-md text-lg font-medium'>
        <div className='flex space-x-6 text-lg lg:max-w-md'>
          <SmallBox text='20+ Clients' />
          <SmallBox text='30+ Projects' />
        </div>

        <div className='flex space-x-6 text-lg font-medium lg:max-w-md'>
          <SmallBox text='4000+ Hours' />
          <SmallBox text='2 Awards' />
        </div>

        <Link
          href='/about'
          className='group grid h-1/3 place-content-center bg-black text-white text-5xl lg:text-6xl'
        >
          <span className={cn('transition-all duration-200 group-hover:scale-105', suez_400.className)}>About Me</span>
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

      {/* Third col */}
      <div className='hidden w-full flex-col space-y-6 lg:flex lg:max-w-md'>
        {recentBlogs.map(blog => (
          <Link
            key={blog.url}
            href={blog.url}
            className='relative h-full transition duration-200 hover:scale-105 rounded-2xl border-2 border-black z-10'
          >
            <Image src={blog.cover} alt={blog.title} fill className='object-cover -z-10 rounded-2xl blur-sm brightness-50 contrast-125' />

            <div className='grid h-full place-content-center text-white p-6 text-center text-3xl'>
              {blog.title}
            </div>
          </Link>
        ))}
      </div>

      <div className='absolute bottom-0 left-0 -z-10 flex h-[600px] w-[600px] rounded-full bg-violet-500 opacity-80 blur-[64px] lg:translate-x-1/2' />
    </div>
  );
};

export default About;

import { FC } from 'react';

import Image from 'next/image';

interface CalendlyProps {
  url: string;
  name: string;
}

export const revalidate = 0;

const Calendly: FC<CalendlyProps> = ({ url, name }) => {
  return (
    <div className='flex w-1/3 flex-col items-center'>
      <div className='hover:scale-105'>
        <h1 className='w-min text-nowrap text-xl font-medium'>
          Schedule a call
        </h1>

        <div className='flex items-center'>
          <Image
            src='/images/about-me-t.png'
            alt='Calendly'
            width={45}
            height={45}
            className='m-3 ml-0 rounded-full shadow-2xl'
          />

          <a
            href={url}
            target='_blank'
            rel='noreferrer noopener'
            className='w-min text-nowrap text-xl font-medium'
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Calendly;

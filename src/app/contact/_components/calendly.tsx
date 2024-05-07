import Image from 'next/image';

interface CalendlyProps {
  url: string;
  name: string;
}

const Calendly = ({ url, name }: CalendlyProps) => {
  return (
    <div className='flex flex-col items-center lg:w-1/3'>
      <a
        href={url}
        target='_blank'
        rel='noreferrer noopener'
        className='transition duration-200 hover:scale-105'
      >
        <h1 className='w-min text-nowrap text-2xl font-medium'>
          Schedule a call
        </h1>

        <div className='flex items-center'>
          <Image
            src='/images/about-me-t.png'
            alt='Calendly'
            width={64}
            height={64}
            className='m-3 ml-0 rounded-full shadow-2xl'
          />

          <div className='w-min text-nowrap text-2xl lg:text-xl'>
            {name}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Calendly;

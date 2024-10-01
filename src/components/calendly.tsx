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
            src='/images/calendly.png'
            alt='Calendly'
            width={64}
            height={64}
            className='m-3 ml-0 rounded-full border-2 border-black shadow-2xl'
          />

          <h2 className='w-min text-nowrap text-2xl lg:text-xl'>{name}</h2>
        </div>
      </a>
    </div>
  );
};

export default Calendly;

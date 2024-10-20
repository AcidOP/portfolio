import NextImage from 'next/image';

const BetterImage = ({ ...rest }) => {
  return (
    <NextImage
      src={rest.src}
      alt={rest.alt}
      {...rest}
      width={100}
      height={100}
      sizes='100vw'
      className='mx-auto h-auto w-auto border-2 border-black shadow-2xl'
    />
  );
};

export default BetterImage;

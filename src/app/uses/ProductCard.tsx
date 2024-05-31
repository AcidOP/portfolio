import Image from 'next/image';

import type { UseItem } from '@/data/uses';

const ProductCard = ({ product, img, link, title }: UseItem) => {
  return (
    <div className='flex w-full max-w-md items-center justify-between p-5 transition-transform duration-200 hover:scale-110'>
      <Image src={img} alt={`${product} image`} width={150} height={150} />

      <div className='ml-3 w-full'>
        {title && <h3>{title}:</h3>}

        {link ? (
          <a
            href={link}
            className='text-violet-800'
            target='_blank'
            rel='noopener noreferrer'
          >
            {product}
          </a>
        ) : (
          <h4>{product}</h4>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

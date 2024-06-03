import ProductCard from './ProductCard';

import uses from '@/data/uses';

const Uses = () => {
  return (
    <>
      <h1 className='sr-only'>Uses</h1>
      {Object.keys(uses).map(category => (
        <div key={category}>
          <h2 className='mt-8 text-5xl font-semibold underline'>
            {category}
          </h2>

          <div className='my-16 flex flex-wrap'>
            {uses[category].map(item => (
              <ProductCard key={item.product} {...item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Uses;

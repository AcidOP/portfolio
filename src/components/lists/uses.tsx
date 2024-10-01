import ProductCard from '@/components/cards/product';

import { Uses } from '@/data/uses';

const ListUses = ({ uses }: { uses: Uses }) => {
  return Object.keys(uses).map(category => (
    <div key={category}>
      <h2 className='mt-8 text-5xl font-semibold'>{category}:</h2>

      <div className='my-16 flex flex-wrap'>
        {uses[category].map(item => (
          <ProductCard key={item.product} {...item} />
        ))}
      </div>
    </div>
  ));
};

export default ListUses;

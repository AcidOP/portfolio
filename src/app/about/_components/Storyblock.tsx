import { FC } from 'react';
import Image from 'next/image';
import picassoImage from '../../../../public/images/woman-painting.jpeg'

const Storyblock: FC = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-between max-w-[calc(100vw-2.5rem)] lg:max-w-[calc(100vw-8rem)] mx-auto mb-16 p-16 bg-violet-700 rounded-3xl'>
      <div className='flex flex-col justify-between text-white'>
        <h2 className='text-4xl font-bold mb-10'>But first, let me tell you a story first</h2>

        <div>
          <p className='max-w-3xl opacity-80'>Pablo Picasso was sketching in a park one day when a woman recognized him and asked if he&apos;d sketch a portrait of her. He tooka few seconds to look at her before putting his pen to the paper. In a few strokes, he was done. She was thrilled when she saw the sketch, and then she asked him how much she owed him.</p>

          <p className='mt-8 opacity-80'>“5,000 francs, madam,” replied Picasso.</p>

          <p className='mt-8 opacity-80'>“5,000? But it only took you a minute!”</p>

          <p className='my-8 lg:mb-0 opacity-80'>Picasso replied, “No, madam. That took me my entire life.”</p>
        </div>
      </div>

      <div className='lg:w-1/4'>
        <Image src={picassoImage} alt='Picasso Painting' />
      </div>
    </div>
  );
};

export default Storyblock;

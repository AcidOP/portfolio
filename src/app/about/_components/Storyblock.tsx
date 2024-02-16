import { FC } from 'react';

import picassoImage from '../../../../public/images/woman-painting.jpeg';

import Image from 'next/image';

const Storyblock: FC = () => {
  return (
    <div className='mx-auto mb-16 flex w-full flex-col justify-between rounded-3xl bg-violet-700 p-16 lg:flex-row border-2 border-black'>
      <div className='flex flex-col justify-between text-white'>
        <h2 className='mb-10 text-[2.75rem] font-bold'>
          But first, let me tell you a story first
        </h2>

        <div>
          <p className='max-w-3xl opacity-85'>
            Pablo Picasso was sketching in a park one day when a woman
            recognized him and asked if he&apos;d sketch a portrait of her.
            He tooka few seconds to look at her before putting his pen to
            the paper. In a few strokes, he was done. She was thrilled when
            she saw the sketch, and then she asked him how much she owed
            him.
          </p>

          <p className='mt-8 opacity-85'>
            “5,000 francs, madam,” replied Picasso.
          </p>

          <p className='mt-8 opacity-85'>
            “5,000? But it only took you a minute!”
          </p>

          <p className='my-8 opacity-85 lg:mb-0'>
            Picasso replied, “No, madam. That took me my entire life.”
          </p>
        </div>
      </div>

      <div className='lg:w-1/4 border-2 border-black'>
        <Image src={picassoImage} alt='Picasso Painting' />
      </div>
    </div>
  );
};

export default Storyblock;

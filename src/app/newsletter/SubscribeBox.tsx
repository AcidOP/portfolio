'use client';

import { useState } from 'react';

import { inter_900 } from '@/components/fonts';
import emailoctopus from '@/components/newsletter/providers/emailoctopus';
import { cn } from '@/utils/cn';
import { isValidEmail } from '@/utils/email';

const SubscribeBox = () => {
  const [email, setEmail] = useState('');
  const disabled = !email;

  const subscribe = async () => {
    if (!isValidEmail(email)) {
      return alert('Please enter a valid email address');
    }

    const res = await emailoctopus(email);

    if (res.status === 'SUBSCRIBED') {
      setEmail('');
      return alert('Thank you for subscribing!');
    }

    if (res.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return alert('You are already subscribed');
    }
  };

  return (
    <div className='mx-1 mt-24 rounded-xl border-2 border-black bg-violet-800 px-3 py-16 lg:mx-auto lg:mb-48 lg:w-full lg:max-w-3xl lg:px-10'>
      <h1
        className={cn(
          'text-center text-6xl font-black text-white lg:text-7xl',
          inter_900.className,
        )}
      >
        Stay Updated
      </h1>

      <h2 className='mt-4 text-center text-white opacity-70'>
        Stay updated with the latest news about tech and software
        development. Don&apos;t miss out on the latest trends and updates.
      </h2>

      <label
        htmlFor='UserEmail'
        className='relative mx-6 block overflow-hidden border-b border-gray-200 bg-transparent pt-3 text-white focus-within:border-blue-600 lg:mt-8'
      >
        <input
          type='email'
          id='UserEmail'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          className='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
        />

        <span className='absolute start-0 top-2 -translate-y-1/2 text-white opacity-90 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-sm'>
          Email
        </span>
      </label>

      <button
        onClick={subscribe}
        className={cn(
          'right-1/2 mt-4 w-1/2 translate-x-1/2 transform bg-black py-2 text-xl text-white',
          disabled
            ? 'cursor-not-allowed'
            : 'transition-all hover:scale-105',
        )}
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeBox;

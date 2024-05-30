'use client';

import { useState } from 'react';

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
    <>
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
    </>
  );
};

export default SubscribeBox;

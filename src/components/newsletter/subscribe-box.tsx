'use client';

import { useState } from 'react';

import DisplayConfetti from '../confetti';

import { isValidEmail } from '@/utils/email';

const SubscribeBox = () => {
  const [email, setEmail] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubscribe = async () => {
    if (!isValidEmail(email)) {
      return alert('Please enter a valid email address');
    }

    const emailoctopus = (await import('./providers/emailoctopus'))
      .default;

    const res = await emailoctopus(email);

    if (res.status === 'SUBSCRIBED') {
      setShowConfetti(true);
      setEmail('');
    }

    if (res.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
      return alert('You are already subscribed');
    }
  };

  return (
    <div className='flex'>
      <input
        type='email'
        placeholder='Enter your email'
        className='h-10 w-2/3 border-2 border-violet-600 p-3'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button
        onClick={handleSubscribe}
        className='group relative ml-3 h-10 border-2 border-black bg-violet-600 px-6 font-medium text-white transition-all duration-300 hover:bg-black'
      >
        Subscribe
      </button>

      {showConfetti && <DisplayConfetti showConfetti={showConfetti} />}
    </div>
  );
};

export default SubscribeBox;

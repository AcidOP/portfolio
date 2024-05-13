import AnimatedTooltip from '../animated-tooltip';
import SubscribeBox from './subscribe-box';

import Link from 'next/link';

const Newsletter = () => {
  const people = [
    {
      id: 1,
      name: 'Ronald Johnson',
      designation: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Julie Smith',
      designation: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      name: 'Brended Nelson',
      designation: 'Fullstack Developer',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Dora',
      designation: 'Freelancer',
      image:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80',
    },
  ];

  return (
    <div>
      <p className='mb-2 font-medium opacity-70'>
        Join our newsletter to get updates on new things in our community.
      </p>

      <SubscribeBox />

      <div className='my-3 flex w-full flex-row items-center'>
        <AnimatedTooltip items={people} />

        <p className='pl-6'>
          and <span className='font-semibold text-violet-600'>136+ </span>
          others are subscribed
        </p>
      </div>

      <p className='mt-4 w-full max-w-md text-xs'>
        By subscribing you agree to with our{' '}
        <Link
          href='/privacy-policy'
          className='font-semibold text-violet-600 underline'
        >
          Privacy Policy
        </Link>{' '}
        and provide consent to receive updates from me.
      </p>
    </div>
  );
};

export default Newsletter;

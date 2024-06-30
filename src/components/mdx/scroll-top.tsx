'use client';

import { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return show ? (
    <button
      onClick={scrollTop}
      className='fixed bottom-0 right-0 m-6 border-2 border-black bg-violet-100 p-3 transition-all hover:scale-110 hover:bg-violet-600 hover:text-white'
    >
      <FaArrowUp />
    </button>
  ) : (
    <></>
  );
};

export default ScrollTop;

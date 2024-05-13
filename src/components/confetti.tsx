'use client';

import { useEffect, useState } from 'react';

import Confetti from 'react-confetti';

interface ConfettiProps {
  showConfetti: boolean;
}

const DisplayConfetti = ({ showConfetti }: ConfettiProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
        />
      )}
    </>
  );
};

export default DisplayConfetti;

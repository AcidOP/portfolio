/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';

interface Props {
  timezone: string;
}

const TimeDisplay = ({ timezone }: Props) => {
  const [currentTime, setCurrentTime] = useState('');
  const [isClient, setIsClient] = useState(false);

  const getISTTime = () => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
      hour12: false,
    };
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(
      date,
    );
    return `${timeString} UTC+05:30`;
  };

  useEffect(() => {
    setIsClient(true);
    setCurrentTime(getISTTime());
  }, []);

  useEffect(() => {
    if (isClient) {
      const timerId = setInterval(() => {
        setCurrentTime(getISTTime());
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isClient]);

  if (!isClient) return null;

  return currentTime;
};

export default TimeDisplay;

/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';

interface Props {
  timezone: string;
}

const TimeDisplay = ({ timezone }: Props) => {
  const [currentTime, setCurrentTime] = useState('');

  const getISTTime = () => {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
      hour12: false,
      timeZoneName: 'short',
    };

    const timeString = new Intl.DateTimeFormat('en-GB', options).format(
      date,
    );

    return timeString;
  };

  useEffect(() => {
    setCurrentTime(getISTTime());

    const timerId = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return currentTime;
};

export default TimeDisplay;

const calculateReadingTime = (text: string, wpm: number = 150): number => {
  const words = text.trim().split(/\s+/).length;
  const readingTime = words / wpm;

  return Math.ceil(readingTime);
};

export default calculateReadingTime;

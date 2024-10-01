'use client';

import { useEffect, useRef } from 'react';

import { inter_900 } from './fonts';

import { cn } from '@/utils/cn';

import Link from 'next/link';

interface IProps {
  text: string;
  href?: string;
  className?: string;
}

export const ScreenFitText = ({ text, href, className }: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => {
      window.removeEventListener('resize', resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + 'px';

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + 'px';
  };

  return (
    <div
      className={cn(
        'relative flex h-auto w-full items-center overflow-hidden pb-5 transition-all duration-200 lg:pt-3',
        className,
      )}
      ref={containerRef}
    >
      <span
        className={cn(
          'relative bottom-0 left-0 mx-auto whitespace-nowrap text-nowrap text-center text-5xl font-extrabold uppercase leading-[80%] lg:text-[12rem]',
          // Hover animation for links
          href &&
            'after:absolute after:-bottom-2 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-600 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100',
          inter_900.className,
        )}
        ref={textRef}
      >
        {href ? <Link href={href}>{text}</Link> : text}
      </span>
    </div>
  );
};

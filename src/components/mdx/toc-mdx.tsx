'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/utils/cn';

import Link from 'next/link';

type contentType = { text: string; slug: string; depth: number };

interface TOCProps {
  contents: contentType[];
  className?: string;
}

const Toc = ({ contents, className }: TOCProps) => {
  const [active, setActive] = useState('');
  const allAnchorLinksRef = useRef<NodeListOf<HTMLElement>>();
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    allAnchorLinksRef.current = document.querySelectorAll('h2[id]');
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    });
    allAnchorLinksRef.current.forEach(e =>
      observerRef.current?.observe(e),
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  if (!contents.length) return null;

  return (
    <div className={cn('sticky top-16 h-min max-w-sm', className)}>
      <nav className='pl-8'>
        <h4 className='pb-4 text-2xl font-bold'>On this page</h4>

        <ul>
          {contents.map(content => {
            if (content.depth > 2) return;
            const isActive = active === content.slug;
            return (
              <li key={content.slug}>
                <Link
                  href={`#${content.slug}`}
                  className={cn(
                    'block px-4 py-2 text-gray-600 hover:text-violet-600',
                    'border-l-2 border-gray-300',
                    isActive && 'border-violet-600 text-violet-600',
                  )}
                >
                  {content.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Toc;

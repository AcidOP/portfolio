import Link from 'next/link';

interface PaginationProps {
  total: number;
  current: number;
}

// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/layouts/ListLayout.tsx
const Pagination = ({ current, total }: PaginationProps) => {
  const prevPage = current - 1 > 0;
  const nextPage = current + 1 <= total;

  return (
    <div className='mx-auto mt-8 flex w-full max-w-xl justify-between text-xl'>
      {!prevPage && (
        <button
          className='disabled:cursor-not-allowed disabled:opacity-50'
          disabled={!prevPage}
        >
          Previous
        </button>
      )}

      {prevPage && (
        <Link
          href={current === 2 ? '/blogs' : `/blogs/page/${current - 1}`}
        >
          Previous
        </Link>
      )}

      <div>
        {current} of {total}
      </div>

      {!nextPage && (
        <button
          className='disabled:cursor-not-allowed disabled:opacity-50'
          disabled={!nextPage}
        >
          Next
        </button>
      )}

      {nextPage && <Link href={`/blogs/page/${current + 1}`}>Next</Link>}
    </div>
  );
};

export default Pagination;

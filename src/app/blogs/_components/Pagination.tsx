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
          className='cursor-not-allowed disabled:opacity-50'
          disabled={!prevPage}
        >
          Previous
        </button>
      )}

      {prevPage && (
        <Link href={`/blogs/page/${current - 1}`}>Previous</Link>
      )}

      <span>
        {current} of {total}
      </span>

      {!nextPage && (
        <button
          className='cursor-not-allowed disabled:opacity-50'
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

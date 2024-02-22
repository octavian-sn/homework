import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [cursor, setCursor] = useState<string | null>(null);

  const nextPage = (hasNextPage: boolean, endCursor: string | null) => {
    if (hasNextPage) {
      setPage(page + 1);
      setCursor(endCursor);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      setCursor(null); // Reset cursor to fetch previous page
    }
  };

  return { page, cursor, nextPage, prevPage };
};

export default usePagination;

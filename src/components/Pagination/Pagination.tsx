import { BACK_ARROW } from '@/constants/images';
import Image from 'next/image';
import { StyledPagination } from './Pagination.styled';
import { PaginationProps } from './Pagination.types';

function Pagination({ data, onFetchData }: PaginationProps) {
  const resultsPerPage = 10;
  const totalPages = Math.ceil(data.count / resultsPerPage);

  const currentPage = (() => {
    if (data.previous) {
      const prevPage = new URL(data.previous).searchParams.get('page');
      return prevPage ? Number(prevPage) + 1 : 1;
    } else if (data.next) {
      const nextPage = new URL(data.next).searchParams.get('page');
      return nextPage ? Number(nextPage) - 1 : 1;
    }
    return 1;
  })();

  return (
    <StyledPagination>
      <button
        className="arrow arrow-left"
        onClick={() => data.previous && onFetchData(data.previous!)}
        disabled={!data.previous}
      >
        <Image alt="arrow left" src={BACK_ARROW} width={30} height={30} />
      </button>
      <p className="page-count">
        {currentPage} / {totalPages}
      </p>
      <button
        className="arrow arrow-right"
        onClick={() => data.next && onFetchData(data.next!)}
        disabled={!data.next}
      >
        <Image alt="arrow right" src={BACK_ARROW} width={30} height={30} />
      </button>
    </StyledPagination>
  );
}

export default Pagination;

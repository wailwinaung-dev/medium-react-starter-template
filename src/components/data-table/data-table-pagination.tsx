import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from '@/components/ui/pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

function getPageRange(current: number, total: number): (number | 'ellipsis')[] {
  const delta = 2;
  const range: (number | 'ellipsis')[] = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);
  if (left > 2) range.push('ellipsis');

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push('ellipsis');
  if (total > 1) range.push(total);

  return range;
}

interface DataTablePaginationProps {
  page: number;
  totalPages: number;
  pageSize: number;
  total: number;
}

export function DataTablePagination({
  page,
  totalPages,
  pageSize,
  total
}: DataTablePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [seletedPageSize, setSelectedPageSize] = useState(pageSize);
  const pageRange = getPageRange(page, totalPages);

  const handlePageChange = (
    newPage: number,
    limit: number = seletedPageSize
  ) => {
    searchParams.set('page', newPage.toString());
    searchParams.set('limit', limit.toString());
    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="text-sm text-muted-foreground">
        Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)}{' '}
        of {total} row(s)
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <select
            value={seletedPageSize}
            onChange={(e) => {
              setSelectedPageSize(() => Number(e.target.value));
              handlePageChange(1, Number(e.target.value));
            }}
            className="h-8 w-[70px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {page} of {totalPages}
        </div>
        <Pagination className="w-auto m-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page > 1) handlePageChange(page - 1);
                }}
                className={page <= 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {pageRange.map((p, i) =>
              p === 'ellipsis' ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={p}>
                  <PaginationLink
                    href="#"
                    isActive={p === page}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(p);
                    }}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (page < totalPages) handlePageChange(page + 1);
                }}
                className={
                  page >= totalPages ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

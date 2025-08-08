import { useGetTransactions } from '@/api/queries/transaction.query';
import { columns } from './components/columns';
import { DataTable } from '@/components/data-table/data-table';
import { TransactionsFilterForm } from './components/transactions-filter-form';

export default function TransactionPage() {
  const { data, isFetching, isLoading } = useGetTransactions();

  return (
    <>
      <TransactionsFilterForm />

      <DataTable
        columns={columns}
        data={data?.data!}
        isLoading={!data && (isLoading || isFetching)}
        total={data?.total!}
        pageSize={data?.limit!}
        page={data?.page!}
        totalPages={data?.totalPages!}
      />
    </>
  );
}

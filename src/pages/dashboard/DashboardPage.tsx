import type { UseQueryResult } from '@tanstack/react-query';
import { RecentTransactions } from './components/recent-transactions';
import { StatusCount } from './components/status-count';
import { useGetDashboardTransactions } from '@/api/queries/transaction.query';
import type { Transaction } from '../transaction/types/transaction.type';
import { DashboardSkeleton } from './components/dashboard-skeleton';

export default function DashboardPage() {
  const {
    data,
    isFetching,
    isLoading
  }: UseQueryResult<{
    completedCount: number;
    pendingCount: number;
    failedCount: number;
    transactions: Transaction[];
  }> = useGetDashboardTransactions();

  if (!data || (!data.transactions && (isLoading || isFetching))) {
    return <DashboardSkeleton />;
  }
  return (
    // <div className="flex min-h-screen w-full flex-col bg-muted/40">
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <StatusCount
        completedCount={data.completedCount}
        pendingCount={data.pendingCount}
        failedCount={data.failedCount}
      />
      <RecentTransactions transactions={data.transactions} />
    </div>
    // </div>
  );
}

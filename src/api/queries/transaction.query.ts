import { transactionKeys } from '@/api/quey-keys/query-key';
import {
  getDashboardTransaction,
  getTransactions
} from '@/api/services/transaction.service';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
export function useGetTransactions() {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  return useQuery({
    queryKey: transactionKeys.list(query),
    queryFn: () => getTransactions(query),
    select: (data) => data.data
  });
}

export function useGetDashboardTransactions() {
  return useQuery({
    queryKey: transactionKeys.dashboardTransactions(),
    queryFn: () => getDashboardTransaction(),
    select: (data) => data.data
  });
}

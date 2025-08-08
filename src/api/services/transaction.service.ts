import type { Transaction } from '@/pages/transaction/types/transaction.type';
import { mockTransactions } from '../mocking/transactions.mock';

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  limit: number;
  page: number;
  totalPages: number;
}

export function getTransactions(
  query: string
): Promise<{ data: PaginatedResponse<Transaction> }> {
  return Promise.resolve({
    data: {
      data: mockTransactions,
      total: mockTransactions.length,
      limit: 10,
      page: 1,
      totalPages: Math.ceil(mockTransactions.length / 10)
    }
  });
}

export function getDashboardTransaction() {
  return Promise.resolve({
    data: {
      completedCount: 5,
      pendingCount: 3,
      failedCount: 2,
      transactions: mockTransactions.slice(0, 10) // Assuming you want the first
    }
  });
}

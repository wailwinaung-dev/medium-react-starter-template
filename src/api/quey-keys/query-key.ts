export const transactionKeys = {
  all: ['transactions'] as const,
  list: (query: string) => [...transactionKeys.all, { query }] as const,
  dashboardTransactions: () => [...transactionKeys.all, 'dashboard']
};

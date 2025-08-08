/* eslint-disable @typescript-eslint/no-unused-vars */
// types/react-table.d.ts or anywhere globally
import '@tanstack/react-table';
import type { RowData } from '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData extends RowData, TValue> {
    className?: string;
  }
}

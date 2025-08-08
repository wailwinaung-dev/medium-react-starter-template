import type { ColumnDef } from '@tanstack/react-table';
import type { Transaction } from '../types/transaction.type';
import { Badge } from '@/components/ui/badge';
import { reableDate } from '@/lib/utils';

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'createdAt',
    header: 'Date',
    cell: ({ row }) => {
      const date = row.getValue('createdAt') as string;
      return date ? reableDate(date) : '';
    }
  },
  {
    accessorKey: 'trxnRef',
    header: 'Slip No'
  },
  {
    accessorKey: 'sender.name',
    header: 'Sender Name'
  },
  {
    accessorKey: 'sender.passportOrId',
    header: 'ID or Passport No'
  },
  {
    accessorKey: 'sender.mobileNumber',
    header: `Contact No`
  },
  {
    accessorKey: 'sender.address.country',
    header: `Country Name`
  },
  {
    accessorKey: 'transactionInfo.sourceAmount',
    header: `Deposit Amount`,
    cell: ({ cell }) => {
      return (cell.getValue() as number).toLocaleString();
    },
    meta: {
      className: 'text-right'
    }
  },
  {
    accessorKey: 'transactionInfo.sourceCurrency',
    header: `Deposit Currency`
  },
  {
    accessorKey: 'beneficiary.name',
    header: `Benificiary Name`
  },
  {
    accessorKey: 'beneficiary.paymentType',
    header: `Withdraw Type`
  },
  {
    accessorKey: 'beneficiary.paymentAccount',
    header: `Withdraw Account`
  },
  {
    accessorKey: 'transactionInfo.rate',
    header: `Exchange Rate`
  },
  {
    accessorKey: 'transactionInfo.destinationAmount',
    header: `Withdraw Amount`,
    cell: ({ cell }) => {
      return (cell.getValue() as number).toLocaleString();
    },
    meta: {
      className: 'text-right'
    }
  },
  {
    accessorKey: 'transactionInfo.fee',
    header: `Service Charge`,
    cell: ({ cell }) => {
      return (cell.getValue() as number).toLocaleString();
    },
    meta: {
      className: 'text-right'
    }
  },
  {
    accessorKey: 'transactionInfo.feeCurrency',
    header: `Withdraw Currency`
  },
  {
    accessorKey: 'callerBackend',
    header: 'Channel',
    cell: ({ cell }) => {
      return String(cell.getValue()).toUpperCase();
    }
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status');
      let statusColor = '';
      switch (status) {
        case 'COMPLETED':
          statusColor = 'text-green-500';
          break;
        case 'FAILED':
          statusColor = 'text-red-500';
          break;
        case 'PENDING':
          statusColor = 'text-yellow-500';
          break;
        default:
          statusColor = '';
      }
      return (
        <Badge className={statusColor} variant="outline">
          {String(status)}
        </Badge>
      );
    }
  }
];

import type { Transaction } from '@/pages/transaction/types/transaction.type';

const mockTransaction: Transaction = {
  _id: '64e4c8930b9f9f6e3c123456',
  trxnRef: 'TRX-20250808-001',
  purposeOfTransaction: 'Family support',
  status: 'COMPLETED',
  callerBackend: 'system-backend',
  sender: {
    name: 'Aung Aung',
    passportOrId: 'MP1234567',
    mobileNumber: '+959123456789',
    workPermitNumber: 'WP-99887766',
    address: {
      firstLine: 'Room 301, Building B',
      city: 'Yangon',
      country: 'Myanmar',
      postCode: '11181'
    }
  },
  beneficiary: {
    name: 'Mg Mg',
    NRC: '12/PaTaNa(N)123456',
    mobileNumber: '+959876543210',
    paymentType: 'Bank Transfer',
    paymentAccount: 'KBZ123456789',
    address: {
      firstLine: 'No.123, Kyaikkasan Rd',
      city: 'Mandalay',
      country: 'Myanmar',
      postCode: '05011'
    }
  },
  transactionInfo: {
    sourceCurrency: 'SGD',
    destinationCurrency: 'MMK',
    sourceAmount: 1000,
    destinationAmount: 2500000,
    totalSourceAmount: 1015, // sourceAmount + fee
    rate: 2500,
    fee: 15,
    feeCurrency: 'SGD',
    feeInfo: 'Flat fee',
    totalDestinationAmount: 2500000,
    fxRateUSD: 0.74,
    equivalentUSD: 740
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export const mockTransactions: Transaction[] = Array.from(
  { length: 5 },
  (_, i) => ({
    ...mockTransaction,
    _id: `64e4c8930b9f9f6e3c12345${i}`,
    trxnRef: `TRX-20250808-00${i + 1}`,
    sender: {
      ...mockTransaction.sender,
      name: `Sender ${i + 1}`,
      passportOrId: `MP12345${i + 1}`
    },
    beneficiary: {
      ...mockTransaction.beneficiary,
      name: `Beneficiary ${i + 1}`,
      NRC: `12/PaTaNa(N)12345${i + 1}`
    },
    transactionInfo: {
      ...mockTransaction.transactionInfo,
      sourceAmount: 1000 + i * 50,
      destinationAmount: (1000 + i * 50) * 2500,
      totalSourceAmount: 1015 + i * 5,
      equivalentUSD: (1000 + i * 50) * 0.74
    },
    createdAt: new Date(Date.now() - i * 86400000).toISOString(), // spread over days
    updatedAt: new Date(Date.now() - i * 86400000).toISOString()
  })
);

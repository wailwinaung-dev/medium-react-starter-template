export interface Address {
  firstLine: string;
  city: string;
  country: string;
  postCode?: string;
}

export interface Sender {
  name: string;
  passportOrId: string;
  mobileNumber: string;
  workPermitNumber?: string;
  address: Address;
}

export interface Beneficiary {
  name: string;
  NRC: string;
  mobileNumber: string;
  paymentType: string;
  paymentAccount: string;
  address: Address;
}

export interface TransactionInfo {
  sourceCurrency: string;
  destinationCurrency: string;
  sourceAmount: number;
  destinationAmount: number;
  totalSourceAmount: number;
  rate: number;
  fee: number;
  feeCurrency: string;
  feeInfo?: string;
  totalDestinationAmount: number;
  fxRateUSD: number;
  equivalentUSD: number;
}

export interface Transaction {
  _id?: string;
  trxnRef: string;
  purposeOfTransaction: string;
  status: string;
  callerBackend: string;
  sender: Sender;
  beneficiary: Beneficiary;
  transactionInfo: TransactionInfo;
  createdAt: string; // ISO string from MongoDB
  updatedAt: string;
}

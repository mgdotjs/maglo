export interface IFinancialSummary {
  amount: number
  change: {
    percentage: number
    trend: 'up' | 'down'
  }
  currency: string
}

export interface IFinancialResponse {
  success: boolean
  message: string
  data: {
    lastUpdated: string
    totalBalance: IFinancialSummary
    totalExpense: IFinancialSummary
    totalSavings: IFinancialSummary
  }
}

export interface IWorkingCapitalItem {
  month: string
  income: number
  expense: number
  net: number
}

export interface IWorkingCapitalResponse {
  success: boolean
  message: string
  data: {
    period: string
    currency: string
    data: IWorkingCapitalItem[]
    summary: {
      totalIncome: number
      totalExpense: number
      netBalance: number
    }
  }
}

export interface ITransaction {
  id: string
  name: string
  business: string
  type: string
  amount: number
  date: string
  icon: string
  currency: string
  status: 'completed' | 'pending' | 'failed'
  image: string
}

export interface ITransactionResponse {
  success: boolean
  message: string
  data: {
    summary: {
      totalIncome: number
      totalExpense: number
      count: number
    }
    transactions: ITransaction[]
  }
}

export interface IWalletCard {
  id: string
  bank: string
  cardNumber: string
  color: string
  expiryMonth: number
  expiryYear: number
  isDefault: boolean
  name: string
  type: 'credit' | 'debit'
  network: 'visa' | 'mastercard'
}
export interface IWalletCardResponse {
  success: boolean
  message: string
  data: {
    cards: IWalletCard[]
  }
}

export interface IScheduledTransfer {
  id: string
  name: string
  image: string
  date: string
  amount: number
  currency: string
  status: 'scheduled' | 'completed' | 'canceled'
}
export interface IScheduledTransferResponse {
  success: boolean
  message: string
  data: {
    transfers: IScheduledTransfer[]
    summary: {
      totalScheduledAmount: number
      count: number
    }
  }
}

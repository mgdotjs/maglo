import apiClient from './client'
import { API_ENDPOINTS } from '@/constants/api.constants'
import type {
  IFinancialResponse,
  IWorkingCapitalResponse,
  ITransactionResponse,
  IWalletCardResponse,
  IScheduledTransferResponse,
} from '@/types/dashboard.types'

export const dashboardApi = {
  getFinancialSummary: async (): Promise<IFinancialResponse> => {
    const response = await apiClient.get<IFinancialResponse>(API_ENDPOINTS.FINANCIAL_SUMMARY)
    return response.data
  },

  getWorkingCapital: async (): Promise<IWorkingCapitalResponse> => {
    const response = await apiClient.get<IWorkingCapitalResponse>(API_ENDPOINTS.WORKING_CAPITAL)
    return response.data
  },

  getRecentTransactions: async (): Promise<ITransactionResponse> => {
    const response = await apiClient.get<ITransactionResponse>(API_ENDPOINTS.RECENT_TRANSACTIONS)
    return response.data
  },

  getWallet: async (): Promise<IWalletCardResponse> => {
    const response = await apiClient.get<IWalletCardResponse>(API_ENDPOINTS.WALLET)
    return response.data
  },

  getScheduledTransfers: async (): Promise<IScheduledTransferResponse> => {
    const response = await apiClient.get<IScheduledTransferResponse>(
      API_ENDPOINTS.SCHEDULED_TRANSFERS,
    )
    return response.data
  },
}

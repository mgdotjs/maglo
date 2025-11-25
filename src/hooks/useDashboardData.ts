import { useQuery } from '@tanstack/react-query'

import { dashboardApi } from '@/lib/api/dashboard'

export const useFinancialSummary = () => {
  return useQuery({
    queryKey: ['financial-summary'],
    queryFn: dashboardApi.getFinancialSummary,
    staleTime: 1000 * 60 * 0.5, // 30 seconds
  })
}

export const useWorkingCapital = () => {
  return useQuery({
    queryKey: ['working-capital'],
    queryFn: dashboardApi.getWorkingCapital,
  })
}

export const useWallet = () => {
  return useQuery({
    queryKey: ['wallet'],
    queryFn: dashboardApi.getWallet,
    staleTime: 1000 * 60 * 0.5, // 30 seconds
  })
}

export const useRecentTransactions = () => {
  return useQuery({
    queryKey: ['recent-transactions'],
    queryFn: dashboardApi.getRecentTransactions,
  })
}

export const useScheduledTransfers = () => {
  return useQuery({
    queryKey: ['scheduled-transfers'],
    queryFn: dashboardApi.getScheduledTransfers,
  })
}

export const API_BASE_URL = 'https://case.nodelabs.dev/api'

export const API_ENDPOINTS = {
  // Auth
  REGISTER: '/users/register',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  REFRESH_TOKEN: '/users/refresh-token',
  PROFILE: '/users/profile',

  // Financial
  FINANCIAL_SUMMARY: '/financial/summary',
  WORKING_CAPITAL: '/financial/working-capital',
  WALLET: '/financial/wallet',
  RECENT_TRANSACTIONS: '/financial/transactions/recent',
  SCHEDULED_TRANSFERS: '/financial/transfers/scheduled',
} as const

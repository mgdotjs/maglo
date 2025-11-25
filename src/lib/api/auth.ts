import apiClient from './client'
import { API_ENDPOINTS } from '@/constants/api.constants'
import type {
  LoginRequest,
  RegisterRequest,
  LoginResponse,
  User,
  RegisterResponse,
} from '@/types/auth.types'

export const authApi = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.LOGIN, credentials)
    return response.data
  },

  register: async (data: RegisterRequest): Promise<RegisterResponse> => {
    const response = await apiClient.post(API_ENDPOINTS.REGISTER, data)
    return response.data
  },

  logout: async (): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.LOGOUT)
  },

  refreshToken: async () => {
    const { data } = await apiClient.post(
      API_ENDPOINTS.REFRESH_TOKEN,
      {},
      {
        withCredentials: true,
      },
    )
    return data
  },

  getProfile: async (): Promise<User> => {
    const response = await apiClient.get<User>(API_ENDPOINTS.PROFILE)
    return response.data
  },
}

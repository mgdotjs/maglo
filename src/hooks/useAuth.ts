import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { toast } from 'sonner'

import { useAuthStore } from '@/store/authStore'
import { authApi } from '@/lib/api/auth'
import { handleApiError } from '@/lib/utils/error-handler'
import type { LoginRequest, RegisterRequest } from '@/types/auth.types'

export const useLogin = () => {
  const navigate = useNavigate()
  const setAuth = useAuthStore((state) => state.setAuth)
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),
    onSuccess: (response) => {
      const { user, accessToken } = response.data
      setAuth(user, accessToken)
      toast.success('Welcome back!', {
        description: 'You have successfully signed in.',
      })
      navigate('/dashboard')
    },
    onError: (error: unknown) => {
      handleApiError(error, 'Failed to sign in. Please try again.')

      // const errorMessage = error instanceof Error ? error.message : 'Invalid email or password'
      // toast.error('Login failed', {
      //   description: errorMessage,
      // })
    },
  })
}

export const useRegister = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (data: RegisterRequest) => authApi.register(data),
    onSuccess: () => {
      toast.success('Account created!', {
        description: 'Welcome to Maglo! Your account has been created successfully.',
      })
      navigate('/sign-in')
    },
    onError: (error: unknown) => {
      console.log('register error', error)
      handleApiError(error, 'Failed to create account. Please try again.')
      // const errorMessage =
      //   error instanceof Error ? error.message : 'Failed to create account. Please try again.'
      // toast.error('Registration failed', {
      //   description: errorMessage,
      // })
    },
  })
}

export const useLogout = () => {
  const navigate = useNavigate()
  const clearAuth = useAuthStore((state) => state.clearAuth)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearAuth()
      queryClient.clear()
      navigate('/sign-in')
    },
    onError: () => {
      clearAuth()
      queryClient.clear()
      navigate('/sign-in')
    },
  })
}

export const useAuth = () => {
  const { user, isAuthenticated } = useAuthStore()
  const logout = useLogout()

  return {
    user,
    isAuthenticated,
    logout: logout.mutate,
    isLoggingOut: logout.isPending,
  }
}

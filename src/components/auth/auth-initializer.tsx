import { useEffect, useState } from 'react'

import { useAuthStore } from '@/store/authStore'
import { authApi } from '@/lib/api/auth'

export default function AuthInitializer({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const { isAuthenticated, isInitialized, setAuth, clearAuth, setInitialized } = useAuthStore()

  useEffect(() => {
    const initializeAuth = async () => {
      if (isInitialized) {
        setIsLoading(false)
        return
      }

      if (isAuthenticated) {
        try {
          const accessToken = await authApi.refreshToken()
          const user = await authApi.getProfile()
          setAuth(user, accessToken)
        } catch (error) {
          console.error('❌ Auth initialization failed:', error)
          clearAuth()
        }
      }

      setInitialized(true)
      setIsLoading(false)
    }

    initializeAuth()
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

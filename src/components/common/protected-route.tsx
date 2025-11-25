import { Navigate, Outlet } from 'react-router'
import { useAuthStore } from '@/store/authStore'

interface ProtectedRouteProps {
  allowedRoles?: string[]
  redirectTo?: string
}

export default function ProtectedRoute({
  allowedRoles,
  redirectTo = '/sign-in',
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isInitialized } = useAuthStore()

  // Auth initialization bekleniyor
  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Yükleniyor...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  // Auth kontrolü
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />
  }

  // Role kontrolü
  if (allowedRoles && user && user.role && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
}

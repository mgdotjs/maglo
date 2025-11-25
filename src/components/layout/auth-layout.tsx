import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

import { useAuthStore } from '@/store/authStore'

import { Button } from '@/components/ui/button'
import { Icon, ToggleTheme } from '@/components/common'

export default function AuthLayout({
  page = 'sign-in',
  children,
}: {
  page?: string
  children: React.ReactNode
}) {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="flex min-h-screen max-sm:min-h-dvh">
      <div className="flex flex-1 flex-col items-center px-4">
        <div className="mb-auto w-full max-w-[404px] py-10 flex items-center justify-between">
          <Link to="/">
            <Icon name="logo" width={110} height={30} className="dark:text-primary" />
          </Link>
          <ToggleTheme />
        </div>
        <div className="flex flex-1 flex-col justify-center w-full max-w-[404px]">
          {children}

          <div className="space-y-4 mt-4">
            <Button variant="outline" className="w-full">
              <Icon name="google" />
              <span className="text-text-3 dark:text-gray-1">Sign in with google</span>
            </Button>
            <div className="text-center text-sm text-text-2">
              {page !== 'sign-in' ? 'Already have an account? ' : "Don't have an account? "}
              <Link
                to={page !== 'sign-in' ? '/sign-in' : '/sign-up'}
                className="text-text-1 dark:text-gray-1 relative font-medium">
                {page !== 'sign-in' ? 'Sign in' : 'Sign up'}
                <Icon
                  name="shape"
                  width={45}
                  height={12}
                  className="absolute -bottom-3.5 left-1/2 transform -translate-x-1/2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
        <img
          src="/login.jpg"
          alt="Financial dashboard illustration"
          className="max-w-5xl max-h-5xl w-full h-full object-cover relative z-10 animate-in fade-in zoom-in-95 duration-700"
        />
      </div>
    </div>
  )
}

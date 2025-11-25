import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'sonner'

import { authApi } from '@/lib/api/auth'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/store/authStore'

import { Icon } from '@/components/common'
import { useSidebarStore } from '@/store/sidebarStore'
import { Button } from '../ui/button'

const menuItems = [
  { icon: 'home', label: 'Dashboard', path: '/dashboard' },
  { icon: 'transaction', label: 'Transactions', path: '/transactions' },
  { icon: 'invoice', label: 'Invoices', path: '/invoices' },
  { icon: 'walletopen', label: 'My Wallets', path: '/wallets' },
  { icon: 'setting', label: 'Settings', path: '/settings' },
] as const

export default function DashboardSidebar() {
  const location = useLocation()
  const { clearAuth } = useAuthStore()
  const navigate = useNavigate()
  const { isOpen, close } = useSidebarStore()

  useEffect(() => {
    close()
  }, [location.pathname, close])

  // useEffect(() => {
  //   const handleEscape = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') close()
  //   }
  //   window.addEventListener('keydown', handleEscape)
  //   return () => window.removeEventListener('keydown', handleEscape)
  // }, [close])

  const handleLogout = async () => {
    try {
      await authApi.logout()
      clearAuth()
      toast.success('Logged out successfully')
      navigate('/sign-in', { replace: true })
    } catch {
      clearAuth()
      navigate('/sign-in', { replace: true })
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-in fade-in duration-200"
          onClick={close}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          'fixed h-screen z-50 w-64 bg-sidebar flex flex-col px-6.25 py-7.5 transition-transform duration-300 ease-in-out',
          'lg:translate-x-0 lg:z-10',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}>
        <Link to="/dashboard" className="mb-10">
          <Icon name="logo" width={110} height={30} className="dark:text-primary" />
        </Link>
        <Button
          onClick={close}
          variant={'ghost'}
          size={'icon'}
          className="absolute top-7 right-2 p-2 rounded-lg hover:bg-muted transition-colors lg:hidden"
          aria-label="Close menu">
          <Icon name="angleright" className="h-5 w-5" />
        </Button>

        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 px-4 py-4 text-sm font-medium text-text-2 dark:text-gray-1 rounded-lg transition-colors',
                      isActive
                        ? 'bg-primary text-text-1 dark:text-text-1 font-semibold'
                        : 'text-muted-foreground hover:bg-muted hover:text-text-1 dark:hover:bg-text-1 dark:hover:text-gray-1',
                    )}>
                    <Icon name={item.icon} size={20} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="space-y-1">
          <Link
            to="/help"
            className="text-sm flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-2 hover:bg-muted hover:text-foreground transition-colors">
            <Icon name="help" size={20} />
            <span>Help</span>
          </Link>
          <button
            className="text-sm w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-2 hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
            onClick={handleLogout}>
            <Icon name="logout" size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}

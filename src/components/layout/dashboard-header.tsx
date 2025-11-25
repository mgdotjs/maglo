import { useLocation } from 'react-router'
import { useSidebarStore } from '@/store/sidebarStore'

import { Icon, ToggleTheme, Notification, User } from '@/components/common'
import { Button } from '@/components/ui/button'

export default function DashboardHeader() {
  const location = useLocation()

  const { toggle } = useSidebarStore()

  const getTitleFromPath = (path: string) => {
    const titles: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/transactions': 'Transactions',
    }
    return titles[path] || ''
  }

  const pageTitle = getTitleFromPath(location.pathname)

  return (
    <header className="flex items-center justify-between mb-3 lg:mb-7.5">
      <h1 className="text-xl md:text-2xl font-bold">{pageTitle}</h1>

      <div className="flex items-center gap-0 md:gap-4">
        <Button variant="ghost" size="icon">
          <Icon name="search" className="text-text-2" />
        </Button>
        <Notification />
        <ToggleTheme />
        <User />
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggle}
          aria-label="Toggle menu">
          <Icon name="menu" className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}

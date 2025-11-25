import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/common'
import { Button } from '@/components/ui/button'

const notifications = [
  { id: 1, message: 'New deposit added' },
  { id: 2, message: 'You have a new transfer' },
  { id: 3, message: 'Your password was changed successfully' },
]

export default function Notification() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative cursor-pointer">
          <Icon name="bell" className="text-text-2" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 min-h-44 bg-gray-3 dark:bg-text-1-dark" align="end">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <DropdownMenuLabel>No new notifications</DropdownMenuLabel>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id}>{notification.message}</DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

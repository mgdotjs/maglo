import { useAuthStore } from '@/store/authStore'

import { Icon } from '@/components/common'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function User() {
  const { user } = useAuthStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-start gap-2.5 bg-white hover:bg-accent hover:text-accent-foreground dark:bg-text-1-dark dark:hover:bg-accent/50 px-2 py-1.5 rounded-full cursor-pointer">
          <Avatar className="w-7 h-7 lg:w-9 lg:h-9">
            {user?.image && <AvatarImage src={user.image} />}
            <AvatarFallback className="bg-primary text-text-1">
              {user?.fullName?.charAt(0) || 'MU'}
            </AvatarFallback>
          </Avatar>
          <span className="hidden md:inline-block text-sm font-semibold truncate w-32 me-auto text-left">
            {user?.fullName || 'Maglo User'}
          </span>
          <Icon name="chevrondown" size={16} className="hidden md:inline-block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 min-h-44 bg-gray-3 dark:bg-text-1-dark" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Invoices</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

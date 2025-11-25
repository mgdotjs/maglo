import type { SVGProps } from 'react'

import AngleDownIcon from '@/assets/icons/angle-down.svg?react'
import AngleRightIcon from '@/assets/icons/angle-right.svg?react'
import BellIcon from '@/assets/icons/bell.svg?react'
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react'
import GoogleIcon from '@/assets/icons/google.svg?react'
import HelpIcon from '@/assets/icons/help.svg?react'
import HomeIcon from '@/assets/icons/home.svg?react'
import InvoiceIcon from '@/assets/icons/invoice.svg?react'
import LogoutIcon from '@/assets/icons/logout.svg?react'
import Menu from '@/assets/icons/menu.svg?react'
import MoonIcon from '@/assets/icons/moon.svg?react'
import SearchIcon from '@/assets/icons/search.svg?react'
import SettingIcon from '@/assets/icons/setting.svg?react'
import SunIcon from '@/assets/icons/sun.svg?react'
import TransactionIcon from '@/assets/icons/transaction.svg?react'
import WalletOpenIcon from '@/assets/icons/wallet-open.svg?react'
import WalletAddIcon from '@/assets/icons/wallet-add.svg?react'
import WalletIcon from '@/assets/icons/wallet.svg?react'
import WifiIcon from '@/assets/icons/wifi.svg?react'

// colorful icons
import ChipIcon from '@/assets/icons/chip.svg?react'
import MasterCardIcon from '@/assets/icons/master-card.svg?react'
import VisaIcon from '@/assets/icons/visa.svg?react'

// system
import Logo from '@/assets/images/logo.svg?react'
import Shape from '@/assets/images/shape.svg?react'

const icons = {
  angledown: AngleDownIcon,
  angleright: AngleRightIcon,
  bell: BellIcon,
  chevrondown: ChevronDownIcon,
  help: HelpIcon,
  google: GoogleIcon,
  home: HomeIcon,
  invoice: InvoiceIcon,
  logout: LogoutIcon,
  menu: Menu,
  moon: MoonIcon,
  search: SearchIcon,
  sun: SunIcon,
  setting: SettingIcon,
  transaction: TransactionIcon,
  walletopen: WalletOpenIcon,
  walletadd: WalletAddIcon,
  wallet: WalletIcon,
  wifi: WifiIcon,
  chip: ChipIcon,
  mastercard: MasterCardIcon,
  visa: VisaIcon,
  logo: Logo,
  shape: Shape,
} as const

type IconName = keyof typeof icons

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export default function Icon({ name, size = 24, className = '', ...props }: IconProps) {
  const IconComponent = icons[name]

  if (!IconComponent) return null

  return <IconComponent width={size} height={size} className={className} {...props} />
}

import { useDarkMode } from '@reactuses/core'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/common'

export default function ToggleTheme() {
  const [theme, toggleDark] = useDarkMode({
    classNameDark: 'dark',
    classNameLight: '',
    defaultValue: false,
  })

  return (
    <Button variant="ghost" size="icon" onClick={toggleDark} className="group">
      <Icon
        name={theme ? 'sun' : 'moon'}
        className="text-text-2 group-hover:text-text-1 dark:group-hover:text-white transition-colors duration-300"
      />
    </Button>
  )
}

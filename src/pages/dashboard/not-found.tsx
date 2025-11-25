import { Icon } from '@/components/common'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function DashboardNotFound() {
  useDocumentTitle('Not Found')
  return (
    <div className="w-full min-h-100 flex flex-col items-center justify-center gap-8">
      <Icon name="help" size={48} />
      <div>Not Found</div>
    </div>
  )
}

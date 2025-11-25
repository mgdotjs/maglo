import { Link } from 'react-router'
import { format, parseISO } from 'date-fns'

import { formatCurrency } from '@/lib/utils/formatters'

import { Icon, ScheduledTransfersSkeleton } from '@/components/common'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useScheduledTransfers } from '@/hooks/useDashboardData'

export const ScheduledTransfers = () => {
  const { data, isLoading, error } = useScheduledTransfers()

  if (isLoading) return <ScheduledTransfersSkeleton />
  if (error) return <div>Error loading scheduled</div>
  if (!data?.data) return null

  const { transfers } = data.data

  return (
    <section>
      <Card className="p-0">
        <CardHeader className="p-0 pb-2">
          <div className="flex items-center justify-between">
            <CardTitle>Scheduled Transfers</CardTitle>
            <Link
              to={'/scheduled-transfers'}
              className="text-sm font-semibold text-secondary flex items-center group -me-2">
              View All
              <Icon name="angleright" className="transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ul role="list" className="space-y-4">
            {transfers?.map((transfer) => (
              <li
                key={transfer.id}
                className="flex items-center justify-between pb-4 border-b border-gray-3 last:border-0">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    {transfer?.image && <AvatarImage src={transfer.image} />}
                    <AvatarFallback>{transfer?.name?.charAt(0) || 'MU'}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm text-text-1 dark:text-gray-1 font-semibold">
                      {transfer.name}
                    </div>
                    <div className="text-xs text-text-2">
                      {format(parseISO(transfer.date), "MMMM dd, yyyy 'at' HH:mm")}
                    </div>
                  </div>
                </div>

                <div className="font-semibold text-black dark:text-white">
                  <span className="me-1">{transfer.amount < 0 ? '-' : '+'}</span>
                  <span>{formatCurrency(Math.abs(transfer.amount))}</span>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

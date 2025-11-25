import { format, parseISO } from 'date-fns'
import { Link } from 'react-router'

import { formatCurrency } from '@/lib/utils/formatters'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon, TransactionsSkeleton } from '@/components/common'
import { useRecentTransactions } from '@/hooks/useDashboardData'

export const RecentTransactions = () => {
  const { data, isLoading, error } = useRecentTransactions()

  if (isLoading) return <TransactionsSkeleton />
  if (error) return <div>Error loading transactions</div>
  if (!data?.data) return null

  const transactions = data.data.transactions.slice(0, 3)

  return (
    <section>
      <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 border border-gray-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transaction</CardTitle>
            <Link
              to={'/transactions'}
              className="text-sm font-semibold text-secondary flex items-center group -me-2">
              View All
              <Icon name="angleright" className="transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-transparent">
                <TableHead className="text-xs text-text-2 p-0 font-semibold w-[250px]">
                  NAME/BUSINESS
                </TableHead>
                <TableHead className="text-xs text-text-2 font-semibold text-center">
                  TYPE
                </TableHead>
                <TableHead className="text-xs text-text-2 font-semibold text-center">
                  AMOUNT
                </TableHead>
                <TableHead className="text-xs text-text-2 font-semibold text-center">
                  DATE
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="border-gray-3 font-medium">
                  <TableCell className="font-medium">
                    <div className="name-card flex flex-col md:flex-row md:items-center gap-2 lg:gap-3.5">
                      <img
                        className="rounded-sm w-8 lg:w-10 h-8 lg:h-10"
                        src={transaction.image}
                        alt={transaction.name}
                      />
                      <div className="grid">
                        <span className="text-sm text-text-1 dark:text-gray-1">
                          {transaction.name}
                        </span>
                        <span className="text-xs text-text-2 font-normal">
                          {transaction.business}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-sm text-text-2">
                    {transaction.type}
                  </TableCell>
                  <TableCell className="text-center text-sm text-text-1 dark:text-gray-1 font-semibold">
                    <span className="me-1">{transaction.amount < 0 ? '-' : '+'}</span>
                    <span>{formatCurrency(Math.abs(transaction.amount))}</span>
                  </TableCell>
                  <TableCell className="text-center text-sm text-text-2">
                    {format(parseISO(transaction.date), 'dd MMM yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  )
}

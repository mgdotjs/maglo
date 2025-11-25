import { format, parseISO } from 'date-fns'

import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import { formatCurrency } from '@/lib/utils/formatters'
import { useRecentTransactions } from '@/hooks/useDashboardData'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { TransactionsSkeleton } from '@/components/common'

export default function Transactions() {
  useDocumentTitle('Transactions')

  const { data, isLoading, error } = useRecentTransactions()

  if (isLoading) return <TransactionsSkeleton />
  if (error) return <div>Error loading transactions</div>
  if (!data?.data) return null

  const transactions = data?.data.transactions || []

  return (
    <section>
      <Table>
        <TableHeader>
          <TableRow className="border-transparent">
            <TableHead className="text-xs text-text-2 p-0 font-semibold w-[250px]">
              NAME/BUSINESS
            </TableHead>
            <TableHead className="text-xs text-text-2 font-semibold text-center">TYPE</TableHead>
            <TableHead className="text-xs text-text-2 font-semibold text-center">AMOUNT</TableHead>
            <TableHead className="text-xs text-text-2 font-semibold text-center">DATE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="border-gray-3 font-medium">
              <TableCell className="font-medium">
                <div className="name-card flex flex-col md:flex-row md:items-center gap-2 lg:gap-3.5">
                  <img
                    className="rounded-sm"
                    src={transaction.image}
                    alt={transaction.name}
                    width={40}
                    height={40}
                  />
                  <div className="grid">
                    <span className="text-sm text-text-1 dark:text-gray-1">{transaction.name}</span>
                    <span className="text-xs text-text-2 font-normal">{transaction.business}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm text-text-2">{transaction.type}</TableCell>
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
    </section>
  )
}

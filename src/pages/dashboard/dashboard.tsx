import {
  FinancialSummaryCards,
  WorkingCapitalChart,
  RecentTransactions,
  WalletCards,
  ScheduledTransfers,
} from '@/components/dashboard'

import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Dashboard() {
  useDocumentTitle('Dashboard')

  return (
    <div className="grid gap-4 lg:gap-6 xl:gap-10 lg:grid-cols-3">
      <div className="col-span-1 overflow-auto lg:col-span-2 space-y-4 lg:space-y-6">
        <FinancialSummaryCards />
        <WorkingCapitalChart />
        <RecentTransactions />
      </div>
      <div className="lg:col-span-1">
        <WalletCards />
        <ScheduledTransfers />
      </div>
    </div>
  )
}

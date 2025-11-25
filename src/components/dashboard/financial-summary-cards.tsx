import { formatCurrency } from '@/lib/utils/formatters'
import { useFinancialSummary } from '@/hooks/useDashboardData'

import { Card, CardContent } from '@/components/ui/card'
import { FinancialSummarySkeleton, Icon } from '@/components/common'

export const FinancialSummaryCards = () => {
  const { data, isLoading, error } = useFinancialSummary()

  if (isLoading) return <FinancialSummarySkeleton />
  if (error) return <div>Error loading transactions</div>
  if (!data?.data) return null

  const cards = [
    {
      title: 'Total balance',
      value: data.data.totalBalance.amount,
      icon: 'wallet',
    },
    {
      title: 'Total spending',
      value: data.data.totalExpense.amount,
      icon: 'wallet',
    },
    {
      title: 'Total saved',
      value: data.data.totalSavings.amount,
      icon: 'walletadd',
    },
  ] as const

  return (
    <section className="grid md:grid-cols-3 gap-4 xl:gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`bg-gray-2 dark:bg-text-1-dark animate-in fade-in slide-in-from-bottom-2 duration-500 group ${
            index === 0 ? 'bg-key-black dark:bg-key-black/80' : ''
          }`}
          style={{ animationDelay: `${index * 100}ms` }}>
          <CardContent className="flex flex-col xl:flex-row text-center xl:text-left items-center gap-2 xl:gap-4 xl:h-[72px] px-2 xl:px-4">
            <div
              className={`w-8 lg:w-10.5 h-8 lg:h-10.5 grid place-items-center rounded-full bg-gray-5 dark:bg-text-1 ${
                index === 0 ? 'bg-[#4E5257]!' : ''
              }`}>
              <Icon name={card.icon} size={20} className={`${index === 0 ? 'text-primary' : ''}`} />
            </div>
            <div className="grid gap-1 xl:gap-1.5">
              <div className={`text-sm text-text-2`}>{card.title}</div>
              <div className={`text-lg xl:text-2xl font-bold ${index === 0 ? 'text-white' : ''}`}>
                {formatCurrency(card.value)}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  type TooltipContentProps,
} from 'recharts'

import { useWorkingCapital } from '@/hooks/useDashboardData'
import { formatCurrency } from '@/lib/utils/formatters'

import { Icon, WorkingCapitalSkeleton } from '@/components/common'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CustomTooltip = ({ active, payload, label }: TooltipContentProps<number, string>) => {
  if (!active || !payload || !payload.length) return null

  const income = payload.find((p) => p.dataKey === 'income')?.value as number
  const expense = payload.find((p) => p.dataKey === 'expense')?.value as number
  const net = income - expense

  return (
    <div className="bg-white border border-gray-3 rounded-lg p-3">
      <p className="text-sm font-semibold text-text-1 mb-2">{label}</p>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span className="text-xs text-text-3">Income</span>
          </div>
          <span className="text-sm font-medium text-text-1">{formatCurrency(income)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-xs text-text-3">Expense</span>
          </div>
          <span className="text-sm font-medium text-text-1">{formatCurrency(expense)}</span>
        </div>
        <div className="border-t border-gray-3 pt-1.5 mt-1.5">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-semibold text-text-2">Net</span>
            <span className={`text-sm font-bold ${net >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {net >= 0 ? '+' : ''}
              {formatCurrency(net)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const WorkingCapitalChart = () => {
  const { data, isLoading, error } = useWorkingCapital()

  if (isLoading) return <WorkingCapitalSkeleton />
  if (error) return <div>Error loading transactions</div>
  if (!data?.data) return null

  const { data: chartData } = data.data

  return (
    <section>
      <Card className="animate-in fade-in slide-in-from-bottom-3 duration-500 border border-gray-3">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle>Working Capital</CardTitle>
            <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span className="text-xs md:text-sm text-muted-foreground">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span className="text-xs md:text-sm text-muted-foreground">Expenses</span>
              </div>
              <div className="flex items-center gap-1 py-2 px-4 bg-gray-2 ms-auto dark:bg-text-1-dark text-text-1 dark:text-gray-1 text-sm rounded-lg">
                Last 7 days <Icon name="chevrondown" size={14} />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <LineChart
            style={{
              width: '100%',
              height: '290px',
              maxHeight: '70vh',
              aspectRatio: 1.618,
            }}
            responsive
            data={chartData}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <CartesianGrid
              strokeDasharray="0 0"
              strokeWidth={1}
              strokeOpacity={1}
              stroke="var(--chart-grid)"
            />
            <XAxis
              dataKey="month"
              stroke="var(--theme-text-2)"
              strokeOpacity={0}
              fontSize={12}
              tickLine={false}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              width="auto"
              stroke="var(--theme-text-2)"
              strokeOpacity={0}
              fontSize={12}
              tickLine={false}
              padding={{ top: 20, bottom: 20 }}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip
              content={CustomTooltip}
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--theme-gray-3)',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              formatter={(value: number) => formatCurrency(value)}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="var(--color-secondary)"
              dot={false}
              activeDot={{ r: 6 }}
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="var(--color-primary)"
              dot={false}
              activeDot={{ r: 6 }}
              strokeWidth={3}
              animationDuration={1000}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </CardContent>
      </Card>
    </section>
  )
}

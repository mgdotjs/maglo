import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

export const FinancialSummarySkeleton = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <Card
          key={i}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500 bg-gray-2 dark:bg-text-1-dark"
          style={{ animationDelay: `${i * 100}ms` }}>
          <CardContent className="p-6 py-2 flex items-center gap-4">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="grid">
              <Skeleton className="h-4 w-24 mb-3 " />
              <Skeleton className="h-8 w-32 " />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export const WorkingCapitalSkeleton = () => {
  return (
    <Card className="animate-in fade-in slide-in-from-bottom-3 duration-500 bg-gray-2 dark:bg-text-1-dark">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-40 mb-6 " />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-20 mb-6 " />
            <Skeleton className="h-4 w-20 mb-6 " />
          </div>
          <Skeleton className="h-6 w-30 mb-6 " />
        </div>
        <Skeleton className="h-[220px] w-full " />
      </CardContent>
    </Card>
  )
}

export const TransactionsSkeleton = () => {
  return (
    <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-gray-2 dark:bg-text-1-dark">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between"
              style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export const WalletSkeleton = () => {
  return (
    <Card className="animate-in fade-in slide-in-from-right duration-500 h-[360px]">
      <CardContent className="p-0">
        <Skeleton className="h-6 w-24 mb-4" />
        <div className="space-y-4 relative">
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-40 w-full rounded-xl absolute top-30 scale-90" />
        </div>
      </CardContent>
    </Card>
  )
}

export const ScheduledTransfersSkeleton = () => {
  return (
    <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between"
              style={{ animationDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-32 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

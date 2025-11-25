import { MoreHorizontal } from 'lucide-react'

import { useWallet } from '@/hooks/useDashboardData'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icon, WalletSkeleton } from '@/components/common'

const cardExpiry = (expiryMonth: number, expiryYear: number) => {
  const month = expiryMonth.toString().padStart(2, '0')
  const year = expiryYear.toString().slice(-2)
  return `${month}/${year}`
}

const getNetworkIcon = (network: string): 'visa' | 'mastercard' => {
  const networkMap: Record<string, 'visa' | 'mastercard'> = {
    Visa: 'visa',
    visa: 'visa',
    VISA: 'visa',
    Mastercard: 'mastercard',
    mastercard: 'mastercard',
    MASTERCARD: 'mastercard',
  }
  return networkMap[network] || 'visa'
}

export const WalletCards = () => {
  const { data, isLoading, error } = useWallet()

  if (isLoading) return <WalletSkeleton />
  if (error) return <div>Error loading wallet</div>
  if (!data?.data) return null

  const { cards } = data.data

  return (
    <Card className="p-0 nimate-in fade-in slide-in-from-bottom-5 duration-500 mb-6">
      <CardHeader className="p-0">
        <div className="flex items-center justify-between">
          <CardTitle>Wallet</CardTitle>
          <button className="p-1 hover:bg-muted rounded">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative w-full max-w-[354px] mx-auto min-h-[340px] hover:min-h-[440px] group transition-all duration-500">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute top-0 left-0 z-1 w-full h-[210px] rounded-2xl overflow-hidden py-4.5 px-7.5 bg-linear-to-br from-[#4A4A49] to-[#20201F] text-white transition-all duration-300 ease-in-out ${
              card.isDefault
                ? `scale-92 top-34 left-0 bg-linear-to-b from-[#ffffff]/40 to-[#ffffff]/10 backdrop-blur border border-white/20`
                : ''
            } 
              ${index === 0 ? 'group-hover:top-0' : ''}
              ${index === 1 ? 'group-hover:top-[230px]' : ''}
              ${index === 2 ? 'group-hover:top-[460px]' : ''}
              hover:scale-[1.02] group-hover:scale-100
            `}
            style={{ zIndex: cards.length - index }}>
            {card.isDefault && (
              <div className="absolute left-0 top-0 w-full h-full bg-linear-to-br from-[#959595]/30 to-[#324000]/50 opacity-10 group-hover:opacity-100" />
            )}

            <div className="relative z-2 space-y-1 font-gordita">
              <div className="flex items-center gap-4">
                <span className="font-bold">Maglo.</span>
                <span
                  className={`text-xs relative flex items-center ${
                    card.color !== '#FFFFFF' ? 'text-gray-3' : 'text-text-5'
                  }`}>
                  <span className="font-kumbh text-xl font-light me-2">|</span>
                  {card.name}
                </span>
              </div>

              <div className="flex justify-between py-3">
                <Icon name={'chip'} className="w-9.5 h-7.5" />
                <Icon name={'wifi'} className="w-8.5 h-8.5 text-[#363B41]" />
              </div>

              <div className="grid gap-2">
                <span
                  className={`text-lg font-bold tracking-widest mt-1 ${
                    card.color !== '#FFFFFF' ? 'text-text-1' : 'text-white'
                  }`}>
                  {card.cardNumber}
                </span>
                <span className="text-sm text-text-4 tracking-wider">
                  {cardExpiry(card.expiryMonth, card.expiryYear)}
                </span>
              </div>
            </div>

            <div className="absolute bottom-6.5 right-6.5">
              <Icon name={getNetworkIcon(card.network)} className="w-8 h-6 hidden" />
              {/* TODO ! theme color problem fix */}
              {index === 0 ? (
                <Icon name="visa" className="w-8 h-6" />
              ) : (
                <Icon name="mastercard" className="w-12 h-9" />
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

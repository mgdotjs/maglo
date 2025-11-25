export const formatCurrency = (
  amount: number | bigint,
  currency: string = 'USD',
  locale: string = 'tr-TR',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export const formatNumber = (
  value: number,
  locale: string = 'en-US',
  options?: Intl.NumberFormatOptions,
): string => {
  return new Intl.NumberFormat(locale, options).format(value)
}

/** Options for parsing a number with a fallback. */
type ParseOptions<TFallback = number> = {
  /**
   * Value returned when parsing fails.
   *
   * @default 0
   */
  fallback?: TFallback
}

/** Options for currency formatting. */
type CurrencyOptions = {
  currencyCode: string
  /**
   * Locale used by the formatter.
   *
   * @default 'en-US'
   */
  locale?: string
}

/**
 * Checks whether a number is within a range.
 *
 * @example
 *   between(5, 1, 10) // true
 */
function between(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

/**
 * Rounds a number to the nearest integer.
 *
 * @example
 *   round(4.6) // 5
 */
function round(value: number): number {
  return Math.round(value)
}

/**
 * Rounds a number to a fixed number of decimals.
 *
 * @example
 *   roundTo(1.234, 2) // 1.23
 */
function roundTo(value: number, decimals: number): number {
  const factor = 10 ** decimals

  return Math.round(value * factor) / factor
}

/**
 * Formats a number as currency.
 *
 * @example
 *   currency(1200, { currencyCode: 'USD' }) // '$1,200.00'
 *
 * @default locale 'en-US'
 */
function currency(
  value: number,
  { currencyCode, locale = 'en-US' }: CurrencyOptions
): string {
  return new Intl.NumberFormat(locale, {
    currency: currencyCode,
    style: 'currency'
  }).format(value)
}

/**
 * Formats a number using compact notation.
 *
 * @example
 *   compact(1200) // '1.2K'
 *
 * @default locale 'en-US'
 */
function compact(value: number, locale = 'en-US'): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact'
  }).format(value)
}

/**
 * Calculates the percentage of a value against a total.
 *
 * @example
 *   percentage(25, 200) // 12.5
 */
function percentage(value: number, total: number): number {
  if (total === 0) {
    return 0
  }

  return (value / total) * 100
}

/**
 * Parses a string into a number.
 *
 * @example
 *   parse('42') // 42
 *
 * @default fallback 0
 */
function parse<TFallback = number>(
  value: string,
  { fallback = 0 as TFallback }: ParseOptions<TFallback> = {}
): number | TFallback {
  const parsedValue = Number(value)

  if (Number.isNaN(parsedValue)) {
    return fallback
  }

  return parsedValue
}

/**
 * Sums a list of numbers.
 *
 * @example
 *   sum([1, 2, 3]) // 6
 */
function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0)
}

/**
 * Formats a byte count into a human-readable string.
 *
 * @example
 *   bytes(1024) // '1 KB'
 */
function bytes(value: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']

  let size = value
  let unit = 0

  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024
    unit += 1
  }

  return `${Number(size.toFixed(2))} ${units[unit]}`
}

export const number = () => ({
  between,
  bytes,
  compact,
  currency,
  parse,
  percentage,
  round,
  roundTo,
  sum
})

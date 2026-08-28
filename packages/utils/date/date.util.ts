/** Formatting options for dates. */
type FormatOptions = {
  /**
   * Locale used by the formatter.
   *
   * @default 'en-US'
   */
  locale?: string
  /** Native date formatting options. */
  options?: Intl.DateTimeFormatOptions
}

/** Relative time formatting options. */
type RelativeOptions = {
  /**
   * Locale used by the formatter.
   *
   * @default 'en-US'
   */
  locale?: string
}

/**
 * Returns the current date and time.
 *
 * @example
 *   now()
 */
function now(): Date {
  return new Date()
}

/**
 * Formats a date using `Intl.DateTimeFormat`.
 *
 * @example
 *   format(new Date(), { locale: 'en-US' })
 *
 * @default locale 'en-US'
 */
function format(
  value: Date,
  { locale = 'en-US', options }: FormatOptions = {}
): string {
  return new Intl.DateTimeFormat(locale, options).format(value)
}

/**
 * Formats a date relative to the current moment.
 *
 * @example
 *   relative(new Date(Date.now() + 60_000)) // 'in 1 minute'
 *
 * @default locale 'en-US'
 */
function relative(
  value: Date,
  { locale = 'en-US' }: RelativeOptions = {}
): string {
  const formatter = new Intl.RelativeTimeFormat(locale, {
    numeric: 'auto'
  })

  const seconds = Math.round((value.getTime() - Date.now()) / 1000)

  if (Math.abs(seconds) < 60) {
    return formatter.format(seconds, 'second')
  }

  const minutes = Math.round(seconds / 60)

  if (Math.abs(minutes) < 60) {
    return formatter.format(minutes, 'minute')
  }

  const hours = Math.round(minutes / 60)

  if (Math.abs(hours) < 24) {
    return formatter.format(hours, 'hour')
  }

  const days = Math.round(hours / 24)

  if (Math.abs(days) < 30) {
    return formatter.format(days, 'day')
  }

  const months = Math.round(days / 30)

  if (Math.abs(months) < 12) {
    return formatter.format(months, 'month')
  }

  const years = Math.round(months / 12)

  return formatter.format(years, 'year')
}

/**
 * Checks whether a date falls on today.
 *
 * @example
 *   isToday(new Date())
 */
function isToday(value: Date): boolean {
  const today = new Date()

  return (
    value.getFullYear() === today.getFullYear() &&
    value.getMonth() === today.getMonth() &&
    value.getDate() === today.getDate()
  )
}

/**
 * Checks whether a date falls on yesterday.
 *
 * @example
 *   isYesterday(new Date(Date.now() - 86_400_000))
 */
function isYesterday(value: Date): boolean {
  const yesterday = new Date()

  yesterday.setDate(yesterday.getDate() - 1)

  return (
    value.getFullYear() === yesterday.getFullYear() &&
    value.getMonth() === yesterday.getMonth() &&
    value.getDate() === yesterday.getDate()
  )
}

/**
 * Checks whether a date falls on tomorrow.
 *
 * @example
 *   isTomorrow(new Date(Date.now() + 86_400_000))
 */
function isTomorrow(value: Date): boolean {
  const tomorrow = new Date()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return (
    value.getFullYear() === tomorrow.getFullYear() &&
    value.getMonth() === tomorrow.getMonth() &&
    value.getDate() === tomorrow.getDate()
  )
}

/**
 * Adds days to a date.
 *
 * @example
 *   addDays(new Date(), 7)
 */
function addDays(value: Date, days: number): Date {
  const date = new Date(value)

  date.setDate(date.getDate() + days)

  return date
}

/**
 * Subtracts days from a date.
 *
 * @example
 *   subtractDays(new Date(), 7)
 */
function subtractDays(value: Date, days: number): Date {
  return addDays(value, -days)
}

/**
 * Returns the difference in whole days between two dates.
 *
 * @example
 *   differenceInDays(new Date('2024-01-02'), new Date('2024-01-01')) // 1
 */
function differenceInDays(left: Date, right: Date): number {
  const milliseconds = left.getTime() - right.getTime()

  return Math.floor(milliseconds / 86_400_000)
}

/**
 * Returns the start of the day for a date.
 *
 * @example
 *   startOfDay(new Date())
 */
function startOfDay(value: Date): Date {
  const date = new Date(value)

  date.setHours(0, 0, 0, 0)

  return date
}

/**
 * Returns the end of the day for a date.
 *
 * @example
 *   endOfDay(new Date())
 */
function endOfDay(value: Date): Date {
  const date = new Date(value)

  date.setHours(23, 59, 59, 999)

  return date
}

export const date = () => ({
  addDays,
  differenceInDays,
  endOfDay,
  format,
  isToday,
  isTomorrow,
  isYesterday,
  now,
  relative,
  startOfDay,
  subtractDays
})

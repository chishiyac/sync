/**
 * Checks whether a value is `null` or `undefined`.
 *
 * @example
 *   isNil(null) // true
 */
function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined
}

/**
 * Checks whether a value is a string.
 *
 * @example
 *   isString('hello') // true
 */
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * Checks whether a value is a finite number and not `NaN`.
 *
 * @example
 *   isNumber(42) // true
 */
function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value)
}

/**
 * Checks whether a value is a boolean.
 *
 * @example
 *   isBoolean(true) // true
 */
function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/**
 * Checks whether a value is an array.
 *
 * @example
 *   isArray([]) // true
 */
function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value)
}

/**
 * Checks whether a value is a plain object.
 *
 * @example
 *   isObject({}) // true
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value)
  )
}

/**
 * Checks whether a value has no meaningful content.
 *
 * @example
 *   isEmpty('  ') // true
 */
function isEmpty(value: unknown): boolean {
  if (isNil(value)) {
    return true
  }
  if (isString(value)) {
    return value.trim() === ''
  }
  if (isArray(value)) {
    return value.length === 0
  }
  if (isObject(value)) {
    return Object.keys(value).length === 0
  }

  return false
}

/**
 * Checks whether a string is empty after trimming.
 *
 * @example
 *   isEmptyString('  ') // true
 */
function isEmptyString(value?: string | null): boolean {
  return value === null || value === undefined || value.trim() === ''
}

/**
 * Checks whether a string has the expected length.
 *
 * @example
 *   hasLength('abc', 3) // true
 */
function hasLength(value: string, length: number): boolean {
  return value.length === length
}

/**
 * Checks whether a string meets the minimum length.
 *
 * @example
 *   hasMinLength('abc', 2) // true
 */
function hasMinLength(value: string, length: number): boolean {
  return value.length >= length
}

/**
 * Checks whether a string stays within the maximum length.
 *
 * @example
 *   hasMaxLength('abc', 5) // true
 */
function hasMaxLength(value: string, length: number): boolean {
  return value.length <= length
}

/**
 * Checks whether a value is a positive finite number.
 *
 * @example
 *   isPositiveNumber(1) // true
 */
function isPositiveNumber(value?: number | null): boolean {
  return (
    value !== null &&
    value !== undefined &&
    Number.isFinite(value) &&
    value > 0
  )
}

/**
 * Checks whether a value is a negative finite number.
 *
 * @example
 *   isNegativeNumber(-1) // true
 */
function isNegativeNumber(value?: number | null): boolean {
  return (
    value !== null &&
    value !== undefined &&
    Number.isFinite(value) &&
    value < 0
  )
}

/**
 * Checks whether a value is an integer.
 *
 * @example
 *   isInteger(2) // true
 */
function isInteger(value: unknown): value is number {
  return Number.isInteger(value)
}

/**
 * Checks whether a value is a finite decimal number.
 *
 * @example
 *   isFloat(1.5) // true
 */
function isFloat(value: unknown): value is number {
  return (
    isNumber(value) &&
    Number.isFinite(value) &&
    !Number.isInteger(value)
  )
}

/**
 * Checks whether a value is a finite number.
 *
 * @example
 *   isFiniteNumber(10) // true
 */
function isFiniteNumber(value: unknown): value is number {
  return Number.isFinite(value)
}

/**
 * Checks whether an array is empty.
 *
 * @example
 *   isEmptyArray([]) // true
 */
function isEmptyArray(value?: unknown[] | null): boolean {
  return value === null || value === undefined || value.length === 0
}

/**
 * Checks whether an object is empty.
 *
 * @example
 *   isEmptyObject({}) // true
 */
function isEmptyObject(
  value?: Record<string, unknown> | null
): boolean {
  return (
    value === null ||
    value === undefined ||
    Object.keys(value).length === 0
  )
}

/**
 * Checks whether a value is a `Date` instance.
 *
 * @example
 *   isDate(new Date()) // true
 */
function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/**
 * Checks whether a value is a valid `Date`.
 *
 * @example
 *   isValidDate(new Date()) // true
 */
function isValidDate(value: unknown): value is Date {
  return value instanceof Date && !Number.isNaN(value.getTime())
}

/**
 * Checks whether a string is an email address.
 *
 * @example
 *   isEmail('user@example.com') // true
 */
function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/u.test(value)
}

/**
 * Checks whether a string is a valid URL.
 *
 * @example
 *   isUrl('https://example.com') // true
 */
function isUrl(value: string): boolean {
  return URL.canParse(value)
}

/**
 * Checks whether a string is a UUID.
 *
 * @example
 *   isUuid('550e8400-e29b-41d4-a716-446655440000') // true
 */
function isUuid(value: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{12}$/iu.test(
    value
  )
}

/**
 * Checks whether a value is truthy.
 *
 * @example
 *   isTruthy('value') // true
 */
const isTruthy: typeof Boolean = Boolean

/**
 * Checks whether a value is falsy.
 *
 * @example
 *   isFalsy('') // true
 */
function isFalsy(value: unknown): boolean {
  return !value
}

export const validation = () => ({
  hasLength,
  hasMaxLength,
  hasMinLength,
  isArray,
  isBoolean,
  isDate,
  isEmail,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isEmptyString,
  isFalsy,
  isFiniteNumber,
  isFloat,
  isInteger,
  isNegativeNumber,
  isNil,
  isNumber,
  isObject,
  isPositiveNumber,
  isString,
  isTruthy,
  isUrl,
  isUuid,
  isValidDate
})

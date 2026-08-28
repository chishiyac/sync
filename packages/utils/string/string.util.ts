/** Options for shortening a string. */
type TruncateOptions = {
  length: number
  /**
   * Suffix appended when the value is truncated.
   *
   * @default '...'
   */
  suffix?: string
}

/** Options for extracting initials. */
type ExtractInitialsOptions = {
  /**
   * Number of words used to build the initials.
   *
   * @default 2
   */
  length?: number
}

/** Options for string equality checks. */
type EqualsOptions = {
  /**
   * Compare values without case sensitivity.
   *
   * @default false
   */
  ignoreCase?: boolean
}

/**
 * Normalizes whitespace to single spaces.
 *
 * @example
 *   normalize('  hello   world  ') // 'hello world'
 */
function normalize(value: string): string {
  return value.trim().replaceAll(/\s+/gu, ' ')
}

/**
 * Removes diacritical marks from a string.
 *
 * @example
 *   removeAccents('ação') // 'acao'
 */
function removeAccents(value: string): string {
  return value.normalize('NFD').replaceAll(/\p{Diacritic}/gu, '')
}

/**
 * Splits a string into words.
 *
 * @example
 *   splitWords('HelloWorld') // ['Hello', 'World']
 */
function splitWords(value: string): string[] {
  return removeAccents(value)
    .replaceAll(
      /(?<lower>[a-z])(?<upper>[A-Z])/gu,
      '$<lower> $<upper>'
    )
    .replaceAll(/[^a-zA-Z0-9]+/gu, ' ')
    .trim()
    .split(/\s+/u)
    .filter(Boolean)
}

/**
 * Capitalizes each word in a string.
 *
 * @example
 *   capitalize('hello world') // 'Hello World'
 */
function capitalize(value: string): string {
  const cleanValue = value.trim()

  if (!cleanValue) {
    return ''
  }

  return cleanValue
    .split(/\s+/u)
    .map((word) => {
      if (!word) {
        return ''
      }

      return `${word.at(0)?.toUpperCase() ?? ''}${word.slice(1)}`
    })
    .join(' ')
}

/**
 * Converts a string to camel case.
 *
 * @example
 *   camelCase('hello world') // 'helloWorld'
 */
function camelCase(value: string): string {
  const wordList = splitWords(value)

  if (wordList.length === 0) {
    return ''
  }

  return wordList
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : capitalize(word.toLowerCase())
    )
    .join('')
}

/**
 * Converts a string to pascal case.
 *
 * @example
 *   pascalCase('hello world') // 'HelloWorld'
 */
function pascalCase(value: string): string {
  return splitWords(value)
    .map((word) => capitalize(word.toLowerCase()))
    .join('')
}

/**
 * Converts a string to kebab case.
 *
 * @example
 *   kebabCase('hello world') // 'hello-world'
 */
function kebabCase(value: string): string {
  return splitWords(value)
    .map((word) => word.toLowerCase())
    .join('-')
}

/**
 * Converts a string to snake case.
 *
 * @example
 *   snakeCase('hello world') // 'hello_world'
 */
function snakeCase(value: string): string {
  return splitWords(value)
    .map((word) => word.toLowerCase())
    .join('_')
}

/**
 * Truncates a string to the requested length.
 *
 * @example
 *   truncate('hello world', { length: 5 }) // 'hello...'
 *
 * @default suffix '...'
 */
function truncate(
  value: string,
  { length, suffix = '...' }: TruncateOptions
): string {
  if (value.length <= length) {
    return value
  }

  return value.slice(0, length) + suffix
}

/**
 * Extracts the initials from a string.
 *
 * @example
 *   extractInitials('Ada Lovelace') // 'AL'
 *
 * @default length 2
 */
function extractInitials(
  value: string,
  { length = 2 }: ExtractInitialsOptions = {}
): string {
  const wordList = normalize(value).split(' ').filter(Boolean)

  if (wordList.length === 0) {
    return ''
  }

  return wordList
    .slice(0, length)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

/**
 * Converts a string into a URL-friendly slug.
 *
 * @example
 *   slugify('Hello World!') // 'hello-world'
 */
function slugify(value: string): string {
  return removeAccents(value)
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/gu, '-')
    .replaceAll(/^-+|-+$/gu, '')
}

/**
 * Removes every whitespace character from a string.
 *
 * @example
 *   removeWhitespace('a b c') // 'abc'
 */
function removeWhitespace(value: string): string {
  return value.replaceAll(/\s+/gu, '')
}

/**
 * Reverses a string by Unicode code points.
 *
 * @example
 *   reverse('abc') // 'cba'
 */
function reverse(value: string): string {
  return [...value].toReversed().join('')
}

/**
 * Repeats a string a fixed number of times.
 *
 * @example
 *   repeat('ab', 3) // 'ababab'
 */
function repeat(value: string, count: number): string {
  return value.repeat(count)
}

/**
 * Checks whether a string includes a substring.
 *
 * @example
 *   includes('hello', 'ell') // true
 */
function includes(value: string, search: string): boolean {
  return value.includes(search)
}

/**
 * Applies a mask pattern where `#` consumes one character.
 *
 * @example
 *   mask('123456', '###-###') // '123-456'
 */
function mask(value: string, pattern: string): string {
  let index = 0

  return pattern.replaceAll('#', () => {
    const character = value[index]
    index += 1

    return character ?? ''
  })
}

/**
 * Compares two strings with an optional case-insensitive mode.
 *
 * @example
 *   equals('Hello', 'hello', { ignoreCase: true }) // true
 *
 * @default ignoreCase false
 */
function equals(
  left: string,
  right: string,
  { ignoreCase = false }: EqualsOptions = {}
): boolean {
  if (ignoreCase) {
    return (
      left.localeCompare(right, undefined, {
        sensitivity: 'accent'
      }) === 0
    )
  }

  return left === right
}

/**
 * Counts how many times a substring appears in a string.
 *
 * @example
 *   occurrences('banana', 'an') // 2
 */
function occurrences(value: string, search: string): number {
  if (!search) {
    return 0
  }

  return value.split(search).length - 1
}

/**
 * Extracts a substring between two indexes.
 *
 * @example
 *   between('hello', 1, 4) // 'ell'
 */
function between(value: string, start: number, end: number): string {
  return value.slice(start, end)
}

/**
 * Splits a string into normalized words.
 *
 * @example
 *   separate('hello   world') // ['hello', 'world']
 */
function separate(value: string): string[] {
  return normalize(value).split(' ').filter(Boolean)
}

/**
 * Splits a string into lines.
 *
 * @example
 *   lines('a\\nb') // ['a', 'b']
 */
function lines(value: string): string[] {
  return value.split(/\r?\n/u)
}

/**
 * Removes every occurrence of a substring.
 *
 * @example
 *   remove('hello', 'l') // 'heo'
 */
function remove(value: string, search: string): string {
  return value.replaceAll(search, '')
}

/**
 * Keeps only unicode letters.
 *
 * @example
 *   onlyLetters('a1-b2') // 'ab'
 */
function onlyLetters(value: string): string {
  return value.replaceAll(/[^\p{L}]/gu, '')
}

/**
 * Keeps only numeric characters.
 *
 * @example
 *   onlyNumbers('a1-b2') // '12'
 */
function onlyNumbers(value: string): string {
  return value.replaceAll(/\D/gu, '')
}

export const string = () => ({
  between,
  camelCase,
  capitalize,
  equals,
  extractInitials,
  includes,
  kebabCase,
  lines,
  mask,
  normalize,
  occurrences,
  onlyLetters,
  onlyNumbers,
  pascalCase,
  remove,
  removeAccents,
  removeWhitespace,
  repeat,
  reverse,
  separate,
  slugify,
  snakeCase,
  truncate
})

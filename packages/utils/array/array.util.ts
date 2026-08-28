/**
 * Returns the first item in an array.
 *
 * @example
 *   first([1, 2, 3]) // 1
 */
function first<T>(value: T[]): T | undefined {
  return value[0]
}

/**
 * Returns the last item in an array.
 *
 * @example
 *   last([1, 2, 3]) // 3
 */
function last<T>(value: T[]): T | undefined {
  return value.at(-1)
}

/**
 * Removes duplicate values from an array.
 *
 * @example
 *   unique([1, 1, 2]) // [1, 2]
 */
function unique<T>(value: T[]): T[] {
  return [...new Set(value)]
}

/**
 * Removes falsy values from an array.
 *
 * @example
 *   compact([0, 1, null, 2]) // [1, 2]
 */
function compact<T>(value: (T | null | undefined | false)[]): T[] {
  return value.filter(Boolean) as T[]
}

/**
 * Splits an array into chunks of the requested size.
 *
 * @example
 *   chunk([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 */
function chunk<T>(value: T[], size: number): T[][] {
  const result: T[][] = []

  for (let index = 0; index < value.length; index += size) {
    result.push(value.slice(index, index + size))
  }

  return result
}

/**
 * Returns a shuffled copy of an array.
 *
 * @example
 *   shuffle([1, 2, 3]) // [2, 1, 3]
 */
function shuffle<T>(value: T[]): T[] {
  const result = [...value]

  for (let index = result.length - 1; index > 0; index -= 1) {
    // oxlint-disable-next-line sonarjs/pseudo-random
    const randomIndex = Math.floor(Math.random() * (index + 1))

    const currentValue = result[index]
    const randomValue = result[randomIndex]

    result[index] = randomValue
    result[randomIndex] = currentValue
  }

  return result
}

/**
 * Moves an item from one index to another.
 *
 * @example
 *   move([1, 2, 3], 0, 2) // [2, 3, 1]
 */
function move<T>(value: T[], from: number, to: number): T[] {
  const result = [...value]

  const [item] = result.splice(from, 1)

  if (item !== undefined) {
    result.splice(to, 0, item)
  }

  return result
}

/**
 * Inserts an item at the requested index.
 *
 * @example
 *   insert([1, 3], 1, 2) // [1, 2, 3]
 */
function insert<T>(value: T[], index: number, item: T): T[] {
  const result = [...value]

  result.splice(index, 0, item)

  return result
}

/**
 * Removes all matching items from an array.
 *
 * @example
 *   remove([1, 2, 2, 3], 2) // [1, 3]
 */
function remove<T>(value: T[], item: T): T[] {
  return value.filter((current) => current !== item)
}

/**
 * Returns items that exist only in the left array.
 *
 * @example
 *   difference([1, 2, 3], [2]) // [1, 3]
 */
function difference<T>(left: T[], right: T[]): T[] {
  return left.filter((item) => !right.includes(item))
}

/**
 * Returns the shared items between two arrays.
 *
 * @example
 *   intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
 */
function intersection<T>(left: T[], right: T[]): T[] {
  return left.filter((item) => right.includes(item))
}

/**
 * Groups items by the selected key.
 *
 * @example
 *   groupBy([{ type: 'a' }, { type: 'b' }], 'type')
 */
function groupBy<T, K extends keyof T>(
  value: T[],
  key: K
): Record<string, T[]> {
  const groups: Record<string, T[]> = {}

  for (const item of value) {
    const group = String(item[key])

    groups[group] ??= []
    groups[group].push(item)
  }

  return groups
}

/**
 * Extracts a property from each item in an array.
 *
 * @example
 *   pluck([{ id: 1 }, { id: 2 }], 'id') // [1, 2]
 */
function pluck<T, K extends keyof T>(value: T[], key: K): T[K][] {
  return value.map((item) => item[key])
}

export const array = () => ({
  chunk,
  compact,
  difference,
  first,
  groupBy,
  insert,
  intersection,
  last,
  move,
  pluck,
  remove,
  shuffle,
  unique
})

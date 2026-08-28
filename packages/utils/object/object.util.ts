/**
 * Returns the keys of an object.
 *
 * @example
 *   keys({ id: 1 }) // ['id']
 */
function keys<T extends object>(value: T): (keyof T)[] {
  return Object.keys(value) as (keyof T)[]
}

/**
 * Returns the values of an object.
 *
 * @example
 *   values({ id: 1 }) // [1]
 */
function values<T extends object>(value: T): T[keyof T][] {
  return Object.values(value) as T[keyof T][]
}

/**
 * Returns the entries of an object.
 *
 * @example
 *   entries({ id: 1 }) // [['id', 1]]
 */
function entries<T extends object>(
  value: T
): [keyof T, T[keyof T]][] {
  return Object.entries(value) as [keyof T, T[keyof T]][]
}

/**
 * Deep clones a value.
 *
 * @example
 *   clone({ nested: true })
 */
function clone<T>(value: T): T {
  return structuredClone(value)
}

/**
 * Merges two objects into a new object.
 *
 * @example
 *   merge({ a: 1 }, { b: 2 }) // { a: 1, b: 2 }
 */
function merge<T extends object, U extends object>(
  left: T,
  right: U
): T & U {
  return {
    ...left,
    ...right
  }
}

/**
 * Picks the selected keys from an object.
 *
 * @example
 *   pick({ a: 1, b: 2 }, ['a']) // { a: 1 }
 */
function pick<T extends object, K extends keyof T>(
  value: T,
  selectedKeys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>

  for (const key of selectedKeys) {
    result[key] = value[key]
  }

  return result
}

/**
 * Removes the selected keys from an object.
 *
 * @example
 *   omit({ a: 1, b: 2 }, ['b']) // { a: 1 }
 */
function omit<T extends object, K extends keyof T>(
  value: T,
  omittedKeys: K[]
): Omit<T, K> {
  const result: Partial<T> = {}

  for (const key of Reflect.ownKeys(value) as (keyof T)[]) {
    if (omittedKeys.includes(key as K)) {
      continue
    }

    result[key] = value[key]
  }

  return result as Omit<T, K>
}

/**
 * Checks whether an object has an own property.
 *
 * @example
 *   hasOwn({ id: 1 }, 'id') // true
 */
function hasOwn<T extends object>(
  value: T,
  key: PropertyKey
): key is keyof T {
  return Object.hasOwn(value, key)
}

/**
 * Checks whether an object has no own keys.
 *
 * @example
 *   isEmpty({}) // true
 */
function isEmpty(value: object): boolean {
  return Object.keys(value).length === 0
}

export const object = () => ({
  clone,
  entries,
  hasOwn,
  isEmpty,
  keys,
  merge,
  omit,
  pick,
  values
})

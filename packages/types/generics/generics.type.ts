/**
 * Value or `null`.
 *
 * @example
 *   type Name = Nullable<string>
 */
type Nullable<T> = T | null

/**
 * Value, `null`, or `undefined`.
 *
 * @example
 *   type Name = Maybe<string>
 */
type Maybe<T> = T | null | undefined

/**
 * Empty object shape.
 *
 * @example
 *   type Props = EmptyObject
 */
type EmptyObject = Record<string, never>

/**
 * Supported entity identifier type.
 *
 * @example
 *   type Id = EntityId
 */
type EntityId = string | number

/**
 * Single value or array of values.
 *
 * @example
 *   type Tags = MaybeArray<string>
 */
type MaybeArray<T> = T | T[]

/**
 * Item type extracted from a readonly array.
 *
 * @example
 *   type Item = ArrayItem<readonly string[]>
 */
type ArrayItem<T extends readonly unknown[]> = T[number]

/**
 * Union of the values of an object type.
 *
 * @example
 *   type Color = ValueOf<{ primary: 'blue'; accent: 'green' }>
 */
type ValueOf<T> = T[keyof T]

/**
 * Expands an intersection into a readable object shape.
 *
 * @example
 *   type Result = Prettify<{ a: string } & { b: number }>
 */
type Prettify<T> = {
  [K in keyof T]: T[K]
}

/**
 * Replaces overlapping keys from `T` with `U`.
 *
 * @example
 *   type Result = Override<{ a: string; b: number }, { b: boolean }>
 */
type Override<T, U> = Omit<T, keyof U> & U

/**
 * Merges two object types and flattens the result.
 *
 * @example
 *   type Result = Merge<{ a: string }, { b: number }>
 */
type Merge<T, U> = Prettify<Omit<T, keyof U> & U>

/**
 * Makes selected keys required.
 *
 * @example
 *   type Result = MakeRequired<{ a?: string; b?: number }, 'a'>
 */
type MakeRequired<T, K extends keyof T> = Prettify<
  T & Required<Pick<T, K>>
>

/**
 * Makes selected keys optional.
 *
 * @example
 *   type Result = MakeOptional<{ a: string; b: number }, 'a'>
 */
type MakeOptional<T, K extends keyof T> = Prettify<
  Omit<T, K> & Partial<Pick<T, K>>
>

export type {
  ArrayItem,
  EmptyObject,
  EntityId,
  MakeOptional,
  MakeRequired,
  Maybe,
  MaybeArray,
  Merge,
  Nullable,
  Override,
  Prettify,
  ValueOf
}

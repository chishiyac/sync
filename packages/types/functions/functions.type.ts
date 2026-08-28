/**
 * Synchronous function signature with typed arguments and return
 * value.
 *
 * @example
 *   type Add = Fn<[number, number], number>
 */
type Fn<Args extends unknown[] = [], Return = void> = (
  ...args: Args
) => Return

/**
 * Function signature without arguments.
 *
 * @example
 *   type OnReady = Callback
 */
type Callback<Return = void> = Fn<[], Return>

/**
 * Factory function that returns a value.
 *
 * @example
 *   type CreateId = Factory<string>
 */
type Factory<T> = () => T

export type { Callback, Factory, Fn }

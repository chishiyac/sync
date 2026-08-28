/**
 * Async function signature with typed arguments and return value.
 *
 * @example
 *   type LoadUser = AsyncFn<[string], User>
 */
type AsyncFn<Args extends unknown[] = [], Return = void> = (
  ...args: Args
) => Promise<Return>

/**
 * Async factory that returns a promise.
 *
 * @example
 *   type LoadConfig = AsyncFactory<Config>
 */
type AsyncFactory<T> = () => Promise<T>

/**
 * Async function without arguments.
 *
 * @example
 *   type Refresh = AsyncCallback
 */
type AsyncCallback<Return = void> = AsyncFn<[], Return>

/**
 * Infers the resolved return type of a function.
 *
 * @example
 *   type Result = InferReturn<typeof fetchUser>
 */
type InferReturn<T extends (...args: never[]) => unknown> = Awaited<
  ReturnType<T>
>

/**
 * Infers the argument tuple of a function.
 *
 * @example
 *   type Args = InferArgs<typeof fetchUser>
 */
type InferArgs<T extends (...args: never[]) => unknown> =
  Parameters<T>

export type {
  AsyncCallback,
  AsyncFactory,
  AsyncFn,
  InferArgs,
  InferReturn
}

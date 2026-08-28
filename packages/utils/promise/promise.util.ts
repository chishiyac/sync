/** Retry behavior options. */
type RetryOptions = {
  /**
   * Maximum number of attempts.
   *
   * @default 3
   */
  attempts?: number
  /**
   * Delay between attempts in milliseconds.
   *
   * @default 0
   */
  delay?: number
}

function sleepTimeout(milliseconds: number): Promise<void> {
  const { promise, resolve } = Promise.withResolvers<null>()

  globalThis.setTimeout(() => {
    resolve(null)
  }, milliseconds)

  // oxlint-disable-next-line no-void github/no-then
  return promise.then(() => void 0)
}

/**
 * Waits for the requested number of milliseconds.
 *
 * @example
 *   delay(500)
 */
function delay(milliseconds: number): Promise<void> {
  return sleepTimeout(milliseconds)
}

/**
 * Alias for `delay`.
 *
 * @example
 *   sleep(500)
 */
const sleep = delay

/**
 * Rejects when a promise does not settle in time.
 *
 * @example
 *   timeout(fetchData(), 1000)
 */
function timeout<T>(
  promise: Promise<T>,
  milliseconds: number
): Promise<T> {
  return Promise.race([
    promise,
    (async () => {
      await sleepTimeout(milliseconds)
      throw new Error(`Promise timed out after ${milliseconds}ms`)
    })()
  ])
}

/**
 * Retries an async operation until it succeeds or exhausts attempts.
 *
 * @example
 *   retry(() =>
 *     fetch('/api/data').then((response) => response.json())
 *   )
 *
 * @default attempts 3
 * @default delay 0
 */
function retry<T>(
  operation: () => Promise<T>,
  { attempts = 3, delay: milliseconds = 0 }: RetryOptions = {}
): Promise<T> {
  const run = async (attempt: number): Promise<T> => {
    try {
      return await operation()
    } catch (error) {
      if (attempt < attempts && milliseconds > 0) {
        await delay(milliseconds)
        return run(attempt + 1)
      }

      throw error instanceof Error
        ? error
        : new Error('retry failed with a non-error value')
    }
  }

  return run(1)
}

/**
 * Creates a deferred promise pair.
 *
 * @example
 *   const deferred = deferred<string>()
 *   deferred.resolve('done')
 */
function deferred<T>() {
  const { promise, resolve, reject } = Promise.withResolvers<T>()

  return {
    promise,
    reject,
    resolve
  }
}

export const promise = () => ({
  deferred,
  delay,
  retry,
  sleep,
  timeout
})

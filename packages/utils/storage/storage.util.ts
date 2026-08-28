// oxlint-disable sonarjs/redundant-type-aliases
type StorageKey = string

type StorageValue = unknown

type StorageProvider = Pick<
  Storage,
  'getItem' | 'setItem' | 'removeItem' | 'clear' | 'key' | 'length'
>

function createStorage(storage: StorageProvider) {
  function get<T>(key: StorageKey): T | null {
    const value = storage.getItem(key)

    if (value === null) {
      return null
    }

    try {
      return JSON.parse(value) as T
    } catch {
      return value as T
    }
  }

  function set(key: StorageKey, value: StorageValue): void {
    storage.setItem(key, JSON.stringify(value))
  }

  function has(key: StorageKey): boolean {
    return storage.getItem(key) !== null
  }

  function remove(key: StorageKey): void {
    storage.removeItem(key)
  }

  function clear(): void {
    storage.clear()
  }

  function keys(): string[] {
    return Array.from({ length: storage.length }, (_, index) =>
      storage.key(index)
    ).filter((key): key is string => key !== null)
  }

  function entries<T = unknown>(): [string, T | null][] {
    return keys().map((key) => [key, get<T>(key)])
  }

  function size(): number {
    return storage.length
  }

  return {
    clear,
    entries,
    get,
    has,
    keys,
    remove,
    set,
    size
  } as const
}

export const storage = () => ({
  local: createStorage(localStorage),
  session: createStorage(sessionStorage)
})

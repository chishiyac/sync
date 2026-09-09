// oxlint-disable sonarjs/redundant-type-aliases
type StorageKey = string

type StorageValue = unknown

type StorageProvider = Pick<
  Storage,
  'getItem' | 'setItem' | 'removeItem' | 'clear' | 'key' | 'length'
>

type CookieStorage = Pick<
  ReturnType<typeof createStorage>,
  'get' | 'has' | 'remove' | 'set'
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

function createCookieStorage(): CookieStorage {
  function get<T>(key: StorageKey): T | null {
    try {
      // Cookie Store is not available in every Electron renderer version.
      const cookie = document.cookie
        .split('; ')
        .find((entry) => entry.startsWith(`${key}=`))

      if (!cookie) {
        return null
      }

      const value = decodeURIComponent(cookie.slice(key.length + 1))

      return JSON.parse(value) as T
    } catch {
      return null
    }
  }

  function set(key: StorageKey, value: StorageValue): void {
    // oxlint-disable-next-line unicorn/no-document-cookie
    document.cookie = `${key}=${encodeURIComponent(JSON.stringify(value))}; path=/; SameSite=Strict`
  }

  function has(key: StorageKey): boolean {
    return get(key) !== null
  }

  function remove(key: StorageKey): void {
    // oxlint-disable-next-line unicorn/no-document-cookie
    document.cookie = `${key}=; Max-Age=0; path=/; SameSite=Strict`
  }

  return { get, has, remove, set }
}

export const storage = () => ({
  cookie: createCookieStorage(),
  local: createStorage(localStorage),
  session: createStorage(sessionStorage)
})

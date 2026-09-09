import { base64, storage } from '@sync/utils'

import { SESSION_COOKIE_KEY } from '@/providers/session/session.provider.constants'

function getSshKey(): string | null {
  const accountsApi = window.api?.accounts
  const loggedAccount = accountsApi?.logged()

  if (accountsApi) {
    return loggedAccount?.key ?? null
  }

  const encodedKey = storage().cookie.get<string>(SESSION_COOKIE_KEY)

  if (!encodedKey) {
    return null
  }

  try {
    return base64().decode(encodedKey)
  } catch {
    storage().cookie.remove(SESSION_COOKIE_KEY)
    return null
  }
}

function isAuthenticated(): boolean {
  return getSshKey() !== null
}

export const proxy = () => ({
  getSshKey,
  isAuthenticated
})

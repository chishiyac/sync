import { createApiClient } from '@sync/api-client'
import type { GitHubAccount } from '@sync/api-client'
import { storage } from '@sync/utils'
import React from 'react'

import { proxy } from '@/router/proxies/proxy'

import { SESSION_COOKIE_KEY } from './session.provider.constants'
import { SessionContext } from './session.provider.context'

function readSshKey(): string | null {
  return proxy().getSshKey()
}

function Provider({ children }: React.PropsWithChildren) {
  const [accounts, setAccounts] = React.useState<GitHubAccount[]>(
    () => window.api?.accounts.all() ?? []
  )
  const [loggedAccount, setLoggedAccount] =
    React.useState<GitHubAccount | null>(
      () => window.api?.accounts.logged() ?? null
    )
  const [sshKey, setSshKey] = React.useState<string | null>(
    () => loggedAccount?.key ?? readSshKey()
  )

  async function signIn(value: string): Promise<void> {
    const data = await createApiClient(value).users.retrieveSelf()
    const timestamp = new Date().toISOString()
    const account: GitHubAccount = {
      avatar_url: data.avatar_url,
      created_at: data.created_at ?? timestamp,
      email: data.email ?? null,
      id: Number(data.id),
      key: value,
      last_access: timestamp,
      logged: true,
      login: data.login,
      name: data.name ?? null,
      node_id: data.node_id,
      updated_at: data.updated_at ?? timestamp,
      url: data.url
    }

    await window.api?.accounts.save(account)
    storage().cookie.remove(SESSION_COOKIE_KEY)
    setAccounts(window.api?.accounts.all() ?? [account])
    setLoggedAccount(account)
    setSshKey(value)
  }

  async function signOut(): Promise<void> {
    if (loggedAccount) {
      await window.api?.accounts.setLogged(loggedAccount.login, false)
    }

    storage().cookie.remove(SESSION_COOKIE_KEY)
    setAccounts(window.api?.accounts.all() ?? accounts)
    setLoggedAccount(null)
    setSshKey(null)
  }

  async function removeAccount(login: string): Promise<void> {
    await window.api?.accounts.remove(login)
    const nextAccounts = window.api?.accounts.all() ?? []

    setAccounts(nextAccounts)

    if (loggedAccount?.login === login) {
      storage().cookie.remove(SESSION_COOKIE_KEY)
      setLoggedAccount(null)
      setSshKey(null)
    }
  }

  return (
    <SessionContext.Provider
      value={{
        accounts,
        isAuthenticated: sshKey !== null,
        removeAccount,
        signIn,
        signOut,
        sshKey,
        token: sshKey
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export { Provider as SessionProvider }

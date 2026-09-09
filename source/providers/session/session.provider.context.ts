import type { GitHubAccount } from '@sync/api-client'
import React from 'react'

type ContextProps = {
  accounts: GitHubAccount[]
  isAuthenticated: boolean
  removeAccount: (login: string) => Promise<void>
  signIn: (sshKey: string) => Promise<void>
  signOut: () => Promise<void>
  sshKey: string | null
  token: string | null
}

const Context = React.createContext<ContextProps | undefined>(
  undefined
)

export { Context as SessionContext }

export type { ContextProps as SessionContextProps }

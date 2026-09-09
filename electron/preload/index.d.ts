import type { ElectronAPI } from '@electron-toolkit/preload'

import type { GitHubAccount } from '../../packages/api-client/api-client.types'

declare global {
  interface Window {
    api: {
      accounts: {
        all: () => GitHubAccount[]
        logged: () => GitHubAccount | null
        remove: (login: string) => Promise<void>
        save: (account: GitHubAccount) => Promise<void>
        setLogged: (login: string, logged: boolean) => Promise<void>
      }
    }
    electron: ElectronAPI
  }
}

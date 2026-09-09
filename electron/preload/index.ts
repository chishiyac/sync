import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

import type { GitHubAccount } from '../../packages/api-client/api-client.types'

// Custom APIs for renderer
const api = {
  accounts: {
    all: () =>
      ipcRenderer.sendSync('accounts:get-all') as GitHubAccount[],
    logged: () =>
      ipcRenderer.sendSync(
        'accounts:get-logged'
      ) as GitHubAccount | null,
    remove: (login: string) =>
      ipcRenderer.invoke('accounts:remove', login),
    save: (account: GitHubAccount) =>
      ipcRenderer.invoke('accounts:save', account),
    setLogged: (login: string, logged: boolean) =>
      ipcRenderer.invoke('accounts:set-logged', login, logged)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-expect-error (define in dts)
  window.electron = electronAPI
  // @ts-expect-error (define in dts)
  window.api = api
}

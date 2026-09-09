import { readFileSync } from 'node:fs'
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { app } from 'electron'

import type { GitHubAccount } from '../../packages/api-client/api-client.types'

type AccountsFile = Record<string, GitHubAccount>

const SYNC_FOLDER_NAME = '.sync'
const ACCOUNTS_FILE_NAME = 'accounts.json'

function getAccountsFilePath(): string {
  return join(
    app.getPath('userData'),
    SYNC_FOLDER_NAME,
    ACCOUNTS_FILE_NAME
  )
}

async function readAccounts(): Promise<AccountsFile> {
  try {
    const content = await readFile(getAccountsFilePath(), 'utf-8')
    const accounts = JSON.parse(content) as AccountsFile

    return accounts && typeof accounts === 'object' ? accounts : {}
  } catch {
    return {}
  }
}

async function saveAccount(account: GitHubAccount): Promise<void> {
  const filePath = getAccountsFilePath()
  const accounts = await readAccounts()
  const accountEntry = Object.entries(accounts).find(
    ([, storedAccount]) => storedAccount.login === account.login
  )
  const accountKey =
    accountEntry?.[0] ?? `account_${Object.keys(accounts).length + 1}`

  const normalizedAccounts = Object.fromEntries(
    Object.entries(accounts).map(([key, storedAccount]) => [
      key,
      account.logged
        ? { ...storedAccount, logged: false }
        : storedAccount
    ])
  )

  normalizedAccounts[accountKey] = account

  await mkdir(join(app.getPath('userData'), SYNC_FOLDER_NAME), {
    recursive: true
  })
  await writeFile(
    filePath,
    `${JSON.stringify(normalizedAccounts, null, 2)}\n`,
    'utf-8'
  )
}

function readAccountsSync(): AccountsFile {
  try {
    const content = readFileSync(getAccountsFilePath(), 'utf-8')
    const accounts = JSON.parse(content) as AccountsFile

    return accounts && typeof accounts === 'object' ? accounts : {}
  } catch {
    return {}
  }
}

function getAccounts(): GitHubAccount[] {
  return Object.values(readAccountsSync())
}

function getLoggedAccount(): GitHubAccount | null {
  return getAccounts().find((account) => account.logged) ?? null
}

async function setAccountLogged(
  login: string,
  logged: boolean
): Promise<void> {
  const accounts = await readAccounts()
  const account = Object.values(accounts).find(
    (storedAccount) => storedAccount.login === login
  )

  if (!account) {
    return
  }

  const updatedAccounts = Object.fromEntries(
    Object.entries(accounts).map(([key, storedAccount]) => {
      if (logged) {
        return [
          key,
          { ...storedAccount, logged: storedAccount.login === login }
        ]
      }

      if (storedAccount.login === login) {
        return [key, { ...storedAccount, logged: false }]
      }

      return [key, storedAccount]
    })
  )

  await writeFile(
    getAccountsFilePath(),
    `${JSON.stringify(updatedAccounts, null, 2)}\n`,
    'utf-8'
  )
}

async function removeAccount(login: string): Promise<void> {
  const accounts = await readAccounts()
  const updatedAccounts = Object.fromEntries(
    Object.entries(accounts).filter(
      ([, account]) => account.login !== login
    )
  )

  if (Object.keys(updatedAccounts).length === 0) {
    try {
      await unlink(getAccountsFilePath())
    } catch {
      return
    }

    return
  }

  await writeFile(
    getAccountsFilePath(),
    `${JSON.stringify(updatedAccounts, null, 2)}\n`,
    'utf-8'
  )
}

export {
  getAccounts,
  getLoggedAccount,
  removeAccount,
  saveAccount,
  setAccountLogged
}

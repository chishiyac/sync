import { createOctokit } from './api-router'
import * as rpc from './server'

function createApiClient(token?: string) {
  const client = createOctokit(token)

  return {
    users: {
      retrieve: (params?: Parameters<typeof rpc.Users.retrieve>[0]) =>
        rpc.Users.retrieve(params, client),
      retrieveSelf: (
        params?: Parameters<typeof rpc.Users.retrieveSelf>[0]
      ) => rpc.Users.retrieveSelf(params, client)
    }
  }
}

const apiClient = createApiClient()

export { apiClient, createApiClient }

import type { Endpoints } from '@octokit/types'

export type ExtractEndpointResponse<T extends keyof Endpoints> =
  Promise<Endpoints[T]['response']['data']>

export type ExtractEndpointParams<T extends keyof Endpoints> =
  Endpoints[T]['parameters']

export type GitHubAccount = {
  avatar_url: string
  created_at: string
  email: string | null
  id: number
  key: string
  last_access: string
  logged: boolean
  login: string
  name: string | null
  node_id: string
  updated_at: string
  url: string
}

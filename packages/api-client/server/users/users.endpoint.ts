import type { Octokit } from 'octokit'

// oxlint-disable no-inner-declarations typescript/no-namespace
import type {
  ExtractEndpointParams,
  ExtractEndpointResponse
} from '../../api-client.types'
import { octokit } from '../../api-router'

export namespace Users {
  export async function retrieveSelf(
    params?: ExtractEndpointParams<'GET /user'>,
    client: Octokit = octokit
  ): ExtractEndpointResponse<'GET /user'> {
    const response = await client.request('/user', params)

    return response.data
  }

  export async function retrieve(
    params?: ExtractEndpointParams<'GET /user/{account_id}'>,
    client: Octokit = octokit
  ): ExtractEndpointResponse<'GET /user/{account_id}'> {
    const response = await client.request(
      'GET /user/{account_id}',
      params
    )

    return response.data
  }
}

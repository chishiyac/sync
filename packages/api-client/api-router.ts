import { Octokit } from 'octokit'

function createOctokit(token?: string): Octokit {
  return new Octokit({
    auth: token,
    userAgent: 'sync-app'
  })
}

const octokit = createOctokit()

export { createOctokit, octokit }

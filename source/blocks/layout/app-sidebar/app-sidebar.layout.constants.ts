import {
  FolderGit2,
  GitPullRequest,
  House,
  ListTodo,
  ListTree
} from 'lucide-react'
import type React from 'react'

type AppSidebarLayoutNavItem = {
  id: `module-${string}`
  label: string
  icon: React.ElementType
  disabled?: boolean
  isActive?: boolean
}

export function generateMenu(
  params: {
    repositoryId?: string
  } = {}
): AppSidebarLayoutNavItem[] {
  if (params.repositoryId) {
    return [
      {
        icon: ListTree,
        id: 'module-all-commits',
        label: 'All Commits'
      },
      {
        icon: ListTodo,
        id: 'module-staged-changes',
        label: 'Staged Changes'
      }
    ]
  }

  return [
    {
      icon: House,
      id: 'module-home',
      label: 'Home'
    },
    {
      icon: FolderGit2,
      id: 'module-repositories',
      label: 'Repositories'
    },
    {
      icon: GitPullRequest,
      id: 'module-pull-requests',
      label: 'Pull Requests'
    }
  ]
}

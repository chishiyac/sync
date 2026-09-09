import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@sync/react'
import { useNavigate } from '@tanstack/react-router'
import { ChevronsUpDownIcon, LogOutIcon } from 'lucide-react'
import { useState } from 'react'

import { useSession } from '@/providers'

import {
  navUserErrorRecipe,
  navUserIconRecipe,
  navUserIdentityRecipe,
  navUserMenuRecipe,
  navUserNameRecipe,
  navUserTriggerRecipe,
  navUserUsernameRecipe
} from './nav-user.layout.styles'

function Block() {
  const { accounts, signOut } = useSession()
  const navigate = useNavigate()
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const account = accounts.find((item) => item.logged)

  if (!account) {
    return null
  }

  const name = account.name || account.login

  async function handleSignOut() {
    setIsSigningOut(true)
    setError(null)

    try {
      await signOut()
      await navigate({ to: '/' })
    } catch {
      setError('Could not sign out. Please try again.')
    }

    setIsSigningOut(false)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Menu
          positioning={{ placement: 'top-start', sameWidth: true }}
        >
          <MenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className={navUserTriggerRecipe()}
              aria-label={`Account menu for ${name}`}
            >
              <Avatar>
                <AvatarImage src={account.avatar_url} alt={name} />
                <AvatarFallback>
                  {name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className={navUserIdentityRecipe()}>
                <span className={navUserNameRecipe()}>{name}</span>
                <span className={navUserUsernameRecipe()}>
                  @{account.login}
                </span>
              </span>
              <ChevronsUpDownIcon
                aria-hidden='true'
                className={navUserIconRecipe()}
              />
            </SidebarMenuButton>
          </MenuTrigger>
          <MenuContent className={navUserMenuRecipe()}>
            <MenuItem
              value='sign-out'
              disabled={isSigningOut}
              onSelect={handleSignOut}
            >
              <LogOutIcon aria-hidden='true' />
              {isSigningOut ? 'Signing out…' : 'Sign out'}
            </MenuItem>
          </MenuContent>
        </Menu>
        {error && (
          <p role='alert' className={navUserErrorRecipe()}>
            {error}
          </p>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

export { Block as NavUserLayoutBlock }

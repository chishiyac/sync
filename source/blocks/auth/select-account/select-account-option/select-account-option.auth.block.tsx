import type { GitHubAccount } from '@sync/api-client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger
} from '@sync/react'
import { EllipsisVerticalIcon } from 'lucide-react'
import { useState } from 'react'

import { RemoveAccountAuthBlock } from './remove-account'
import {
  selectAccountOptionActionRecipe,
  selectAccountOptionDescriptionRecipe,
  selectAccountOptionMenuRecipe,
  selectAccountOptionRecipe,
  selectAccountOptionTitleRecipe
} from './select-account-option.auth.styles'

type BlockProps = {
  avatar_url: GitHubAccount['avatar_url']
  email: GitHubAccount['email']
  login: GitHubAccount['login']
  onAccountSelect?: () => void
  onRemove?: () => void
}

function Block({
  avatar_url,
  email,
  login,
  onAccountSelect,
  onRemove
}: BlockProps) {
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

  return (
    <Item
      variant='outline'
      className={selectAccountOptionRecipe()}
      onClick={onAccountSelect}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onAccountSelect?.()
        }
      }}
      role='button'
      tabIndex={0}
    >
      <ItemMedia>
        <Avatar>
          <AvatarImage src={avatar_url} />
          <AvatarFallback>{login.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle className={selectAccountOptionTitleRecipe()}>
          {login}
        </ItemTitle>
        <ItemDescription
          className={selectAccountOptionDescriptionRecipe()}
        >
          {email}
        </ItemDescription>
      </ItemContent>
      <ItemActions onClick={(event) => event.stopPropagation()}>
        <Menu>
          <MenuTrigger asChild>
            <Button
              aria-label={`More actions for ${login}`}
              className={selectAccountOptionActionRecipe()}
              size='icon-md'
              variant='ghost'
            >
              <EllipsisVerticalIcon />
            </Button>
          </MenuTrigger>
          <MenuContent className={selectAccountOptionMenuRecipe()}>
            <MenuItem
              onSelect={() => setIsRemoveDialogOpen(true)}
              value='remove'
              variant='destructive'
            >
              Remove
            </MenuItem>
          </MenuContent>
        </Menu>
      </ItemActions>
      <RemoveAccountAuthBlock
        accountName={login}
        onConfirm={onRemove}
        onOpenChange={setIsRemoveDialogOpen}
        open={isRemoveDialogOpen}
      />
    </Item>
  )
}

export { Block as SelectAccountOptionAuthBlock }

export type { BlockProps as SelectAccountOptionAuthBlockProps }

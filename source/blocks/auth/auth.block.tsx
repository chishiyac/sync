import type { GitHubAccount } from '@sync/api-client'
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  GridPattern
} from '@sync/react'
import { useState } from 'react'

import { GradientBackground } from '@/components'
import { ANIMATED_BACKGROUND_PALETTE } from '@/constants'
import { useSession } from '@/providers'

import { AccountPreviewAuthBlock } from './account-preview/account-preview.auth.block'
import {
  authDialogStackContentRecipe,
  authGridPatternRecipe,
  authPrimaryGridPatternRecipe
} from './auth.styles'
import { SelectAccountAuthBlock } from './select-account'
import { SignInAuthBlock } from './sign-in'

function Block() {
  const { accounts, removeAccount } = useSession()
  const [selectedAccount, setSelectedAccount] =
    useState<GitHubAccount | null>(null)

  return (
    <DialogStack open>
      <GradientBackground
        gradientColors={ANIMATED_BACKGROUND_PALETTE.high}
      />
      <GridPattern className={authGridPatternRecipe()} gap={100} />
      <GridPattern
        color='var(--color-primary)'
        className={authPrimaryGridPatternRecipe()}
        gap={100}
      />
      <DialogStackBody>
        <DialogStackContent
          className={authDialogStackContentRecipe()}
          index={0}
        >
          <SignInAuthBlock />
        </DialogStackContent>
        <DialogStackContent
          className={authDialogStackContentRecipe()}
          index={1}
        >
          <SelectAccountAuthBlock
            accounts={accounts}
            onAccountRemove={removeAccount}
            onAccountSelect={setSelectedAccount}
          />
        </DialogStackContent>
        <DialogStackContent
          className={authDialogStackContentRecipe()}
          index={2}
        >
          <AccountPreviewAuthBlock account={selectedAccount} />
        </DialogStackContent>
      </DialogStackBody>
    </DialogStack>
  )
}

export { Block as AuthBlock }

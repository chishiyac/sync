import type { GitHubAccount } from '@sync/api-client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardHeader,
  DialogStackPrevious,
  DotPattern,
  FieldDescription,
  FieldTitle,
  Spinner,
  Stack
} from '@sync/react'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { useSession } from '@/providers'

import {
  accountPreviewActionsRecipe,
  accountPreviewAvatarRecipe,
  accountPreviewCardRecipe,
  accountPreviewContentRecipe,
  accountPreviewDetailsRecipe,
  accountPreviewHeaderRecipe,
  accountPreviewIdentityRecipe,
  accountPreviewPatternRecipe,
  accountPreviewStackRecipe,
  accountPreviewUsernameRecipe
} from './account-preview.auth.styles'

type BlockProps = {
  account: GitHubAccount | null
}

function Block({ account }: BlockProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useSession()

  if (!account) {
    return null
  }

  const selectedAccount = account

  async function handleContinue() {
    setIsSubmitting(true)

    try {
      await signIn(selectedAccount.key)
      await navigate({ to: '/app' })
    } catch (error) {
      setIsSubmitting(false)
      throw error
    }

    setIsSubmitting(false)
  }

  return (
    <Card className={accountPreviewCardRecipe()}>
      <Stack
        orientation='column'
        align='center'
        justify='center'
        className={accountPreviewStackRecipe()}
      >
        <CardHeader className={accountPreviewHeaderRecipe()}>
          <FieldTitle>Welcome back</FieldTitle>
          <FieldDescription>
            Continue with the selected account.
          </FieldDescription>
        </CardHeader>
        <DotPattern className={accountPreviewPatternRecipe()} />
        <CardContent className={accountPreviewContentRecipe()}>
          <Stack
            orientation='column'
            align='center'
            className={accountPreviewIdentityRecipe()}
          >
            <Avatar className={accountPreviewAvatarRecipe()}>
              <AvatarImage src={account.avatar_url} />
              <AvatarFallback>
                {account.login.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <Stack
              orientation='column'
              align='center'
              className={accountPreviewDetailsRecipe()}
            >
              <FieldTitle className={accountPreviewUsernameRecipe()}>
                {account.login}
              </FieldTitle>
              <FieldDescription>{account.email}</FieldDescription>
            </Stack>
          </Stack>
        </CardContent>
        <Stack
          orientation='column'
          className={accountPreviewActionsRecipe()}
        >
          <Button disabled={isSubmitting} onClick={handleContinue}>
            {isSubmitting ? <Spinner /> : 'Continue'}
          </Button>
          <DialogStackPrevious asChild>
            <Button variant='outline'>Choose another account</Button>
          </DialogStackPrevious>
        </Stack>
      </Stack>
    </Card>
  )
}

export { Block as AccountPreviewAuthBlock }

export type { BlockProps as AccountPreviewAuthBlockProps }

import type { GitHubAccount } from '@sync/api-client'
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  DialogStackPrevious,
  FieldDescription,
  FieldTitle,
  ItemGroup,
  ScrollArea,
  Stack,
  useDialogStack
} from '@sync/react'

import { authFieldDescriptionRecipe } from '../auth.styles'
import { SelectAccountOptionAuthBlock } from './select-account-option'
import {
  selectAccountBackButtonRecipe,
  selectAccountCardRecipe,
  selectAccountFooterRecipe,
  selectAccountHeaderRecipe,
  selectAccountHeaderStackRecipe,
  selectAccountItemGroupRecipe,
  selectAccountScrollRecipe,
  selectAccountStackRecipe
} from './select-account.auth.styles'

type BlockProps = {
  accounts: GitHubAccount[]
  onAccountSelect: (account: GitHubAccount) => void
  onAccountRemove: (login: string) => Promise<void>
}

function Block({
  accounts,
  onAccountRemove,
  onAccountSelect
}: BlockProps) {
  const { setActiveIndex } = useDialogStack()

  function handleAccountSelect(account: GitHubAccount) {
    onAccountSelect(account)
    setActiveIndex(2)
  }

  return (
    <Card className={selectAccountCardRecipe()}>
      <Stack
        orientation='column'
        align='center'
        justify='start'
        className={selectAccountStackRecipe()}
      >
        <CardHeader className={selectAccountHeaderRecipe()}>
          <Stack
            align='center'
            className={selectAccountHeaderStackRecipe()}
            justify='center'
            orientation='column'
          >
            <FieldTitle>Last login</FieldTitle>
            <FieldDescription
              className={authFieldDescriptionRecipe()}
            >
              Select a account below
            </FieldDescription>
          </Stack>
        </CardHeader>
        <ScrollArea className={selectAccountScrollRecipe()}>
          <ItemGroup className={selectAccountItemGroupRecipe()}>
            {accounts.map((person) => (
              <SelectAccountOptionAuthBlock
                onAccountSelect={() => handleAccountSelect(person)}
                onRemove={() => onAccountRemove(person.login)}
                {...person}
                key={person.login}
              />
            ))}
          </ItemGroup>
        </ScrollArea>
        <CardFooter className={selectAccountFooterRecipe()}>
          <DialogStackPrevious asChild>
            <Button
              variant='outline'
              className={selectAccountBackButtonRecipe()}
            >
              Back
            </Button>
          </DialogStackPrevious>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export { Block as SelectAccountAuthBlock }

export type { BlockProps as SelectAccountAuthBlockProps }

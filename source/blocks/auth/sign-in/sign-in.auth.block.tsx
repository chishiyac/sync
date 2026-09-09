import { zodResolver } from '@hookform/resolvers/zod'
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Button,
  Card,
  DialogStackNext,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Input,
  Spinner,
  Stack
} from '@sync/react'
import { useNavigate } from '@tanstack/react-router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { cn } from 'tailwind-variants'

import { Brand } from '@/components'
import { useSession } from '@/providers'

import { authFieldDescriptionRecipe } from '../auth.styles'
import {
  SIGN_IN_AUTH_BLOCK_DEFAULT_VALUES,
  SIGN_IN_AUTH_BLOCK_FIELD_IDS
} from './sign-in.auth.constants'
import type { FormSignInAuthSchema } from './sign-in.auth.schema'
import { formSignInAuthSchema } from './sign-in.auth.schema'
import {
  signInAccountAvatarRecipe,
  signInBrandRecipe,
  signInCardRecipe,
  signInFieldGroupRecipe,
  signInFooterRecipe,
  signInFormRecipe,
  signInHeaderStackRecipe,
  signInSubmitFieldRecipe
} from './sign-in.auth.styles'

type BlockProps = React.ComponentProps<'form'>

function Block({ className, ...props }: BlockProps) {
  const form = useForm<FormSignInAuthSchema>({
    defaultValues: SIGN_IN_AUTH_BLOCK_DEFAULT_VALUES,
    resolver: zodResolver(formSignInAuthSchema)
  })

  const { isValid, isSubmitting } = form.formState
  const navigate = useNavigate()

  const { accounts, signIn } = useSession()

  async function onSubmit(input: FormSignInAuthSchema) {
    try {
      await signIn(input.value.trim())
      await navigate({ to: '/app' })
    } catch {
      form.setError('value', {
        message: 'Invalid GitHub Classic Token'
      })
    }
  }

  return (
    <Card className={signInCardRecipe()}>
      <form
        className={cn(signInFormRecipe(), className)}
        method='POST'
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        <FieldGroup className={signInFieldGroupRecipe()}>
          <Stack
            align='center'
            className={signInHeaderStackRecipe()}
            justify='center'
            orientation='column'
          >
            <Brand className={signInBrandRecipe()} />
            <FieldTitle>Welcome to Sync</FieldTitle>
            <FieldDescription
              className={authFieldDescriptionRecipe()}
            >
              Enter your SSH private key below to continue.
            </FieldDescription>
          </Stack>
          <FieldGroup>
            <Controller
              control={form.control}
              name='value'
              render={({ field, fieldState }) => (
                <Field invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={SIGN_IN_AUTH_BLOCK_FIELD_IDS.sshKey}
                  >
                    SSH private key
                  </FieldLabel>
                  <Input
                    aria-invalid={fieldState.invalid}
                    autoComplete='off'
                    disabled={isSubmitting}
                    id={SIGN_IN_AUTH_BLOCK_FIELD_IDS.sshKey}
                    placeholder='ghp_xxxxxxxXXxXXxXXXXXxxxxXXXXXX....'
                    {...field}
                  />
                  {fieldState.invalid && (
                    <FieldError>
                      {fieldState.error?.message}
                    </FieldError>
                  )}
                </Field>
              )}
            />
            <FieldGroup>
              <Field className={signInSubmitFieldRecipe()}>
                <Button
                  disabled={isSubmitting || !isValid}
                  type='submit'
                >
                  {isSubmitting ? <Spinner /> : 'Continue'}
                </Button>
              </Field>
              {accounts.length > 0 && (
                <Field>
                  <DialogStackNext asChild>
                    <Button type='button' variant='secondary'>
                      Other accounts
                      <AvatarGroup aria-hidden='true'>
                        {accounts.slice(0, 3).map((account) => (
                          <Avatar
                            key={account.login}
                            className={signInAccountAvatarRecipe()}
                          >
                            <AvatarImage
                              src={account.avatar_url}
                              alt=''
                            />
                            <AvatarFallback>
                              {(account.name || account.login)
                                .charAt(0)
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </AvatarGroup>
                    </Button>
                  </DialogStackNext>
                </Field>
              )}
            </FieldGroup>
          </FieldGroup>
        </FieldGroup>
      </form>
      <span className={signInFooterRecipe()}>
        Created by AvalSoft
      </span>
    </Card>
  )
}

export { Block as SignInAuthBlock }

export type { BlockProps as SignInAuthBlockProps }

'use client'

import {
  TagsInput as ArkTagsInput,
  useTagsInput as useArkTagsInput,
  useTagsInputContext as useArkTagsInputContext
} from '@ark-ui/react/tags-input'
import { XIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  InputGroup,
  InputGroupButton,
  InputGroupInput
} from '../input-group'
import {
  tagsInputClearTriggerRecipe,
  tagsInputControlRecipe,
  tagsInputInputRecipe,
  tagsInputItemDeleteTriggerRecipe,
  tagsInputItemInputRecipe,
  tagsInputItemPreviewRecipe,
  tagsInputItemRecipe,
  tagsInputItemTextRecipe,
  tagsInputRootProviderRecipe,
  tagsInputRootRecipe
} from './tags-input.core.styles'

/**
 * Props for the Input Group component.
 *
 * @example
 *   type Example = InputGroupProps
 */
type InputGroupProps = React.ComponentProps<typeof InputGroup>

/**
 * Props for the Tags Input component.
 *
 * @example
 *   type Example = TagsInputProps
 */
type TagsInputProps = React.ComponentProps<typeof ArkTagsInput.Root> &
  Pick<InputGroupProps, 'size'> & {
    /**
     * Whether to show the clear button.
     *
     * @default true
     */
    showClear?: boolean
  }

/**
 * Props for the Tags Input Control component.
 *
 * @example
 *   type Example = TagsInputControlProps
 */
type TagsInputControlProps = React.ComponentProps<
  typeof ArkTagsInput.Control
> &
  Pick<InputGroupProps, 'size'> & {
    /**
     * Whether to show the clear button.
     *
     * @default true
     */
    showClear?: boolean
  }

/**
 * Props for the Tags Input Item component.
 *
 * @example
 *   type Example = TagsInputItemProps
 */
type TagsInputItemProps = React.ComponentProps<
  typeof ArkTagsInput.Item
> &
  Pick<InputGroupProps, 'size'> & {
    /**
     * Whether to show the clear trigger.
     *
     * @default true
     */
    showDelete?: boolean
  }

/**
 * Props for the Tags Input Root Provider component.
 *
 * @example
 *   type Example = TagsInputRootProviderProps
 */
type TagsInputRootProviderProps = React.ComponentProps<
  typeof ArkTagsInput.RootProvider
> &
  Pick<InputGroupProps, 'size'> & {
    /**
     * Whether to show the clear button.
     *
     * @default true
     */
    showClear?: boolean
  }

/**
 * Props for the Tags Input Item Text component.
 *
 * @example
 *   type Example = TagsInputItemTextProps
 */
type TagsInputItemTextProps = React.ComponentProps<
  typeof ArkTagsInput.ItemText
>

/**
 * Props for the Tags Input Item Delete Trigger component.
 *
 * @example
 *   type Example = TagsInputItemDeleteTriggerProps
 */
type TagsInputItemDeleteTriggerProps = React.ComponentProps<
  typeof ArkTagsInput.ItemDeleteTrigger
>

/**
 * Props for the Tags Input Item Input component.
 *
 * @example
 *   type Example = TagsInputItemInputProps
 */
type TagsInputItemInputProps = React.ComponentProps<
  typeof ArkTagsInput.ItemInput
>

/**
 * Props for the Tags Input Input component.
 *
 * @example
 *   type Example = TagsInputInputProps
 */
type TagsInputInputProps = React.ComponentProps<
  typeof ArkTagsInput.Input
>

/**
 * Props for the Tags Input Clear Trigger component.
 *
 * @example
 *   type Example = TagsInputClearTriggerProps
 */
type TagsInputClearTriggerProps = React.ComponentProps<
  typeof ArkTagsInput.ClearTrigger
>

/**
 * Props for the Tags Input Item Preview component.
 *
 * @example
 *   type Example = TagsInputItemPreviewProps
 */
type TagsInputItemPreviewProps = React.ComponentProps<
  typeof ArkTagsInput.ItemPreview
>

const TagsInputContext = ArkTagsInput.Context

const useTagsInput = useArkTagsInput

const useTagsInputContext = useArkTagsInputContext

/**
 * Renders the Tags Input Item Preview component.
 *
 * @example
 *   ;<TagsInputItemPreview />
 */
function TagsInputItemPreview({
  className,
  ...props
}: TagsInputItemPreviewProps) {
  return (
    <ArkTagsInput.ItemPreview
      className={cn(tagsInputItemPreviewRecipe(), className)}
      data-slot='tags-input-item-preview'
      {...props}
    />
  )
}

/**
 * Renders the Tags Input Item Text component.
 *
 * @example
 *   ;<TagsInputItemText />
 */
function TagsInputItemText({
  className,
  ...props
}: TagsInputItemTextProps) {
  return (
    <ArkTagsInput.ItemText
      className={cn(tagsInputItemTextRecipe(), className)}
      data-slot='tags-input-item-text'
      {...props}
    />
  )
}

/**
 * Renders the Tags Input Item Delete Trigger component.
 *
 * @example
 *   ;<TagsInputItemDeleteTrigger />
 */
function TagsInputItemDeleteTrigger({
  className,
  children,
  ...props
}: TagsInputItemDeleteTriggerProps) {
  return (
    <ArkTagsInput.ItemDeleteTrigger
      asChild
      data-slot='tags-input-item-delete-trigger'
      {...props}
    >
      <InputGroupButton
        className={cn(tagsInputItemDeleteTriggerRecipe(), className)}
        size='icon-xs'
        variant='ghost'
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroupButton>
    </ArkTagsInput.ItemDeleteTrigger>
  )
}

/**
 * Renders the Tags Input Item Input component.
 *
 * @example
 *   ;<TagsInputItemInput />
 */
function TagsInputItemInput({ ...props }: TagsInputItemInputProps) {
  return (
    <ArkTagsInput.ItemInput
      asChild
      data-slot='tags-input-item-input'
      {...props}
    >
      <InputGroupInput className={tagsInputItemInputRecipe()} />
    </ArkTagsInput.ItemInput>
  )
}

/**
 * Renders the Tags Input Item component.
 *
 * @example
 *   ;<TagsInputItem />
 */
function TagsInputItem({
  showDelete = true,
  className,
  children,
  ...props
}: TagsInputItemProps) {
  return (
    <ArkTagsInput.Item
      className={cn(tagsInputItemRecipe(), className)}
      data-slot='tags-input-item'
      {...props}
    >
      <TagsInputItemPreview>
        <TagsInputItemText>{children}</TagsInputItemText>
        {showDelete && <TagsInputItemDeleteTrigger />}
      </TagsInputItemPreview>
      <TagsInputItemInput />
    </ArkTagsInput.Item>
  )
}

/**
 * Renders the Tags Input Input component.
 *
 * @example
 *   ;<TagsInputInput />
 */
function TagsInputInput({ ...props }: TagsInputInputProps) {
  return (
    <ArkTagsInput.Input
      asChild
      data-slot='tags-input-input'
      {...props}
    >
      <InputGroupInput className={tagsInputInputRecipe()} />
    </ArkTagsInput.Input>
  )
}

/**
 * Renders the Tags Input Clear Trigger component.
 *
 * @example
 *   ;<TagsInputClearTrigger />
 */
function TagsInputClearTrigger({
  className,
  children,
  ...props
}: TagsInputClearTriggerProps) {
  return (
    <ArkTagsInput.ClearTrigger
      asChild
      data-slot='tags-input-clear-trigger'
      {...props}
    >
      <InputGroupButton
        className={cn(tagsInputClearTriggerRecipe(), className)}
        size='icon-xs'
        variant='ghost'
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroupButton>
    </ArkTagsInput.ClearTrigger>
  )
}

/**
 * Renders the Tags Input Control component.
 *
 * @example
 *   ;<TagsInputControl />
 */
function TagsInputControl({
  size,
  showClear = true,
  className,
  children,
  ...props
}: TagsInputControlProps) {
  const api = useTagsInputContext()

  return (
    <ArkTagsInput.Control asChild data-slot='tags-input-control'>
      <InputGroup
        className={cn(tagsInputControlRecipe(), className)}
        size={size}
        {...props}
      >
        {children}
        {showClear && api.value.length > 0 && (
          <TagsInputClearTrigger aria-label='Clear all tags' />
        )}
      </InputGroup>
    </ArkTagsInput.Control>
  )
}

/**
 * Renders the Tags Input component.
 *
 * @example
 *   ;<TagsInput />
 */
function TagsInput({
  size = 'md',
  showClear,
  editable = false,
  tabIndex,
  className,
  children,
  ...props
}: TagsInputProps) {
  return (
    <ArkTagsInput.Root
      className={cn(tagsInputRootRecipe(), className)}
      data-size={size}
      data-slot='tags-input'
      editable={editable}
      {...props}
    >
      <TagsInputControl showClear={showClear}>
        {children}
        <TagsInputInput placeholder='Add' />
      </TagsInputControl>
      <ArkTagsInput.HiddenInput tabIndex={tabIndex} />
    </ArkTagsInput.Root>
  )
}

/**
 * Renders the Tags Input Root Provider component.
 *
 * @example
 *   ;<TagsInputRootProvider />
 */
function TagsInputRootProvider({
  size = 'md',
  showClear,
  className,
  children,
  ...props
}: TagsInputRootProviderProps) {
  return (
    <ArkTagsInput.RootProvider
      className={cn(tagsInputRootProviderRecipe(), className)}
      data-size={size}
      data-slot='tags-input-root-provider'
      {...props}
    >
      <TagsInputControl showClear={showClear}>
        {children}
      </TagsInputControl>
      <ArkTagsInput.HiddenInput />
    </ArkTagsInput.RootProvider>
  )
}

export {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemInput,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputRootProvider,
  useTagsInput,
  useTagsInputContext
}

export type {
  TagsInputClearTriggerProps,
  TagsInputControlProps,
  TagsInputInputProps,
  TagsInputItemDeleteTriggerProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemProps,
  TagsInputItemTextProps,
  TagsInputProps,
  TagsInputRootProviderProps
}

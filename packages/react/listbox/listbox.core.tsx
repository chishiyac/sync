'use client'

import {
  Listbox as ArkListbox,
  useListboxContext
} from '@ark-ui/react/listbox'
import { CheckIcon } from 'lucide-react'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { MenuShortcut } from '../menu'
import {
  listboxContentRecipe,
  listboxEmptyRecipe,
  listboxItemGroupLabelRecipe,
  listboxItemGroupRecipe,
  listboxItemIndicatorRecipe,
  listboxItemRecipe,
  listboxItemTextRecipe,
  listboxRootRecipe,
  listboxValueText
} from './listbox.core.styles'

/**
 * Supported listbox item variants.
 *
 * @example
 *   type Example = ListboxItemVariant
 */
type ListboxItemVariant = 'default' | 'destructive'

/**
 * Props for the Listbox component.
 *
 * @example
 *   type Example = ListboxProps
 */
type ListboxProps = React.ComponentProps<typeof ArkListbox.Root>

/**
 * Props for the Listbox Item component.
 *
 * @example
 *   type Example = ListboxItemProps
 */
type ListboxItemProps = React.ComponentProps<typeof ArkListbox.Item> &
  VariantProps<typeof listboxItemRecipe> & {
    /**
     * The visual variant of the listbox item.
     *
     * @default 'default'
     */
    variant?: ListboxItemVariant
  }

/**
 * Props for the Listbox Item Group component.
 *
 * @example
 *   type Example = ListboxItemGroupProps
 */
type ListboxItemGroupProps = React.ComponentProps<
  typeof ArkListbox.ItemGroup
> & {
  /** The heading of the listbox item group. */
  heading?: string
}

/**
 * Props for the Listbox Content component.
 *
 * @example
 *   type Example = ListboxContentProps
 */
type ListboxContentProps = React.ComponentProps<
  typeof ArkListbox.Content
>

/**
 * Props for the Listbox Item Text component.
 *
 * @example
 *   type Example = ListboxItemTextProps
 */
type ListboxItemTextProps = React.ComponentProps<
  typeof ArkListbox.ItemText
>

/**
 * Props for the Listbox Item Group Label component.
 *
 * @example
 *   type Example = ListboxItemGroupLabelProps
 */
type ListboxItemGroupLabelProps = React.ComponentProps<
  typeof ArkListbox.ItemGroupLabel
>

/**
 * Props for the Listbox Value Text component.
 *
 * @example
 *   type Example = ListboxValueTextProps
 */
type ListboxValueTextProps = React.ComponentProps<
  typeof ArkListbox.ValueText
>

/**
 * Props for the Listbox Item Indicator component.
 *
 * @example
 *   type Example = ListboxItemIndicatorProps
 */
type ListboxItemIndicatorProps = React.ComponentProps<
  typeof ArkListbox.ItemIndicator
>

/**
 * Props for the Listbox Empty component.
 *
 * @example
 *   type Example = ListboxEmptyProps
 */
type ListboxEmptyProps = React.ComponentProps<typeof ArkListbox.Empty>

/**
 * Props for the Listbox Shortcut component.
 *
 * @example
 *   type Example = ListboxShortcutProps
 */
type ListboxShortcutProps = React.ComponentProps<typeof MenuShortcut>

const useListbox = useListboxContext

/**
 * Renders the Listbox component.
 *
 * @example
 *   ;<Listbox />
 */
function Listbox({ className, ...props }: ListboxProps) {
  return (
    <ArkListbox.Root
      className={cn(listboxRootRecipe(), className)}
      data-slot='listbox'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Content component.
 *
 * @example
 *   ;<ListboxContent />
 */
function ListboxContent({
  className,
  ...props
}: ListboxContentProps) {
  return (
    <ArkListbox.Content
      className={cn(listboxContentRecipe(), className)}
      data-slot='listbox-content'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Item component.
 *
 * @example
 *   ;<ListboxItem />
 */
function ListboxItem({
  variant = 'default',
  className,
  ...props
}: ListboxItemProps) {
  return (
    <ArkListbox.Item
      className={cn(listboxItemRecipe({ variant }), className)}
      data-slot='listbox-item'
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Listbox Item Text component.
 *
 * @example
 *   ;<ListboxItemText />
 */
function ListboxItemText({
  className,
  ...props
}: ListboxItemTextProps) {
  return (
    <ArkListbox.ItemText
      className={cn(listboxItemTextRecipe(), className)}
      data-slot='listbox-item-text'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Item Group Label component.
 *
 * @example
 *   ;<ListboxItemGroupLabel />
 */
function ListboxItemGroupLabel({
  className,
  ...props
}: ListboxItemGroupLabelProps) {
  return (
    <ArkListbox.ItemGroupLabel
      className={cn(listboxItemGroupLabelRecipe(), className)}
      data-slot='listbox-item-group-label'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Item Group component.
 *
 * @example
 *   ;<ListboxItemGroup />
 */
function ListboxItemGroup({
  heading,
  className,
  children,
  ...props
}: ListboxItemGroupProps) {
  return (
    <ArkListbox.ItemGroup
      className={cn(listboxItemGroupRecipe(), className)}
      data-slot='listbox-item-group'
      {...props}
    >
      {!!heading && (
        <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>
      )}
      {children}
    </ArkListbox.ItemGroup>
  )
}

/**
 * Renders the Listbox Value Text component.
 *
 * @example
 *   ;<ListboxValueText />
 */
function ListboxValueText({
  className,
  ...props
}: ListboxValueTextProps) {
  return (
    <ArkListbox.ValueText
      className={cn(listboxValueText(), className)}
      data-slot='listbox-value-text'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Item Indicator component.
 *
 * @example
 *   ;<ListboxItemIndicator />
 */
function ListboxItemIndicator({
  className,
  children,
  ...props
}: ListboxItemIndicatorProps) {
  return (
    <ArkListbox.ItemIndicator
      className={cn(listboxItemIndicatorRecipe(), className)}
      data-slot='listbox-item-indicator'
      {...props}
    >
      {children ?? <CheckIcon />}
    </ArkListbox.ItemIndicator>
  )
}

/**
 * Renders the Listbox Empty component.
 *
 * @example
 *   ;<ListboxEmpty />
 */
function ListboxEmpty({ className, ...props }: ListboxEmptyProps) {
  return (
    <ArkListbox.Empty
      className={cn(listboxEmptyRecipe(), className)}
      data-slot='listbox-empty'
      {...props}
    />
  )
}

/**
 * Renders the Listbox Shortcut component.
 *
 * @example
 *   ;<ListboxShortcut />
 */
function ListboxShortcut({ ...props }: ListboxShortcutProps) {
  return <MenuShortcut data-slot='listbox-shortcut' {...props} />
}

export {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxShortcut,
  ListboxValueText,
  useListbox
}

export type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemGroupProps,
  ListboxItemIndicatorProps,
  ListboxItemProps,
  ListboxItemTextProps,
  ListboxItemVariant,
  ListboxProps,
  ListboxShortcutProps,
  ListboxValueTextProps
}

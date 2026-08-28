'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Separator } from '../separator'
import {
  itemActionsRecipe,
  itemContentRecipe,
  itemDescriptionRecipe,
  itemFooterRecipe,
  itemGroupRecipe,
  itemHeaderRecipe,
  itemMediaRecipe,
  itemRootRecipe,
  itemSeparatorRecipe,
  itemTitleRecipe
} from './item.core.styles'

/**
 * Props for the Item component.
 *
 * @example
 *   type Example = ItemProps
 */
type ItemProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof itemRootRecipe>

/**
 * Props for the Item Media component.
 *
 * @example
 *   type Example = ItemMediaProps
 */
type ItemMediaProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof itemMediaRecipe>

/**
 * Props for the Item Group component.
 *
 * @example
 *   type Example = ItemGroupProps
 */
type ItemGroupProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Item Separator component.
 *
 * @example
 *   type Example = ItemSeparatorProps
 */
type ItemSeparatorProps = React.ComponentProps<typeof Separator>

/**
 * Props for the Item Content component.
 *
 * @example
 *   type Example = ItemContentProps
 */
type ItemContentProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Item Title component.
 *
 * @example
 *   type Example = ItemTitleProps
 */
type ItemTitleProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Item Description component.
 *
 * @example
 *   type Example = ItemDescriptionProps
 */
type ItemDescriptionProps = React.ComponentProps<typeof ark.p>

/**
 * Props for the Item Actions component.
 *
 * @example
 *   type Example = ItemActionsProps
 */
type ItemActionsProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Item Header component.
 *
 * @example
 *   type Example = ItemHeaderProps
 */
type ItemHeaderProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Item Footer component.
 *
 * @example
 *   type Example = ItemFooterProps
 */
type ItemFooterProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Item Group component.
 *
 * @example
 *   ;<ItemGroup />
 */
function ItemGroup({ className, ...props }: ItemGroupProps) {
  return (
    <ark.div
      className={cn(itemGroupRecipe(), className)}
      data-slot='item-group'
      role='list'
      {...props}
    />
  )
}

/**
 * Renders the Item Separator component.
 *
 * @example
 *   ;<ItemSeparator />
 */
function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
  return (
    <Separator
      className={cn(itemSeparatorRecipe(), className)}
      data-slot='item-separator'
      orientation='horizontal'
      {...props}
    />
  )
}

/**
 * Renders the Item component.
 *
 * @example
 *   ;<Item />
 */
function Item({
  variant = 'default',
  className,
  ...props
}: ItemProps) {
  return (
    <ark.div
      className={cn(itemRootRecipe({ variant }), className)}
      data-slot='item'
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Item Media component.
 *
 * @example
 *   ;<ItemMedia />
 */
function ItemMedia({
  variant = 'default',
  className,
  ...props
}: ItemMediaProps) {
  return (
    <ark.div
      className={cn(itemMediaRecipe({ className, variant }))}
      data-slot='item-media'
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Item Content component.
 *
 * @example
 *   ;<ItemContent />
 */
function ItemContent({ className, ...props }: ItemContentProps) {
  return (
    <ark.div
      className={cn(itemContentRecipe(), className)}
      data-slot='item-content'
      {...props}
    />
  )
}

/**
 * Renders the Item Title component.
 *
 * @example
 *   ;<ItemTitle />
 */
function ItemTitle({ className, ...props }: ItemTitleProps) {
  return (
    <ark.div
      className={cn(itemTitleRecipe(), className)}
      data-slot='item-title'
      {...props}
    />
  )
}

/**
 * Renders the Item Description component.
 *
 * @example
 *   ;<ItemDescription />
 */
function ItemDescription({
  className,
  ...props
}: ItemDescriptionProps) {
  return (
    <ark.p
      className={cn(itemDescriptionRecipe(), className)}
      data-slot='item-description'
      {...props}
    />
  )
}

/**
 * Renders the Item Actions component.
 *
 * @example
 *   ;<ItemActions />
 */
function ItemActions({ className, ...props }: ItemActionsProps) {
  return (
    <ark.div
      className={cn(itemActionsRecipe(), className)}
      data-slot='item-actions'
      {...props}
    />
  )
}

/**
 * Renders the Item Header component.
 *
 * @example
 *   ;<ItemHeader />
 */
function ItemHeader({ className, ...props }: ItemHeaderProps) {
  return (
    <ark.div
      className={cn(itemHeaderRecipe(), className)}
      data-slot='item-header'
      {...props}
    />
  )
}

/**
 * Renders the Item Footer component.
 *
 * @example
 *   ;<ItemFooter />
 */
function ItemFooter({ className, ...props }: ItemFooterProps) {
  return (
    <ark.div
      className={cn(itemFooterRecipe(), className)}
      data-slot='item-footer'
      {...props}
    />
  )
}

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle
}

export type {
  ItemActionsProps,
  ItemContentProps,
  ItemDescriptionProps,
  ItemFooterProps,
  ItemGroupProps,
  ItemHeaderProps,
  ItemMediaProps,
  ItemProps,
  ItemSeparatorProps,
  ItemTitleProps
}

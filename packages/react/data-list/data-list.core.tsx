'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  dataListItemLabelRecipe,
  dataListItemRecipe,
  dataListItemValueRecipe,
  dataListRootRecipe
} from './data-list.core.styles'

/**
 * Supported data list orientations.
 *
 * @example
 *   type Example = DataListOrientation
 */
type DataListOrientation = 'horizontal' | 'vertical'

/**
 * Props for the Data List component.
 *
 * @example
 *   type Example = DataListProps
 */
type DataListProps = React.ComponentProps<typeof ark.dl> & {
  /**
   * The orientation of the data list.
   *
   * @default 'horizontal'
   */
  orientation?: DataListOrientation
}

/**
 * Props for the Data List Item component.
 *
 * @example
 *   type Example = DataListItemProps
 */
type DataListItemProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Data List Item Label component.
 *
 * @example
 *   type Example = DataListItemLabelProps
 */
type DataListItemLabelProps = React.ComponentProps<typeof ark.dt>

/**
 * Props for the Data List Item Value component.
 *
 * @example
 *   type Example = DataListItemValueProps
 */
type DataListItemValueProps = React.ComponentProps<typeof ark.dd>

/**
 * Renders the Data List component.
 *
 * @example
 *   ;<DataList />
 */
function DataList({
  orientation = 'horizontal',
  className,
  children,
  ...props
}: DataListProps) {
  return (
    <ark.dl
      className={cn(dataListRootRecipe(), className)}
      data-orientation={orientation}
      data-slot='data-list'
      {...props}
    >
      {children}
    </ark.dl>
  )
}

/**
 * Renders the Data List Item component.
 *
 * @example
 *   ;<DataListItem />
 */
function DataListItem({ className, ...props }: DataListItemProps) {
  return (
    <ark.div
      className={cn(dataListItemRecipe(), className)}
      data-slot='data-list-item'
      {...props}
    />
  )
}

/**
 * Renders the Data List Item Label component.
 *
 * @example
 *   ;<DataListItemLabel />
 */
function DataListItemLabel({
  className,
  ...props
}: DataListItemLabelProps) {
  return (
    <ark.dt
      className={cn(dataListItemLabelRecipe(), className)}
      data-slot='data-list-item-label'
      {...props}
    />
  )
}

/**
 * Renders the Data List Item Value component.
 *
 * @example
 *   ;<DataListItemValue />
 */
function DataListItemValue({
  className,
  ...props
}: DataListItemValueProps) {
  return (
    <ark.dd
      className={cn(dataListItemValueRecipe(), className)}
      data-slot='data-list-item-value'
      {...props}
    />
  )
}

export type {
  DataListItemLabelProps,
  DataListItemProps,
  DataListItemValueProps,
  DataListOrientation,
  DataListProps
}

export {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue
}

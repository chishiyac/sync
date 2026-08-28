'use client'

import { ark } from '@ark-ui/react/factory'
import { ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  breadcrumbEllipsisIconRecipe,
  breadcrumbItemRecipe,
  breadcrumbLinkRecipe,
  breadcrumbListRecipe,
  breadcrumbPageRecipe,
  breadcrumbSeparatorRecipe
} from './breadcrumb.core.styles'

/**
 * Props for the Breadcrumb component.
 *
 * @example
 *   type Example = BreadcrumbProps
 */
type BreadcrumbProps = React.ComponentProps<typeof ark.nav> & {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @default 'Breadcrumb'
   */
  'aria-label'?: string
}

/**
 * Props for the Breadcrumb Item component.
 *
 * @example
 *   type Example = BreadcrumbItemProps
 */
type BreadcrumbItemProps = React.ComponentProps<typeof ark.li>

/**
 * Props for the Breadcrumb List component.
 *
 * @example
 *   type Example = BreadcrumbListProps
 */
type BreadcrumbListProps = React.ComponentProps<typeof ark.ol>

/**
 * Props for the Breadcrumb Link component.
 *
 * @example
 *   type Example = BreadcrumbLinkProps
 */
type BreadcrumbLinkProps = React.ComponentProps<typeof ark.a>

/**
 * Props for the Breadcrumb Page component.
 *
 * @example
 *   type Example = BreadcrumbPageProps
 */
type BreadcrumbPageProps = React.ComponentProps<typeof ark.span>

/**
 * Props for the Breadcrumb Separator component.
 *
 * @example
 *   type Example = BreadcrumbSeparatorProps
 */
type BreadcrumbSeparatorProps = React.ComponentProps<typeof ark.li>

/**
 * Props for the Breadcrumb Ellipsis component.
 *
 * @example
 *   type Example = BreadcrumbEllipsisProps
 */
type BreadcrumbEllipsisProps = React.ComponentProps<typeof ark.span>

/**
 * Renders the Breadcrumb component.
 *
 * @example
 *   ;<Breadcrumb />
 */
function Breadcrumb({
  'aria-label': ariaLabel = 'Breadcrumb',
  ...props
}: BreadcrumbProps) {
  return (
    <ark.nav
      aria-label={ariaLabel}
      data-slot='breadcrumb'
      {...props}
    />
  )
}

/**
 * Renders the Breadcrumb List component.
 *
 * @example
 *   ;<BreadcrumbList />
 */
function BreadcrumbList({
  className,
  ...props
}: BreadcrumbListProps) {
  return (
    <ark.ol
      className={cn(breadcrumbListRecipe(), className)}
      data-slot='breadcrumb-list'
      role='list'
      {...props}
    />
  )
}

/**
 * Renders the Breadcrumb Item component.
 *
 * @example
 *   ;<BreadcrumbItem />
 */
function BreadcrumbItem({
  className,
  ...props
}: BreadcrumbItemProps) {
  return (
    <ark.li
      className={cn(breadcrumbItemRecipe(), className)}
      data-slot='breadcrumb-item'
      {...props}
    />
  )
}

/**
 * Renders the Breadcrumb Link component.
 *
 * @example
 *   ;<BreadcrumbLink />
 */
function BreadcrumbLink({
  className,
  ...props
}: BreadcrumbLinkProps) {
  return (
    <ark.a
      className={cn(breadcrumbLinkRecipe(), className)}
      data-slot='breadcrumb-link'
      {...props}
    />
  )
}

/**
 * Renders the Breadcrumb Page component.
 *
 * @example
 *   ;<BreadcrumbPage />
 */
function BreadcrumbPage({
  className,
  ...props
}: BreadcrumbPageProps) {
  return (
    <ark.span
      aria-current='page'
      className={cn(breadcrumbPageRecipe(), className)}
      data-slot='breadcrumb-page'
      {...props}
    />
  )
}

/**
 * Renders the Breadcrumb Separator component.
 *
 * @example
 *   ;<BreadcrumbSeparator />
 */
function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <ark.li
      aria-hidden='true'
      className={cn(breadcrumbSeparatorRecipe(), className)}
      data-slot='breadcrumb-separator'
      role='presentation'
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </ark.li>
  )
}

/**
 * Renders the Breadcrumb Ellipsis component.
 *
 * @example
 *   ;<BreadcrumbEllipsis />
 */
function BreadcrumbEllipsis({ ...props }: BreadcrumbEllipsisProps) {
  return (
    <ark.span
      aria-hidden='true'
      data-slot='breadcrumb-ellipsis'
      role='presentation'
      {...props}
    >
      <MoreHorizontalIcon
        className={breadcrumbEllipsisIconRecipe()}
      />
    </ark.span>
  )
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
}

export type {
  BreadcrumbEllipsisProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbListProps,
  BreadcrumbPageProps,
  BreadcrumbProps,
  BreadcrumbSeparatorProps
}

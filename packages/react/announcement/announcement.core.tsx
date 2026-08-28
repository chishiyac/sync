'use client'

import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import {
  announcementRootRecipe,
  announcementTitleRecipe
} from './announcement.core.styles'

/**
 * Supported ARIA roles.
 *
 * @example
 *   type Example = AnnouncementRole
 */
type AnnouncementRole = 'status' | 'alert'

/**
 * Props for the Announcement component.
 *
 * @example
 *   type Example = AnnouncementProps
 */
type AnnouncementProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof announcementRootRecipe> & {
    /**
     * The ARIA role of the announcement.
     *
     * @default 'status'
     */
    role?: AnnouncementRole
  }

/**
 * Props for the Announcement Title component.
 *
 * @example
 *   type Example = AnnouncementTitleProps
 */
type AnnouncementTitleProps = React.ComponentProps<typeof ark.span>

/**
 * Renders the Announcement component.
 *
 * @example
 *   ;<Announcement />
 */
function Announcement({
  className,
  role = 'status',
  ...props
}: AnnouncementProps) {
  return (
    <ark.div
      className={cn(announcementRootRecipe(), className)}
      data-slot='announcement'
      role={role}
      {...props}
    />
  )
}

/**
 * Renders the Announcement Title component.
 *
 * @example
 *   ;<AnnouncementTitle />
 */
function AnnouncementTitle({
  className,
  ...props
}: AnnouncementTitleProps) {
  return (
    <ark.span
      className={cn(announcementTitleRecipe(), className)}
      data-slot='announcement-title'
      {...props}
    />
  )
}

export { Announcement, AnnouncementTitle }

export type {
  AnnouncementProps,
  AnnouncementRole,
  AnnouncementTitleProps
}

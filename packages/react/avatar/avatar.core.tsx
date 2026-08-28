'use client'

import {
  Avatar as ArkAvatar,
  useAvatarContext
} from '@ark-ui/react/avatar'
import { ark } from '@ark-ui/react/factory'
import type React from 'react'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import { Status } from '../status'
import type { statusRecipe } from '../status/status.core.styles'
import {
  avatarBadgeRecipe,
  avatarFallbackRecipe,
  avatarGroupCountRecipe,
  avatarGroupRecipe,
  avatarImageRecipe,
  avatarRootRecipe
} from './avatar.core.styles'

/**
 * Props for the Avatar component.
 *
 * @example
 *   type Example = AvatarProps
 */
type AvatarProps = React.ComponentProps<typeof ArkAvatar.Root> &
  VariantProps<typeof avatarRootRecipe>

/**
 * Props for the Avatar Badge component.
 *
 * @example
 *   type Example = AvatarBadgeProps
 */
type AvatarBadgeProps = React.ComponentProps<typeof ark.span> &
  VariantProps<typeof statusRecipe>

/**
 * Props for the Avatar Image component.
 *
 * @example
 *   type Example = AvatarImageProps
 */
type AvatarImageProps = React.ComponentProps<typeof ArkAvatar.Image>

/**
 * Props for the Avatar Fallback component.
 *
 * @example
 *   type Example = AvatarFallbackProps
 */
type AvatarFallbackProps = React.ComponentProps<
  typeof ArkAvatar.Fallback
>

/**
 * Props for the Avatar Group component.
 *
 * @example
 *   type Example = AvatarGroupProps
 */
type AvatarGroupProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Avatar Group Count component.
 *
 * @example
 *   type Example = AvatarGroupCountProps
 */
type AvatarGroupCountProps = React.ComponentProps<typeof ark.div>

const useAvatar = useAvatarContext

/**
 * Renders the Avatar component.
 *
 * @example
 *   ;<Avatar />
 */
function Avatar({ size = 'md', className, ...props }: AvatarProps) {
  return (
    <ArkAvatar.Root
      className={cn(avatarRootRecipe({ size }), className)}
      data-size={size}
      data-slot='avatar'
      {...props}
    />
  )
}

/**
 * Renders the Avatar Image component.
 *
 * @example
 *   ;<AvatarImage />
 */
function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <ArkAvatar.Image
      className={cn(avatarImageRecipe(), className)}
      data-slot='avatar-image'
      {...props}
    />
  )
}

/**
 * Renders the Avatar Fallback component.
 *
 * @example
 *   ;<AvatarFallback />
 */
function AvatarFallback({
  className,
  ...props
}: AvatarFallbackProps) {
  return (
    <ArkAvatar.Fallback
      className={cn(avatarFallbackRecipe(), className)}
      data-slot='avatar-fallback'
      {...props}
    />
  )
}

/**
 * Renders the Avatar Badge component.
 *
 * @example
 *   ;<AvatarBadge />
 */
function AvatarBadge({
  variant,
  className,
  ...props
}: AvatarBadgeProps) {
  return (
    <Status
      className={cn(avatarBadgeRecipe(), className)}
      data-slot='avatar-badge'
      variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Avatar Group component.
 *
 * @example
 *   ;<AvatarGroup />
 */
function AvatarGroup({ className, ...props }: AvatarGroupProps) {
  return (
    <ark.div
      className={cn(avatarGroupRecipe(), className)}
      data-slot='avatar-group'
      {...props}
    />
  )
}

/**
 * Renders the Avatar Group Count component.
 *
 * @example
 *   ;<AvatarGroupCount />
 */
function AvatarGroupCount({
  className,
  ...props
}: AvatarGroupCountProps) {
  return (
    <ark.div
      className={cn(avatarGroupCountRecipe(), className)}
      data-slot='avatar-group-count'
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  useAvatar
}

export type {
  AvatarBadgeProps,
  AvatarFallbackProps,
  AvatarGroupCountProps,
  AvatarGroupProps,
  AvatarImageProps,
  AvatarProps
}

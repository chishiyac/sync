import { ark } from '@ark-ui/react/factory'
import type { VariantProps } from 'tailwind-variants'
import { cn } from 'tailwind-variants'

import {
  cardActionRecipe,
  cardContentRecipe,
  cardDescriptionRecipe,
  cardFooterRecipe,
  cardHeaderRecipe,
  cardMediaRecipe,
  cardRootRecipe,
  cardTitleRecipe
} from './card.core.styles'

/**
 * Props for the Card Media component.
 *
 * @example
 *   type Example = CardMediaProps
 */
type CardMediaProps = React.ComponentProps<typeof ark.div> &
  VariantProps<typeof cardMediaRecipe>

/**
 * Props for the Card Header component.
 *
 * @example
 *   type Example = CardHeaderProps
 */
type CardHeaderProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card component.
 *
 * @example
 *   type Example = CardProps
 */
type CardProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card Title component.
 *
 * @example
 *   type Example = CardTitleProps
 */
type CardTitleProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card Description component.
 *
 * @example
 *   type Example = CardDescriptionProps
 */
type CardDescriptionProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card Action component.
 *
 * @example
 *   type Example = CardActionProps
 */
type CardActionProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card Content component.
 *
 * @example
 *   type Example = CardContentProps
 */
type CardContentProps = React.ComponentProps<typeof ark.div>

/**
 * Props for the Card Footer component.
 *
 * @example
 *   type Example = CardFooterProps
 */
type CardFooterProps = React.ComponentProps<typeof ark.div>

/**
 * Renders the Card component.
 *
 * @example
 *   ;<Card />
 */
function Card({ className, ...props }: CardProps) {
  return (
    <ark.div
      className={cn(cardRootRecipe(), className)}
      data-slot='card'
      {...props}
    />
  )
}

/**
 * Renders the Card Media component.
 *
 * @example
 *   ;<CardMedia />
 */
function CardMedia({
  variant = 'default',
  className,
  ...props
}: CardMediaProps) {
  return (
    <ark.div
      className={cn(cardMediaRecipe({ variant }), className)}
      data-slot='card-media'
      data-variant={variant}
      {...props}
    />
  )
}

/**
 * Renders the Card Header component.
 *
 * @example
 *   ;<CardHeader />
 */
function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <ark.div
      className={cn(cardHeaderRecipe(), className)}
      data-slot='card-header'
      {...props}
    >
      {children}
    </ark.div>
  )
}

/**
 * Renders the Card Title component.
 *
 * @example
 *   ;<CardTitle />
 */
function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <ark.div
      className={cn(cardTitleRecipe(), className)}
      data-slot='card-title'
      {...props}
    />
  )
}

/**
 * Renders the Card Description component.
 *
 * @example
 *   ;<CardDescription />
 */
function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <ark.div
      className={cn(cardDescriptionRecipe(), className)}
      data-slot='card-description'
      {...props}
    />
  )
}

/**
 * Renders the Card Action component.
 *
 * @example
 *   ;<CardAction />
 */
function CardAction({ className, ...props }: CardActionProps) {
  return (
    <ark.div
      className={cn(cardActionRecipe(), className)}
      data-slot='card-action'
      {...props}
    />
  )
}

/**
 * Renders the Card Content component.
 *
 * @example
 *   ;<CardContent />
 */
function CardContent({ className, ...props }: CardContentProps) {
  return (
    <ark.div
      className={cn(cardContentRecipe(), className)}
      data-slot='card-content'
      {...props}
    />
  )
}

/**
 * Renders the Card Footer component.
 *
 * @example
 *   ;<CardFooter />
 */
function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <ark.div
      className={cn(cardFooterRecipe(), className)}
      data-slot='card-footer'
      {...props}
    />
  )
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle
}

export type {
  CardActionProps,
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardMediaProps,
  CardProps,
  CardTitleProps
}

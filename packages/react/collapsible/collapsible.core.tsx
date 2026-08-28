'use client'

import {
  Collapsible as ArkCollapsible,
  useCollapsibleContext
} from '@ark-ui/react/collapsible'
import { ChevronDownIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  collapsibleContentRecipe,
  collapsibleIndicatorChevronRecipe,
  collapsibleIndicatorRecipe,
  collapsibleRootRecipe,
  collapsibleTriggerRecipe
} from './collapsible.core.styles'

/**
 * Props for the Collapsible component.
 *
 * @example
 *   type Example = CollapsibleProps
 */
type CollapsibleProps = React.ComponentProps<
  typeof ArkCollapsible.Root
>

/**
 * Props for the Collapsible Trigger component.
 *
 * @example
 *   type Example = CollapsibleTriggerProps
 */
type CollapsibleTriggerProps = React.ComponentProps<
  typeof ArkCollapsible.Trigger
>

/**
 * Props for the Collapsible Content component.
 *
 * @example
 *   type Example = CollapsibleContentProps
 */
type CollapsibleContentProps = React.ComponentProps<
  typeof ArkCollapsible.Content
>

/**
 * Props for the Collapsible Indicator component.
 *
 * @example
 *   type Example = CollapsibleIndicatorProps
 */
type CollapsibleIndicatorProps = React.ComponentProps<
  typeof ArkCollapsible.Indicator
>

const useCollapsible = useCollapsibleContext

/**
 * Renders the Collapsible component.
 *
 * @example
 *   ;<Collapsible />
 */
function Collapsible({
  collapsedHeight,
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: CollapsibleProps) {
  return (
    <ArkCollapsible.Root
      className={cn(collapsibleRootRecipe(), className)}
      collapsedHeight={collapsedHeight}
      data-partial-collapse={collapsedHeight ? '' : undefined}
      data-slot='collapsible'
      lazyMount={collapsedHeight ? false : lazyMount}
      unmountOnExit={collapsedHeight ? false : unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Collapsible Trigger component.
 *
 * @example
 *   ;<CollapsibleTrigger />
 */
function CollapsibleTrigger({
  className,
  ...props
}: CollapsibleTriggerProps) {
  return (
    <ArkCollapsible.Trigger
      className={cn(collapsibleTriggerRecipe(), className)}
      data-slot='collapsible-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Collapsible Content component.
 *
 * @example
 *   ;<CollapsibleContent />
 */
function CollapsibleContent({
  className,
  children,
  ...props
}: CollapsibleContentProps) {
  return (
    <ArkCollapsible.Content
      className={collapsibleContentRecipe()}
      data-slot='collapsible-content'
      {...props}
    >
      <div className={className}>{children}</div>
    </ArkCollapsible.Content>
  )
}

/**
 * Renders the Collapsible Indicator component.
 *
 * @example
 *   ;<CollapsibleIndicator />
 */
function CollapsibleIndicator({
  className,
  ...props
}: CollapsibleIndicatorProps) {
  return (
    <ArkCollapsible.Indicator
      className={cn(collapsibleIndicatorRecipe(), className)}
      data-slot='collapsible-indicator'
      {...props}
    >
      <ChevronDownIcon
        className={collapsibleIndicatorChevronRecipe()}
      />
    </ArkCollapsible.Indicator>
  )
}

export {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
  useCollapsible
}

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleProps,
  CollapsibleTriggerProps
}

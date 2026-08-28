'use client'

import { JsonTreeView as ArkJsonTreeView } from '@ark-ui/react/json-tree-view'
import { ChevronRightIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  jsonTreeViewRecipe,
  jsonTreeViewTreeRecipe
} from './json-tree-view.core.styles'

/**
 * Props for the Json Tree View component.
 *
 * @example
 *   type Example = JsonTreeViewProps
 */
type JsonTreeViewProps = React.ComponentProps<
  typeof ArkJsonTreeView.Root
> & {
  /** Custom renderer for branch values. */
  renderValue?: React.ComponentProps<
    typeof ArkJsonTreeView.Tree
  >['renderValue']
}

/**
 * Props for the Json Tree View Tree component.
 *
 * @example
 *   type Example = JsonTreeViewTreeProps
 */
type JsonTreeViewTreeProps = React.ComponentProps<
  typeof ArkJsonTreeView.Tree
>

/**
 * Renders the Json Tree View Tree component.
 *
 * @example
 *   ;<JsonTreeViewTree />
 */
function JsonTreeViewTree({
  className,
  ...props
}: JsonTreeViewTreeProps) {
  return (
    <ArkJsonTreeView.Tree
      arrow={<ChevronRightIcon />}
      className={cn(jsonTreeViewTreeRecipe(), className)}
      data-slot='json-tree-view-tree'
      {...props}
    />
  )
}

/**
 * Renders the Json Tree View component.
 *
 * @example
 *   ;<JsonTreeView />
 */
function JsonTreeView({
  lazyMount = true,
  unmountOnExit = true,
  className,
  renderValue,
  ...props
}: JsonTreeViewProps) {
  return (
    <ArkJsonTreeView.Root
      className={cn(jsonTreeViewRecipe(), className)}
      data-slot='json-tree-view'
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    >
      <JsonTreeViewTree renderValue={renderValue} />
    </ArkJsonTreeView.Root>
  )
}

export { JsonTreeView }

export type { JsonTreeViewProps, JsonTreeViewTreeProps }

'use client'

import {
  Splitter as ArkSplitter,
  useSplitterContext
} from '@ark-ui/react/splitter'
import { GripVertical } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  resizableRecipe,
  resizableResizeHandleRecipe,
  resizableResizeTriggerHandleRecipe,
  resizableResizeTriggerRecipe
} from './resizable.core.styles'

/**
 * Props for the Resizable component.
 *
 * @example
 *   type Example = ResizableProps
 */
type ResizableProps = React.ComponentProps<typeof ArkSplitter.Root>

/**
 * Props for the Resizable Resize Trigger component.
 *
 * @example
 *   type Example = ResizableResizeTriggerProps
 */
type ResizableResizeTriggerProps = React.ComponentProps<
  typeof ArkSplitter.ResizeTrigger
> & {
  /**
   * Whether to show the handle
   *
   * @default false
   */
  withHandle?: boolean
}

/**
 * Props for the Resizable Panel component.
 *
 * @example
 *   type Example = ResizablePanelProps
 */
type ResizablePanelProps = React.ComponentProps<
  typeof ArkSplitter.Panel
>

const useResizable = useSplitterContext

/**
 * Renders the Resizable component.
 *
 * @example
 *   ;<Resizable />
 */
function Resizable({ className, ...props }: ResizableProps) {
  return (
    <ArkSplitter.Root
      className={cn(resizableRecipe(), className)}
      data-slot='resizable'
      {...props}
    />
  )
}

/**
 * Renders the Resizable Panel component.
 *
 * @example
 *   ;<ResizablePanel />
 */
function ResizablePanel({ ...props }: ResizablePanelProps) {
  return <ArkSplitter.Panel data-slot='resizable-panel' {...props} />
}

/**
 * Renders the Resizable Resize Trigger component.
 *
 * @example
 *   ;<ResizableResizeTrigger />
 */
function ResizableResizeTrigger({
  withHandle = false,
  className,
  ...props
}: ResizableResizeTriggerProps) {
  return (
    <ArkSplitter.ResizeTrigger
      aria-label='Resize'
      className={cn(resizableResizeTriggerHandleRecipe(), className)}
      data-slot='resizable-resize-trigger'
      {...props}
    >
      {withHandle && (
        <div className={resizableResizeHandleRecipe()}>
          <GripVertical className={resizableResizeTriggerRecipe()} />
        </div>
      )}
    </ArkSplitter.ResizeTrigger>
  )
}

export {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
  useResizable
}

export type {
  ResizablePanelProps,
  ResizableProps,
  ResizableResizeTriggerProps
}

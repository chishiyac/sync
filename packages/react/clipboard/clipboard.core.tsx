'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import {
  CLIPBOARD_DEFAULT_ICON_PROPS,
  CLIPBOARD_FEEDBACK_RESET_DELAY
} from './clipboard.core.constants'
import { clipboardRootRecipe } from './clipboard.core.styles'
import { copyText } from './clipboard.core.utils'

/**
 * Props for the Clipboard Icon component.
 *
 * @example
 *   type Example = ClipboardIconProps
 */
type ClipboardIconProps = {
  default: React.ReactNode
  feedback: React.ReactNode
}

/**
 * Props for the Clipboard component.
 *
 * @example
 *   type Example = ClipboardProps
 */
type ClipboardProps = Omit<
  React.ComponentProps<typeof Button>,
  'children' | 'onClick'
> & {
  value: string
  icon?: ClipboardIconProps
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/**
 * Renders the Clipboard component.
 *
 * @example
 *   ;<Clipboard />
 */
function Clipboard({
  className,
  icon = CLIPBOARD_DEFAULT_ICON_PROPS,
  hint,
  onClick,
  value,
  ...props
}: ClipboardProps) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  )

  useEffect(
    () => () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current)
      }
    },
    []
  )

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    onClick?.(event)

    if (event.defaultPrevented) {
      return
    }

    void copyText(value)

    setCopied(true)

    if (resetTimer.current) {
      clearTimeout(resetTimer.current)
    }

    resetTimer.current = setTimeout(() => {
      setCopied(false)
    }, CLIPBOARD_FEEDBACK_RESET_DELAY)
  }

  const feedback = copied ? 'Copied!' : 'Copy'

  return (
    <Button
      aria-label={feedback}
      className={cn(clipboardRootRecipe(), className)}
      hint={
        hint ?? {
          align: 'end',
          children: feedback
        }
      }
      size='icon-sm'
      onClick={handleClick}
      {...props}
    >
      {copied ? icon.feedback : icon.default}
    </Button>
  )
}

export { Clipboard }

export type { ClipboardIconProps, ClipboardProps }

'use client'

import { Slot } from '@radix-ui/react-slot'
import { errors } from '@sync/utils'
import { AnimatePresence, motion } from 'motion/react'
import React from 'react'
import { cn } from 'tailwind-variants'

import {
  WARP_DIALOG_ACTIVE_BACKGROUND_COLOR,
  WARP_DIALOG_ANIMATION_EASE,
  WARP_DIALOG_CONTENT_ANIMATION_DURATION,
  WARP_DIALOG_ENTER_DURATION,
  WARP_DIALOG_EXIT_DURATION,
  WARP_DIALOG_INITIAL_BACKGROUND_COLOR,
  WARP_DIALOG_LOOPING_ANIMATION
} from './warp-dialog.core.constants'
import {
  warpDialogAnimationPrimaryHaloRecipe,
  warpDialogAnimationPrimaryRecipe,
  warpDialogAnimationRootRecipe,
  warpDialogAnimationSecondaryHaloRecipe,
  warpDialogContentPositionerRecipe,
  warpDialogContentRecipe,
  warpDialogOverlayRecipe
} from './warp-dialog.core.styles'

/**
 * Props for the Warp Dialog component.
 *
 * @example
 *   type Example = WarpDialogProps
 */
type WarpDialogProps = React.ComponentProps<'div'> & {
  /** Whether the dialog is open. */
  open?: boolean
  /** Called when the dialog's open state changes. */
  onOpenChange?: (open: boolean) => void
}

/**
 * Props for the Warp Dialog trigger component.
 *
 * @example
 *   type Example = WarpDialogTriggerProps
 */
type WarpDialogTriggerProps = React.ComponentProps<'div'> & {
  /** Renders the trigger using its child element. */
  asChild?: boolean
}

/**
 * Props for the Warp Dialog overlay component.
 *
 * @example
 *   type Example = WarpDialogOverlayProps
 */
type WarpDialogOverlayProps = React.ComponentProps<'div'>

/**
 * Props for the Warp Dialog content component.
 *
 * @example
 *   type Example = WarpDialogContentProps
 */
type WarpDialogContentProps = React.ComponentProps<typeof motion.div>

type WarpDialogContextType = {
  open: boolean
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void
}

const WarpDialogContext =
  React.createContext<WarpDialogContextType | null>(null)

/** Returns the Warp Dialog context for compound components. */
function useWarpDialog() {
  const ctx = React.useContext(WarpDialogContext)

  return errors().requiredContext(ctx, 'WarpDialog')
}

/**
 * Provides state and context for a Warp Dialog.
 *
 * @example
 *   ;<WarpDialog />
 */
function WarpDialog({
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  ...props
}: WarpDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const open = openProp ?? internalOpen

  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState =
        typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        setInternalOpen(openState)
      }
    },
    [setOpenProp, open]
  )

  const contextValue = React.useMemo<WarpDialogContextType>(
    () => ({ open, setOpen }),
    [open, setOpen]
  )

  return (
    <WarpDialogContext.Provider value={contextValue}>
      <div className={className} data-slot='warp-dialog' {...props} />
    </WarpDialogContext.Provider>
  )
}

/**
 * Toggles the Warp Dialog when activated.
 *
 * @example
 *   ;<WarpDialogTrigger />
 */
function WarpDialogTrigger({
  asChild = false,
  ...props
}: WarpDialogTriggerProps) {
  const Comp = asChild ? Slot : 'div'

  const { setOpen } = useWarpDialog()

  return (
    <Comp
      onClick={() => setOpen((prev) => !prev)}
      data-slot='dialog-trigger'
      {...props}
    />
  )
}

/** Renders the animated Warp Dialog overlay. */
function WarpDialogOverlay({
  className,
  ...props
}: WarpDialogOverlayProps) {
  return (
    <div
      className={cn(warpDialogOverlayRecipe(), className)}
      {...props}
    >
      {/* The animation helper is kept below the public compound components. */}
      {/* eslint-disable-next-line no-use-before-define */}
      <WarpAnimations />
    </div>
  )
}

/**
 * Renders the animated Warp Dialog content while it is open.
 *
 * @example
 *   ;<WarpDialogContent />
 */
function WarpDialogContent({
  children,
  className,
  ...props
}: WarpDialogContentProps) {
  const { open, setOpen } = useWarpDialog()

  return (
    <AnimatePresence>
      {open && (
        <div className={warpDialogAnimationRootRecipe()}>
          <WarpDialogOverlay />

          <motion.div
            onClick={() => setOpen((prev) => !prev)}
            className={warpDialogContentPositionerRecipe()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: WARP_DIALOG_CONTENT_ANIMATION_DURATION,
              ease: WARP_DIALOG_ANIMATION_EASE
            }}
            {...props}
          >
            <motion.div
              className={cn(warpDialogContentRecipe(), className)}
              onClick={(e) => e.stopPropagation()}
              initial={{
                rotateX: -5,
                scaleX: 0.4,
                scaleY: 2,
                skewY: -1.5,
                y: 100
              }}
              animate={{
                rotateX: 0,
                scaleX: 1,
                scaleY: 1,
                skewY: 0,
                transition: {
                  duration: WARP_DIALOG_CONTENT_ANIMATION_DURATION,
                  ease: WARP_DIALOG_ANIMATION_EASE,
                  y: {
                    bounce: 0.2,
                    type: 'spring',
                    visualDuration: 0.7
                  }
                },
                y: 0
              }}
              exit={{
                rotateX: -5,
                scaleX: 0.4,
                scaleY: 2,
                skewY: -1.5,
                y: 100
              }}
              transition={{
                duration: WARP_DIALOG_CONTENT_ANIMATION_DURATION,
                ease: WARP_DIALOG_ANIMATION_EASE
              }}
              style={{
                originX: 0.5,
                originY: 0,
                transformPerspective: 1000
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function WarpAnimations() {
  return (
    <>
      <motion.div
        className={warpDialogAnimationPrimaryRecipe()}
        initial={{
          backgroundColor: WARP_DIALOG_INITIAL_BACKGROUND_COLOR,
          opacity: 1,
          scale: 0
        }}
        animate={{
          backgroundColor: WARP_DIALOG_ACTIVE_BACKGROUND_COLOR,
          opacity: 0.2,
          scale: 10,
          transition: {
            duration: WARP_DIALOG_ENTER_DURATION,
            opacity: {
              duration: WARP_DIALOG_ENTER_DURATION,
              ease: 'easeInOut'
            }
          }
        }}
        exit={{
          backgroundColor: WARP_DIALOG_INITIAL_BACKGROUND_COLOR,
          opacity: 1,
          scale: 0,
          transition: { duration: WARP_DIALOG_EXIT_DURATION }
        }}
      />
      <motion.div
        className={warpDialogAnimationPrimaryHaloRecipe()}
        initial={{ opacity: 0 }}
        animate={WARP_DIALOG_LOOPING_ANIMATION}
        exit={{
          opacity: 0,
          transition: { duration: WARP_DIALOG_EXIT_DURATION }
        }}
      />
      <motion.div
        className={warpDialogAnimationSecondaryHaloRecipe()}
        initial={{ opacity: 0 }}
        animate={WARP_DIALOG_LOOPING_ANIMATION}
        exit={{
          opacity: 0,
          transition: { duration: WARP_DIALOG_EXIT_DURATION }
        }}
      />
    </>
  )
}

export {
  useWarpDialog,
  WarpDialog,
  WarpDialogContent,
  WarpDialogOverlay,
  WarpDialogTrigger
}

export type {
  WarpDialogContentProps,
  WarpDialogOverlayProps,
  WarpDialogProps,
  WarpDialogTriggerProps
}

'use client'

import { Portal } from '@ark-ui/react/portal'
import type {
  ButtonHTMLAttributes,
  Dispatch,
  HTMLAttributes,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  SetStateAction
} from 'react'
import React, {
  Children,
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { cn } from 'tailwind-variants'

import {
  dialogStackBodyInnerRecipe,
  dialogStackBodyRecipe,
  dialogStackContentInnerRecipe,
  dialogStackContentRecipe,
  dialogStackDescriptionRecipe,
  dialogStackFooterRecipe,
  dialogStackHeaderRecipe,
  dialogStackNavigationButtonRecipe,
  dialogStackOverlayRecipe,
  dialogStackTitleRecipe,
  dialogStackTriggerRecipe,
  dialogStackWrapperRecipe
} from './dialog-stack.core.styles'

/**
 * Props for the Use Controllable State component.
 *
 * @example
 *   type Example = UseControllableStateProps
 */
type UseControllableStateProps<T> = {
  value?: T
  defaultValue: T
  onChange?: (value: T) => void
}

/**
 * Supported dialog stack context values.
 *
 * @example
 *   type Example = DialogStackContextType
 */
type DialogStackContextType = {
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  totalDialogs: number
  setTotalDialogs: Dispatch<SetStateAction<number>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  clickable: boolean
}

/**
 * Props for the Dialog Stack Child component.
 *
 * @example
 *   type Example = DialogStackChildProps
 */
type DialogStackChildProps = {
  index?: number
}

/**
 * Props for the Dialog Stack component.
 *
 * @example
 *   type Example = DialogStackProps
 */
type DialogStackProps = React.ComponentProps<'div'> & {
  open?: boolean
  clickable?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

/**
 * Props for the Dialog Stack Trigger component.
 *
 * @example
 *   type Example = DialogStackTriggerProps
 */
type DialogStackTriggerProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }

/**
 * Props for the Dialog Stack Overlay component.
 *
 * @example
 *   type Example = DialogStackOverlayProps
 */
type DialogStackOverlayProps = React.ComponentProps<'div'> & {
  asChild?: boolean
}

/**
 * Props for the Dialog Stack Body component.
 *
 * @example
 *   type Example = DialogStackBodyProps
 */
type DialogStackBodyProps = React.ComponentProps<'div'> & {
  children:
    | ReactElement<DialogStackChildProps>[]
    | ReactElement<DialogStackChildProps>
}

/**
 * Props for the Dialog Stack Content component.
 *
 * @example
 *   type Example = DialogStackContentProps
 */
type DialogStackContentProps = React.ComponentProps<'div'> & {
  index?: number
  offset?: number
}

/**
 * Props for the Dialog Stack Wrapper component.
 *
 * @example
 *   type Example = DialogStackWrapperProps
 */
type DialogStackWrapperProps = React.ComponentProps<'div'>

/**
 * Props for the Dialog Stack Title component.
 *
 * @example
 *   type Example = DialogStackTitleProps
 */
type DialogStackTitleProps = HTMLAttributes<HTMLHeadingElement>

/**
 * Props for the Dialog Stack Description component.
 *
 * @example
 *   type Example = DialogStackDescriptionProps
 */
type DialogStackDescriptionProps =
  HTMLAttributes<HTMLParagraphElement>

/**
 * Props for the Dialog Stack Header component.
 *
 * @example
 *   type Example = DialogStackHeaderProps
 */
type DialogStackHeaderProps = React.ComponentProps<'div'>

/**
 * Props for the Dialog Stack Footer component.
 *
 * @example
 *   type Example = DialogStackFooterProps
 */
type DialogStackFooterProps = React.ComponentProps<'div'>

/**
 * Props for the Dialog Stack Next component.
 *
 * @example
 *   type Example = DialogStackNextProps
 */
type DialogStackNextProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }

/**
 * Props for the Dialog Stack Previous component.
 *
 * @example
 *   type Example = DialogStackPreviousProps
 */
type DialogStackPreviousProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
  }

const useControllableState = <T,>({
  value,
  defaultValue,
  onChange
}: UseControllableStateProps<T>) => {
  const [uncontrolledValue, setUncontrolledValue] =
    useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : uncontrolledValue

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (nextValue) => {
      const next =
        typeof nextValue === 'function'
          ? (nextValue as (previousValue: T) => T)(currentValue)
          : nextValue

      if (Object.is(currentValue, next)) {
        return
      }

      if (!isControlled) {
        setUncontrolledValue(next)
      }

      onChange?.(next)
    },
    [currentValue, isControlled, onChange]
  )

  return [currentValue, setValue] as const
}

const DialogStackContext = createContext<DialogStackContextType>({
  activeIndex: 0,
  clickable: false,
  isOpen: false,
  setActiveIndex: () => null,
  setIsOpen: () => null,
  setTotalDialogs: () => null,
  totalDialogs: 0
})

const useDialogStack = () => {
  const context = useContext(DialogStackContext)

  if (!context) {
    throw new Error(
      'useDialogStack must be used within a DialogStack'
    )
  }

  return context
}

/**
 * Renders the Dialog Stack component.
 *
 * @example
 *   ;<DialogStack />
 */
function DialogStack({
  children,
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  clickable = false,
  ...props
}: DialogStackProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpen, setIsOpen] = useControllableState({
    defaultValue: defaultOpen,
    onChange: onOpenChange,
    value: open
  })

  useEffect(() => {
    if (!isOpen) {
      // oxlint-disable-next-line react/set-state-in-effect
      setActiveIndex(0)
    }
  }, [isOpen])

  return (
    <DialogStackContext.Provider
      value={{
        activeIndex,
        clickable,
        isOpen,
        setActiveIndex,
        setIsOpen,
        setTotalDialogs: () => null,
        totalDialogs: 0
      }}
    >
      <div data-slot='dialog-stack' className={className} {...props}>
        {children}
      </div>
    </DialogStackContext.Provider>
  )
}

/**
 * Renders the Dialog Stack Trigger component.
 *
 * @example
 *   ;<DialogStackTrigger />
 */
function DialogStackTrigger({
  children,
  className,
  onClick,
  asChild,
  ...props
}: DialogStackTriggerProps) {
  const { setIsOpen } = useDialogStack()

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsOpen(true)
    onClick?.(e)
  }

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>
      className?: string
    }>
    return cloneElement(child, {
      className: cn(className, child.props.className),
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handleClick(e)
        child.props.onClick?.(e)
      },
      ...props
    })
  }

  return (
    <button
      type='button'
      data-slot='dialog-stack-trigger'
      className={cn(dialogStackTriggerRecipe(), className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Renders the Dialog Stack Wrapper component.
 *
 * @example
 *   ;<DialogStackWrapper />
 */
function DialogStackWrapper({
  className,
  ...props
}: DialogStackWrapperProps) {
  return (
    <div
      data-slot='dialog-stack-wrapper'
      className={cn(dialogStackWrapperRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Dialog Stack Overlay component.
 *
 * @example
 *   ;<DialogStackOverlay />
 */
function DialogStackOverlay({
  className,
  children,
  onKeyDown,
  asChild,
  ...props
}: DialogStackOverlayProps) {
  const { setIsOpen, isOpen } = useDialogStack()

  const handleClick = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(false)
    }

    onKeyDown?.(event)
  }

  if (!isOpen) {
    return null
  }

  if (asChild) {
    return children
  }

  return (
    <div
      data-slot='dialog-stack-overlay'
      className={cn(dialogStackOverlayRecipe(), className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      role='button'
      tabIndex={0}
      {...props}
    />
  )
}

/**
 * Renders the Dialog Stack Body component.
 *
 * @example
 *   ;<DialogStackBody />
 */
function DialogStackBody({
  children,
  className,
  ...props
}: DialogStackBodyProps) {
  const context = useDialogStack()
  const { activeIndex, isOpen, setActiveIndex } = context
  const childrenCount = Children.count(children)
  const previousChildrenCount = useRef(childrenCount)
  const [totalDialogs, setTotalDialogs] = useState(childrenCount)

  useEffect(() => {
    setTotalDialogs(childrenCount)

    if (childrenCount > previousChildrenCount.current) {
      setActiveIndex(childrenCount - 1)
    } else if (activeIndex >= childrenCount) {
      setActiveIndex(Math.max(0, childrenCount - 1))
    }

    previousChildrenCount.current = childrenCount
  }, [activeIndex, childrenCount, setActiveIndex])

  if (!isOpen) {
    return null
  }

  return (
    <DialogStackContext.Provider
      value={{
        ...context,
        setTotalDialogs,
        totalDialogs
      }}
    >
      <Portal>
        <div
          className={cn(dialogStackBodyRecipe(), className)}
          data-slot='dialog-stack-body'
          {...props}
        >
          <div className={dialogStackBodyInnerRecipe()}>
            {Children.map(children, (child, index) => {
              const childElement = child as ReactElement<{
                index: number
                onClick: MouseEventHandler<HTMLButtonElement>
                className?: string
              }>

              return cloneElement(childElement, {
                ...childElement.props,
                index
              })
            })}
          </div>
        </div>
      </Portal>
    </DialogStackContext.Provider>
  )
}

/**
 * Renders the Dialog Stack Content component.
 *
 * @example
 *   ;<DialogStackContent />
 */
function DialogStackContent({
  children,
  className,
  index = 0,
  onKeyDown,
  offset = 10,
  ...props
}: DialogStackContentProps) {
  const { isOpen, clickable, activeIndex, setActiveIndex } =
    useDialogStack()

  if (!isOpen) {
    return null
  }

  const isClickable = clickable && activeIndex > index

  const handleClick = () => {
    if (isClickable) {
      setActiveIndex(index ?? 0)
    }
  }

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (isClickable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      setActiveIndex(index ?? 0)
    }

    onKeyDown?.(event)
  }

  const distanceFromActive = index - activeIndex
  const translateY =
    distanceFromActive < 0
      ? `-${Math.abs(distanceFromActive) * offset}px`
      : `${Math.abs(distanceFromActive) * offset}px`

  return (
    <div
      data-slot='dialog-stack-content'
      className={cn(dialogStackContentRecipe(), className)}
      aria-disabled={!isClickable}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      role='button'
      style={{
        cursor: isClickable ? 'pointer' : 'default',
        opacity: distanceFromActive > 0 ? 0 : 1,
        position: distanceFromActive ? 'absolute' : 'relative',
        top: 0,
        transform: `translateY(${translateY})`,
        width: `calc(100% - ${Math.abs(distanceFromActive) * 10}px)`,
        zIndex: 50 - Math.abs(activeIndex - (index ?? 0))
      }}
      tabIndex={isClickable ? 0 : -1}
      {...props}
    >
      <div
        className={dialogStackContentInnerRecipe({
          active: activeIndex === index
        })}
      >
        {children}
      </div>
    </div>
  )
}

/**
 * Renders the Dialog Stack Title component.
 *
 * @example
 *   ;<DialogStackTitle />
 */
function DialogStackTitle({
  children,
  className,
  ...props
}: DialogStackTitleProps) {
  return (
    <h2
      data-slot='dialog-stack-title'
      className={cn(dialogStackTitleRecipe(), className)}
      {...props}
    >
      {children}
    </h2>
  )
}

/**
 * Renders the Dialog Stack Description component.
 *
 * @example
 *   ;<DialogStackDescription />
 */
function DialogStackDescription({
  children,
  className,
  ...props
}: DialogStackDescriptionProps) {
  return (
    <p
      data-slot='dialog-stack-description'
      className={cn(dialogStackDescriptionRecipe(), className)}
      {...props}
    >
      {children}
    </p>
  )
}

/**
 * Renders the Dialog Stack Header component.
 *
 * @example
 *   ;<DialogStackHeader />
 */
function DialogStackHeader({
  className,
  ...props
}: DialogStackHeaderProps) {
  return (
    <div
      data-slot='dialog-stack-header'
      className={cn(dialogStackHeaderRecipe(), className)}
      {...props}
    />
  )
}

/**
 * Renders the Dialog Stack Footer component.
 *
 * @example
 *   ;<DialogStackFooter />
 */
function DialogStackFooter({
  children,
  className,
  ...props
}: DialogStackFooterProps) {
  return (
    <div
      data-slot='dialog-stack-footer'
      className={cn(dialogStackFooterRecipe(), className)}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Renders the Dialog Stack Next component.
 *
 * @example
 *   ;<DialogStackNext />
 */
function DialogStackNext({
  children,
  className,
  asChild,
  ...props
}: DialogStackNextProps) {
  const { activeIndex, totalDialogs, setActiveIndex } =
    useDialogStack()

  const handleNext = () => {
    if (activeIndex < totalDialogs - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>
      className?: string
    }>

    return cloneElement(child, {
      className: cn(className, child.props.className),
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handleNext()
        child.props.onClick?.(e)
      },
      ...props
    })
  }

  return (
    <button
      className={cn(dialogStackNavigationButtonRecipe(), className)}
      disabled={activeIndex >= totalDialogs - 1}
      onClick={handleNext}
      type='button'
      data-slot='dialog-stack-next'
      {...props}
    >
      {children || 'Next'}
    </button>
  )
}

/**
 * Renders the Dialog Stack Previous component.
 *
 * @example
 *   ;<DialogStackPrevious />
 */
function DialogStackPrevious({
  children,
  className,
  asChild,
  ...props
}: DialogStackPreviousProps) {
  const { activeIndex, setActiveIndex } = useDialogStack()

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

  if (asChild && children) {
    const child = children as ReactElement<{
      onClick: MouseEventHandler<HTMLButtonElement>
      className?: string
    }>

    return cloneElement(child, {
      className: cn(className, child.props.className),
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        handlePrevious()
        child.props.onClick?.(e)
      },
      ...props
    })
  }

  return (
    <button
      className={cn(dialogStackNavigationButtonRecipe(), className)}
      disabled={activeIndex <= 0}
      onClick={handlePrevious}
      data-slot='dialog-stack-previous'
      type='button'
      {...props}
    >
      {children || 'Previous'}
    </button>
  )
}

export {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackContext,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
  DialogStackWrapper,
  useDialogStack
}

export type {
  DialogStackBodyProps,
  DialogStackChildProps,
  DialogStackContentProps,
  DialogStackContextType,
  DialogStackDescriptionProps,
  DialogStackFooterProps,
  DialogStackHeaderProps,
  DialogStackNextProps,
  DialogStackOverlayProps,
  DialogStackPreviousProps,
  DialogStackProps,
  DialogStackTitleProps,
  DialogStackTriggerProps
}

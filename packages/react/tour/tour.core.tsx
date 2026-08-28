'use client'

import { ark } from '@ark-ui/react/factory'
import { Portal } from '@ark-ui/react/portal'
import type {
  TourStepDetails,
  UseTourReturn
} from '@ark-ui/react/tour'
import { Tour as ArkTour, useTour } from '@ark-ui/react/tour'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import type { DialogOverlay } from '../dialog'
import {
  DialogBody,
  DialogFooter,
  DialogHeader,
  dialogOverlayRecipe
} from '../dialog'
import { DEFAULT_TOUR_STEPS } from './tour.core.constants'
import {
  tourActionsRecipe,
  tourCloseButtonBaseRecipe,
  tourCloseButtonLabelRecipe,
  tourCloseButtonRecipe,
  tourContentRecipe,
  tourDescriptionRecipe,
  tourOverlayRecipe,
  tourPositionerRecipe,
  tourProgressTextRecipe,
  tourSpotlightRecipe,
  tourTitleRecipe
} from './tour.core.styles'

/**
 * Supported tour step values.
 *
 * @example
 *   type Example = TourStepType
 */
type TourStepType = TourStepDetails

/**
 * Props for the Tour Provider component.
 *
 * @example
 *   type Example = TourProviderProps
 */
type TourProviderProps = {
  /** The function to start the tour */
  handleStart: VoidFunction
  /** The tour instance */
  tour: UseTourReturn
}

/**
 * Props for the Tour component.
 *
 * @example
 *   type Example = TourProps
 */
type TourProps = Omit<
  React.ComponentProps<typeof ArkTour.Root>,
  'tour'
> & {
  /**
   * Enable arrow key navigation between steps
   *
   * @default false
   */
  keyboardNavigation?: boolean
  /** Called when the tour status changes */
  onStatusChange?: (details: { status: string }) => void
  /** Called when the current step changes */
  onStepChange?: (details: { stepId: string | null }) => void
  /**
   * The steps to display in the tour
   *
   * @default [ ]
   */
  steps: TourStepDetails[]
}

/**
 * Props for the Tour Trigger component.
 *
 * @example
 *   type Example = TourTriggerProps
 */
type TourTriggerProps = React.ComponentProps<typeof ark.button>

/**
 * Props for the Tour Content component.
 *
 * @example
 *   type Example = TourContentProps
 */
type TourContentProps = React.ComponentProps<
  typeof ArkTour.Content
> & {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean
}

/**
 * Props for the Tour Action Trigger component.
 *
 * @example
 *   type Example = TourActionTriggerProps
 */
type TourActionTriggerProps = React.ComponentProps<
  typeof ArkTour.ActionTrigger
>

/**
 * Props for the Tour Overlay component.
 *
 * @example
 *   type Example = TourOverlayProps
 */
type TourOverlayProps = React.ComponentProps<typeof DialogOverlay>

/**
 * Props for the Tour Positioner component.
 *
 * @example
 *   type Example = TourPositionerProps
 */
type TourPositionerProps = React.ComponentProps<
  typeof ArkTour.Positioner
>

/**
 * Props for the Tour Close component.
 *
 * @example
 *   type Example = TourCloseProps
 */
type TourCloseProps = React.ComponentProps<
  typeof ArkTour.CloseTrigger
>

/**
 * Props for the Tour Spotlight component.
 *
 * @example
 *   type Example = TourSpotlightProps
 */
type TourSpotlightProps = React.ComponentProps<
  typeof ArkTour.Spotlight
>

/**
 * Props for the Tour Body component.
 *
 * @example
 *   type Example = TourBodyProps
 */
type TourBodyProps = React.ComponentProps<typeof DialogBody>

/**
 * Props for the Tour Header component.
 *
 * @example
 *   type Example = TourHeaderProps
 */
type TourHeaderProps = React.ComponentProps<typeof DialogHeader>

/**
 * Props for the Tour Title component.
 *
 * @example
 *   type Example = TourTitleProps
 */
type TourTitleProps = React.ComponentProps<typeof ArkTour.Title>

/**
 * Props for the Tour Description component.
 *
 * @example
 *   type Example = TourDescriptionProps
 */
type TourDescriptionProps = React.ComponentProps<
  typeof ArkTour.Description
>

/**
 * Props for the Tour Progress Text component.
 *
 * @example
 *   type Example = TourProgressTextProps
 */
type TourProgressTextProps = React.ComponentProps<
  typeof ArkTour.ProgressText
>

/**
 * Props for the Tour Footer component.
 *
 * @example
 *   type Example = TourFooterProps
 */
type TourFooterProps = React.ComponentProps<typeof DialogFooter>

/**
 * Props for the Tour Actions component.
 *
 * @example
 *   type Example = TourActionsProps
 */
type TourActionsProps = React.ComponentProps<typeof DialogFooter>

/**
 * Props for the Tour Previous Step component.
 *
 * @example
 *   type Example = TourPreviousStepProps
 */
type TourPreviousStepProps = Omit<
  React.ComponentProps<typeof TourActionTrigger>,
  'action'
>

/**
 * Props for the Tour Next Step component.
 *
 * @example
 *   type Example = TourNextStepProps
 */
type TourNextStepProps = Omit<
  React.ComponentProps<typeof TourActionTrigger>,
  'action'
>

const TourProvider = React.createContext<TourProviderProps>(
  {} as TourProviderProps
)

/**
 * Returns the shared Tour context.
 *
 * @example
 *   const tour = useTourContext()
 */
function useTourContext() {
  const context = React.use(TourProvider)

  if (!context) {
    throw new Error('useTour must be used within a TourProvider')
  }

  return context
}

/**
 * Renders the Tour component.
 *
 * @example
 *   ;<Tour />
 */
function Tour({
  steps = DEFAULT_TOUR_STEPS,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: TourProps) {
  const [isStarted, setIsStarted] = React.useState(false)
  const tour = useTour({ steps })

  React.useEffect(() => {
    document.body.classList.toggle('relative', isStarted)

    return () => {
      document.body.classList.remove('relative')
    }
  }, [isStarted])

  const handleStart = React.useCallback(() => {
    setIsStarted(true)
    tour.start()
  }, [tour])

  return (
    <TourProvider.Provider value={{ handleStart, tour }}>
      <ArkTour.Root
        data-slot='tour'
        lazyMount={lazyMount}
        tour={tour}
        unmountOnExit={unmountOnExit}
        {...props}
      />
    </TourProvider.Provider>
  )
}

/**
 * Renders the Tour Trigger component.
 *
 * @example
 *   ;<TourTrigger />
 */
function TourTrigger({ onClick, ...props }: TourTriggerProps) {
  const { handleStart } = useTourContext()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    handleStart()
  }
  return (
    <ark.button
      data-slot='tour-trigger'
      type='button'
      {...props}
      onClick={handleClick}
    />
  )
}

/**
 * Renders the Tour Action Trigger component.
 *
 * @example
 *   ;<TourActionTrigger />
 */
function TourActionTrigger({ ...props }: TourActionTriggerProps) {
  return (
    <ArkTour.ActionTrigger
      data-slot='tour-action-trigger'
      {...props}
    />
  )
}

/**
 * Renders the Tour Overlay component.
 *
 * @example
 *   ;<TourOverlay />
 */
function TourOverlay({ className, ...props }: TourOverlayProps) {
  return (
    <ArkTour.Backdrop
      className={cn(
        dialogOverlayRecipe(),
        tourOverlayRecipe(),
        className
      )}
      data-slot='tour-overlay'
      {...props}
    />
  )
}

/**
 * Renders the Tour Positioner component.
 *
 * @example
 *   ;<TourPositioner />
 */
function TourPositioner({ ...props }: TourPositionerProps) {
  return (
    <ArkTour.Positioner
      className={tourPositionerRecipe()}
      data-slot='tour-positioner'
      {...props}
    />
  )
}

/**
 * Renders the Tour Close component.
 *
 * @example
 *   ;<TourClose />
 */
function TourClose({ ...props }: TourCloseProps) {
  return (
    <ArkTour.CloseTrigger data-slot='tour-close-trigger' {...props} />
  )
}

/**
 * Renders the Tour Spotlight component.
 *
 * @example
 *   ;<TourSpotlight />
 */
function TourSpotlight({ ...props }: TourSpotlightProps) {
  return (
    <ArkTour.Spotlight
      className={tourSpotlightRecipe()}
      data-slot='tour-spotlight'
      {...props}
    />
  )
}

/**
 * Renders the Tour Content component.
 *
 * @example
 *   ;<TourContent />
 */
function TourContent({
  showCloseButton = true,
  className,
  children,
  ...props
}: TourContentProps) {
  return (
    <Portal>
      <TourOverlay />
      <TourPositioner>
        <ArkTour.Content
          className={cn(tourContentRecipe(), className)}
          data-slot='tour-content'
          {...props}
        >
          {children}
          {!!showCloseButton && (
            <TourClose asChild className={tourCloseButtonRecipe()}>
              <Button
                className={tourCloseButtonBaseRecipe()}
                size='icon-md'
                variant='ghost'
              >
                <X />
                <span className={tourCloseButtonLabelRecipe()}>
                  Close
                </span>
              </Button>
            </TourClose>
          )}
        </ArkTour.Content>
      </TourPositioner>
      <TourSpotlight />
    </Portal>
  )
}

/**
 * Renders the Tour Body component.
 *
 * @example
 *   ;<TourBody />
 */
function TourBody({ ...props }: TourBodyProps) {
  return <DialogBody data-slot='tour-body' {...props} />
}

/**
 * Renders the Tour Header component.
 *
 * @example
 *   ;<TourHeader />
 */
function TourHeader({ ...props }: TourHeaderProps) {
  return <DialogHeader data-slot='tour-header' {...props} />
}

/**
 * Renders the Tour Title component.
 *
 * @example
 *   ;<TourTitle />
 */
function TourTitle({ className, ...props }: TourTitleProps) {
  const { tour } = useTourContext()
  return (
    <ArkTour.Title
      className={cn(tourTitleRecipe(), className)}
      data-slot='tour-title'
      {...props}
    >
      {tour.step?.title}
    </ArkTour.Title>
  )
}

/**
 * Renders the Tour Description component.
 *
 * @example
 *   ;<TourDescription />
 */
function TourDescription({
  className,
  ...props
}: TourDescriptionProps) {
  const { tour } = useTourContext()
  return (
    <ArkTour.Description
      className={cn(tourDescriptionRecipe(), className)}
      data-slot='tour-description'
      {...props}
    >
      {tour.step?.description}
    </ArkTour.Description>
  )
}

/**
 * Renders the Tour Progress Text component.
 *
 * @example
 *   ;<TourProgressText />
 */
function TourProgressText({
  className,
  ...props
}: TourProgressTextProps) {
  const { tour } = useTourContext()
  return (
    <ArkTour.ProgressText
      className={cn(tourProgressTextRecipe(), className)}
      data-slot='tour-progress-text'
      {...props}
    >
      {tour.getProgressText()}
    </ArkTour.ProgressText>
  )
}

/**
 * Renders the Tour Footer component.
 *
 * @example
 *   ;<TourFooter />
 */
function TourFooter({ children, ...props }: TourFooterProps) {
  return (
    <ArkTour.Control {...props} asChild>
      <DialogFooter data-slot='tour-control'>{children}</DialogFooter>
    </ArkTour.Control>
  )
}

/**
 * Renders the Tour Actions component.
 *
 * @example
 *   ;<TourActions />
 */
function TourActions({ className, ...props }: TourActionsProps) {
  const { tour } = useTourContext()
  const actions = tour.step?.actions ?? []

  if (actions.length === 0) {
    return null
  }

  return (
    <ArkTour.Control {...props} asChild>
      <DialogFooter
        className={cn(tourActionsRecipe(), className)}
        data-slot='tour-actions'
      >
        {actions.map((action) => {
          const shouldHandleDismissOrPrev =
            action.action === 'dismiss' || action.action === 'prev'

          return (
            <TourActionTrigger
              action={action}
              asChild
              key={action.label}
            >
              <Button
                size='sm'
                variant={
                  shouldHandleDismissOrPrev ? 'outline' : 'default'
                }
              >
                {action.action === 'prev' && <ChevronLeft />}
                {action.label}
                {action.action === 'next' && <ChevronRight />}
              </Button>
            </TourActionTrigger>
          )
        })}
      </DialogFooter>
    </ArkTour.Control>
  )
}

/**
 * Renders the Tour Previous Step component.
 *
 * @example
 *   ;<TourPreviousStep />
 */
function TourPreviousStep({ ...props }: TourPreviousStepProps) {
  const { tour } = useTourContext()

  const prevAction = React.useMemo(
    () =>
      tour.step?.actions?.find((action) => action.action === 'prev'),
    [tour]
  )

  if (!prevAction) {
    return null
  }

  return (
    <TourActionTrigger
      data-slot='tour-previous-step'
      {...props}
      action={prevAction}
      asChild
    >
      <Button size='sm' variant='outline'>
        <ChevronLeft />
        {prevAction.label}
      </Button>
    </TourActionTrigger>
  )
}

/**
 * Renders the Tour Next Step component.
 *
 * @example
 *   ;<TourNextStep />
 */
function TourNextStep({ ...props }: TourNextStepProps) {
  const { tour } = useTourContext()

  const action = React.useMemo(
    () =>
      tour.step?.actions?.find(
        (a) => a.action === 'next' || a.action === 'dismiss'
      ),
    [tour]
  )

  const actionType = React.useMemo(() => action?.action, [action])

  if (!action) {
    return null
  }

  return (
    <TourActionTrigger
      data-slot='tour-next-step'
      {...props}
      action={action}
      asChild
    >
      <Button size='sm'>
        {action.label}
        {actionType === 'next' && <ChevronRight />}
      </Button>
    </TourActionTrigger>
  )
}

export {
  Tour,
  TourActions,
  TourActionTrigger,
  TourBody,
  TourClose,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourOverlay,
  TourPositioner,
  TourPreviousStep,
  TourProgressText,
  TourSpotlight,
  TourTitle,
  TourTrigger,
  useTourContext,
  /**
   * Supported tour step values.
   *
   * @example
   *   type Example = TourStepType
   */
  type TourStepType
}

export type {
  TourActionsProps,
  TourActionTriggerProps,
  TourBodyProps,
  TourCloseProps,
  TourContentProps,
  TourDescriptionProps,
  TourFooterProps,
  TourHeaderProps,
  TourNextStepProps,
  TourOverlayProps,
  TourPositionerProps,
  TourPreviousStepProps,
  TourProgressTextProps,
  TourProps,
  TourProviderProps,
  TourSpotlightProps,
  TourTitleProps,
  TourTriggerProps
}

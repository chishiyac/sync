'use client'

import {
  Carousel as ArkCarousel,
  useCarouselContext
} from '@ark-ui/react/carousel'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import {
  carouselContentRecipe,
  carouselControlRecipe,
  carouselIndicatorGroupRecipe,
  carouselItemRecipe,
  carouselNextRecipe,
  carouselPreviousRecipe,
  carouselRootRecipe
} from './carousel.core.styles'

/**
 * Props for the Carousel component.
 *
 * @example
 *   type Example = CarouselProps
 */
type CarouselProps = React.ComponentProps<typeof ArkCarousel.Root>

/**
 * Props for the Carousel Control component.
 *
 * @example
 *   type Example = CarouselControlProps
 */
type CarouselControlProps = React.ComponentProps<
  typeof ArkCarousel.Control
>

/**
 * Props for the Carousel Previous component.
 *
 * @example
 *   type Example = CarouselPreviousProps
 */
type CarouselPreviousProps = React.ComponentProps<
  typeof ArkCarousel.PrevTrigger
>

/**
 * Props for the Carousel Next component.
 *
 * @example
 *   type Example = CarouselNextProps
 */
type CarouselNextProps = React.ComponentProps<
  typeof ArkCarousel.NextTrigger
>

/**
 * Props for the Carousel Indicator Group component.
 *
 * @example
 *   type Example = CarouselIndicatorGroupProps
 */
type CarouselIndicatorGroupProps = React.ComponentProps<
  typeof ArkCarousel.IndicatorGroup
>
/**
 * Props for the Carousel Indicator component.
 *
 * @example
 *   type Example = CarouselIndicatorProps
 */
type CarouselIndicatorProps = React.ComponentProps<
  typeof ArkCarousel.Indicator
>

/**
 * Props for the Carousel Content component.
 *
 * @example
 *   type Example = CarouselContentProps
 */
type CarouselContentProps = React.ComponentProps<
  typeof ArkCarousel.ItemGroup
>

/**
 * Props for the Carousel Item component.
 *
 * @example
 *   type Example = CarouselItemProps
 */
type CarouselItemProps = React.ComponentProps<typeof ArkCarousel.Item>

const useCarousel = useCarouselContext

/**
 * Renders the Carousel component.
 *
 * @example
 *   ;<Carousel />
 */
function Carousel({
  spacing = '16px',
  className,
  ...props
}: CarouselProps) {
  return (
    <ArkCarousel.Root
      className={cn(carouselRootRecipe(), className)}
      data-slot='carousel'
      spacing={spacing}
      {...props}
    />
  )
}

/**
 * Renders the Carousel Control component.
 *
 * @example
 *   ;<CarouselControl />
 */
function CarouselControl({
  className,
  ...props
}: CarouselControlProps) {
  return (
    <ArkCarousel.Control
      className={cn(carouselControlRecipe(), className)}
      data-slot='carousel-control'
      {...props}
    />
  )
}

/**
 * Renders the Carousel Previous component.
 *
 * @example
 *   ;<CarouselPrevious />
 */
function CarouselPrevious({
  className,
  ...props
}: CarouselPreviousProps) {
  return (
    <ArkCarousel.PrevTrigger
      className={cn(carouselPreviousRecipe(), className)}
      data-slot='carousel-previous'
      {...props}
      asChild
    >
      <Button
        aria-label='Previous'
        clickEffect={false}
        pill
        size='icon-md'
        variant='outline'
      >
        <ChevronLeftIcon aria-hidden />
      </Button>
    </ArkCarousel.PrevTrigger>
  )
}

/**
 * Renders the Carousel Next component.
 *
 * @example
 *   ;<CarouselNext />
 */
function CarouselNext({ className, ...props }: CarouselNextProps) {
  return (
    <ArkCarousel.NextTrigger
      className={cn(carouselNextRecipe(), className)}
      asChild
      data-slot='carousel-next'
      {...props}
    >
      <Button
        aria-label='Next'
        clickEffect={false}
        pill
        size='icon-md'
        variant='outline'
      >
        <ChevronRightIcon aria-hidden />
      </Button>
    </ArkCarousel.NextTrigger>
  )
}

/**
 * Renders the Carousel Indicator Group component.
 *
 * @example
 *   ;<CarouselIndicatorGroup />
 */
function CarouselIndicatorGroup({
  className,
  ...props
}: CarouselIndicatorGroupProps) {
  return (
    <ArkCarousel.IndicatorGroup
      className={cn(carouselIndicatorGroupRecipe(), className)}
      data-slot='carousel-indicator-group'
      {...props}
    />
  )
}

/**
 * Renders the Carousel Indicator component.
 *
 * @example
 *   ;<CarouselIndicator />
 */
function CarouselIndicator({
  className,
  ...props
}: CarouselIndicatorProps) {
  return (
    <ArkCarousel.Indicator
      className={cn(carouselIndicatorGroupRecipe(), className)}
      data-slot='carousel-indicator'
      {...props}
    />
  )
}

/**
 * Renders the Carousel Content component.
 *
 * @example
 *   ;<CarouselContent />
 */
function CarouselContent({
  className,
  ...props
}: CarouselContentProps) {
  return (
    <ArkCarousel.ItemGroup
      className={cn(carouselContentRecipe(), className)}
      data-slot='carousel-group'
      {...props}
    />
  )
}

/**
 * Renders the Carousel Item component.
 *
 * @example
 *   ;<CarouselItem />
 */
function CarouselItem({ className, ...props }: CarouselItemProps) {
  return (
    <ArkCarousel.Item
      className={cn(carouselItemRecipe(), className)}
      data-slot='carousel-item'
      {...props}
    />
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel
}

export type {
  CarouselContentProps,
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemProps,
  CarouselNextProps,
  CarouselPreviousProps,
  CarouselProps
}

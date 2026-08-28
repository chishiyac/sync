'use client'

import {
  Accordion as ArkAccordion,
  useAccordionContext
} from '@ark-ui/react/accordion'
import { ChevronDownIcon } from 'lucide-react'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  accordionContentRecipe,
  accordionItemRecipe,
  accordionTriggerChevronRecipe,
  accordionTriggerRecipe,
  accordionWrapperRecipe
} from './accordion.core.styles'

/**
 * Props for the Accordion component.
 *
 * @example
 *   type Example = AccordionProps
 */
type AccordionProps = React.ComponentProps<typeof ArkAccordion.Root>

/**
 * Props for the Accordion Item component.
 *
 * @example
 *   type Example = AccordionItemProps
 */
type AccordionItemProps = React.ComponentProps<
  typeof ArkAccordion.Item
>

/**
 * Props for the Accordion Trigger component.
 *
 * @example
 *   type Example = AccordionTriggerProps
 */
type AccordionTriggerProps = React.ComponentProps<
  typeof ArkAccordion.ItemTrigger
>

/**
 * Props for the Accordion Content component.
 *
 * @example
 *   type Example = AccordionContentProps
 */
type AccordionContentProps = React.ComponentProps<
  typeof ArkAccordion.ItemContent
>

const useAccordion = useAccordionContext

/**
 * Renders the Accordion component.
 *
 * @example
 *   ;<Accordion />
 */
function Accordion({
  collapsible = true,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: AccordionProps) {
  return (
    <ArkAccordion.Root
      collapsible={collapsible}
      data-slot='accordion'
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

/**
 * Renders the Accordion Item component.
 *
 * @example
 *   ;<AccordionItem />
 */
function AccordionItem({ className, ...props }: AccordionItemProps) {
  return (
    <ArkAccordion.Item
      className={cn(accordionItemRecipe(), className)}
      data-slot='accordion-item'
      {...props}
    />
  )
}

/**
 * Renders the Accordion Trigger component.
 *
 * @example
 *   ;<AccordionTrigger />
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionTriggerProps) {
  return (
    <ArkAccordion.ItemTrigger
      className={cn(accordionTriggerRecipe(), className)}
      data-slot='accordion-trigger'
      {...props}
    >
      {children}

      <ArkAccordion.ItemIndicator data-slot='accordion-indicator'>
        <ChevronDownIcon
          className={accordionTriggerChevronRecipe()}
        />
      </ArkAccordion.ItemIndicator>
    </ArkAccordion.ItemTrigger>
  )
}

/**
 * Renders the Accordion Content component.
 *
 * @example
 *   ;<AccordionContent />
 */
function AccordionContent({
  className,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <ArkAccordion.ItemContent
      className={cn(accordionContentRecipe(), className)}
      data-slot='accordion-content'
      {...props}
    >
      <div className={accordionWrapperRecipe()}>{children}</div>
    </ArkAccordion.ItemContent>
  )
}

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  useAccordion
}

export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps
}

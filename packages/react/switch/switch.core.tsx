'use client'

import {
  Switch as ArkSwitch,
  useSwitchContext
} from '@ark-ui/react/switch'
import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  switchControlRecipe,
  switchRootRecipe,
  switchThumbRecipe
} from './switch.core.styles'

/**
 * Props for the Switch component.
 *
 * @example
 *   type Example = SwitchProps
 */
type SwitchProps = React.ComponentProps<typeof ArkSwitch.Root>

const useSwitch = useSwitchContext

/**
 * Renders the Switch component.
 *
 * @example
 *   ;<Switch />
 */
function Switch({ className, tabIndex, ...props }: SwitchProps) {
  return (
    <ArkSwitch.Root
      className={cn(switchRootRecipe(), className)}
      data-slot='switch'
      {...props}
    >
      <ArkSwitch.Control
        className={switchControlRecipe()}
        data-slot='switch-control'
      >
        <ArkSwitch.Thumb
          className={switchThumbRecipe()}
          data-slot='switch-thumb'
        />
      </ArkSwitch.Control>

      <ArkSwitch.HiddenInput tabIndex={tabIndex} />
    </ArkSwitch.Root>
  )
}

export { Switch, useSwitch }

export type { SwitchProps }

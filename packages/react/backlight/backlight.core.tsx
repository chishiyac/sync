'use client'

import { useId } from 'react'

/**
 * Props for the Backlight component.
 *
 * @example
 *   type Example = BacklightProps
 */
type BacklightProps = React.ComponentProps<'div'> & {
  /**
   * Controls the Gaussian blur intensity used by the backlight
   * effect.
   *
   * @default 20
   */
  blur?: number
}

/**
 * Renders the Backlight component.
 *
 * @example
 *   ;<Backlight />
 */
function Backlight({
  blur = 20,
  children,
  ...props
}: BacklightProps) {
  const id = useId()

  return (
    <div {...props}>
      <svg aria-hidden='true' height='0' width='0'>
        <title>Blacklight</title>
        <filter height='200%' id={id} width='200%' x='-50%' y='-50%'>
          <feGaussianBlur
            in='SourceGraphic'
            result='blurred'
            stdDeviation={blur}
          />
          <feColorMatrix in='blurred' type='saturate' values='4' />
          <feComposite in='SourceGraphic' operator='over' />
        </filter>
      </svg>
      <div style={{ filter: `url(#${id})` }}>{children}</div>
    </div>
  )
}

export { Backlight }

export type { BacklightProps }

'use client'

import type React from 'react'
import { cn } from 'tailwind-variants'

import {
  CONTRAST_MIN_LARGE,
  CONTRAST_MIN_SMALL,
  CONTRAST_MULTIPLIER_LARGE,
  CONTRAST_MULTIPLIER_SMALL,
  DOT_SIZE_MIN_LARGE,
  DOT_SIZE_MIN_SMALL,
  DOT_SIZE_MULTIPLIER_LARGE,
  DOT_SIZE_MULTIPLIER_SMALL,
  SHADOW_MIN_LARGE,
  SHADOW_MIN_SMALL,
  SHADOW_MULTIPLIER_LARGE,
  SHADOW_MULTIPLIER_SMALL,
  SIZE_THRESHOLD_SMALL
} from './orb.core.constants'
import { orbRootRecipe } from './orb.core.styles'
import { getFinalContrast, getMaskRadius } from './orb.core.utils'

/**
 * Shared Orb Color Keys type.
 *
 * @example
 *   type Example = OrbColorKeys
 */
type OrbColorKeys = 'b1' | 'c1' | 'c2' | 'c3'

/**
 * Shared Orb Colors type.
 *
 * @example
 *   type Example = OrbColors
 */
type OrbColors = Record<OrbColorKeys, string>

/**
 * Props for the Orb component.
 *
 * @example
 *   type Example = OrbProps
 */
type OrbProps = React.ComponentProps<'div'> & {
  animationDuration?: number
  colors?: OrbColors
  size?: string
}

/**
 * Renders the Orb component.
 *
 * @example
 *   ;<Orb />
 */
function Orb({
  size = '32px',
  className,
  colors,
  animationDuration = 20,
  ...props
}: OrbProps) {
  const defaultColors = {
    bg: 'oklch(49.9% 0.020 296.0)',
    c1: 'oklch(70% 0.180 296.0)',
    c2: 'oklch(75% 0.150 310.0)',
    c3: 'oklch(72% 0.160 280.0)'
  }

  const finalColors = { ...defaultColors, ...colors }

  // oxlint-disable-next-line unicorn/prefer-number-coercion
  const sizeValue = Number.parseInt(size.replace('px', ''), 10)

  const contrastAmount =
    sizeValue < SIZE_THRESHOLD_SMALL
      ? Math.max(
          sizeValue * CONTRAST_MULTIPLIER_SMALL,
          CONTRAST_MIN_SMALL
        )
      : Math.max(
          sizeValue * CONTRAST_MULTIPLIER_LARGE,
          CONTRAST_MIN_LARGE
        )

  const dotSize =
    sizeValue < SIZE_THRESHOLD_SMALL
      ? Math.max(
          sizeValue * DOT_SIZE_MULTIPLIER_SMALL,
          DOT_SIZE_MIN_SMALL
        )
      : Math.max(
          sizeValue * DOT_SIZE_MULTIPLIER_LARGE,
          DOT_SIZE_MIN_LARGE
        )

  const shadowSpread =
    sizeValue < SIZE_THRESHOLD_SMALL
      ? Math.max(
          sizeValue * SHADOW_MULTIPLIER_SMALL,
          SHADOW_MIN_SMALL
        )
      : Math.max(
          sizeValue * SHADOW_MULTIPLIER_LARGE,
          SHADOW_MIN_LARGE
        )

  const maskRadius = getMaskRadius(sizeValue)

  const finalContrast = getFinalContrast(sizeValue, contrastAmount)

  return (
    <div
      className={cn(orbRootRecipe(), className)}
      style={
        {
          '--animation-duration': `${animationDuration}s`,
          '--bg': finalColors.bg,
          '--blur-amount': '0px',
          '--c1': finalColors.c1,
          '--c2': finalColors.c2,
          '--c3': finalColors.c3,
          '--contrast-amount': finalContrast,
          '--dot-size': `${dotSize}px`,
          '--mask-radius': maskRadius,
          '--shadow-spread': `${shadowSpread}px`,
          height: size,
          width: size
        } as React.CSSProperties
      }
      {...props}
    >
      <style>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .siri-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
        }

        .siri-orb::before,
        .siri-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .siri-orb::before {
          background:
            conic-gradient(
              from calc(var(--angle) * 2) at 25% 70%,
              var(--c3),
              transparent 20% 80%,
              var(--c3)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 45% 75%,
              var(--c2),
              transparent 30% 60%,
              var(--c2)
            ),
            conic-gradient(
              from calc(var(--angle) * -3) at 80% 20%,
              var(--c1),
              transparent 40% 60%,
              var(--c1)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 15% 5%,
              var(--c2),
              transparent 10% 90%,
              var(--c2)
            ),
            conic-gradient(
              from calc(var(--angle) * 1) at 20% 80%,
              var(--c1),
              transparent 10% 90%,
              var(--c1)
            ),
            conic-gradient(
              from calc(var(--angle) * -2) at 85% 10%,
              var(--c3),
              transparent 20% 80%,
              var(--c3)
            );
          box-shadow: inset var(--bg) 0 0 var(--shadow-spread)
            calc(var(--shadow-spread) * 0.2);
          filter: blur(var(--blur-amount)) contrast(var(--contrast-amount));
          animation: rotate var(--animation-duration) linear infinite;
        }

        .siri-orb::after {
          background-image: radial-gradient(
            circle at center,
            var(--bg) var(--dot-size),
            transparent var(--dot-size)
          );
          background-size: calc(var(--dot-size) * 2) calc(var(--dot-size) * 2);
          backdrop-filter: blur(calc(var(--blur-amount) * 2))
            contrast(calc(var(--contrast-amount) * 2));
          mix-blend-mode: overlay;
        }

        /* Apply mask only when radius is greater than 0 */
        .siri-orb[style*="--mask-radius: 0%"]::after {
          mask-image: none;
        }

        .siri-orb:not([style*="--mask-radius: 0%"])::after {
          mask-image: radial-gradient(
            black var(--mask-radius),
            transparent 75%
          );
        }

        @keyframes rotate {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .siri-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

export { Orb }

export type { OrbColorKeys, OrbColors, OrbProps }

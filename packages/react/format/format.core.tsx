'use client'

import { Format as ArkFormat } from '@ark-ui/react/format'

/**
 * Props for the Format Byte component.
 *
 * @example
 *   type Example = FormatByteProps
 */
type FormatByteProps = React.ComponentProps<typeof ArkFormat.Byte>

/**
 * Props for the Format Number component.
 *
 * @example
 *   type Example = FormatNumberProps
 */
type FormatNumberProps = React.ComponentProps<typeof ArkFormat.Number>

/**
 * Props for the Format Relative Time component.
 *
 * @example
 *   type Example = FormatRelativeTimeProps
 */
type FormatRelativeTimeProps = React.ComponentProps<
  typeof ArkFormat.RelativeTime
>

/**
 * Renders the Format Byte component.
 *
 * @example
 *   ;<FormatByte />
 */
function FormatByte({ ...props }: FormatByteProps) {
  return <ArkFormat.Byte data-slot='format-byte' {...props} />
}

/**
 * Renders the Format Number component.
 *
 * @example
 *   ;<FormatNumber />
 */
function FormatNumber({ ...props }: FormatNumberProps) {
  return <ArkFormat.Number data-slot='format-number' {...props} />
}

/**
 * Renders the Format Relative Time component.
 *
 * @example
 *   ;<FormatRelativeTime />
 */
function FormatRelativeTime({ ...props }: FormatRelativeTimeProps) {
  return (
    <ArkFormat.RelativeTime
      data-slot='format-relative-time'
      {...props}
    />
  )
}

export { FormatByte, FormatNumber, FormatRelativeTime }

export type {
  FormatByteProps,
  FormatNumberProps,
  FormatRelativeTimeProps
}

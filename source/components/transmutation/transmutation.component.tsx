'use client'

import { motion } from 'motion/react'

import { mutation } from './transmutation.component.constants'

export type TransmutationProps = Omit<
  React.ComponentProps<typeof motion.div>,
  'transition'
> & {
  duration?: number
  transition: keyof typeof mutation
}

export function Transmutation({
  transition,
  duration = 0.4,
  ...props
}: TransmutationProps) {
  const setAnimate = mutation[transition] ?? mutation.reveal

  return (
    <motion.div
      transition={{ duration, ease: 'easeIn' }}
      {...setAnimate}
      {...props}
    />
  )
}

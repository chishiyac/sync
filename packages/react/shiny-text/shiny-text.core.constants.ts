import type React from 'react'

const DEFAULT_SHINY_TEXT_DURATION = 1
const DEFAULT_SHINY_TEXT_WAVE = false
const DEFAULT_SHINY_TEXT_COLOR = 'var(--color-neutral-500)'
const DEFAULT_SHINY_TEXT_SHIMMERING_COLOR = 'var(--color-neutral-300)'
const SHINY_TEXT_REPEAT_DELAY_FACTOR = 0.05

const SHINY_TEXT_WRAPPER_STYLE = {
  display: 'inline-block',
  perspective: '500px',
  position: 'relative'
} satisfies React.CSSProperties

const SHINY_TEXT_CHARACTER_STYLE = {
  display: 'inline-block',
  transformStyle: 'preserve-3d',
  whiteSpace: 'pre'
} satisfies React.CSSProperties

const SHINY_TEXT_INITIAL_WAVE_STATE = {
  rotateY: 0,
  scale: 1
} as const

const SHINY_TEXT_ANIMATE_WAVE_STATE = {
  rotateY: [0, 15, 0],
  scale: [1, 1.1, 1],
  x: [0, 5, 0],
  y: [0, -5, 0]
}

const SHINY_TEXT_COLOR_SEQUENCE = [
  'var(--color)',
  'var(--shimmering-color)',
  'var(--color)'
]

const SHINY_TEXT_TRANSITION_EASE = 'easeInOut' as const

export {
  DEFAULT_SHINY_TEXT_COLOR,
  DEFAULT_SHINY_TEXT_DURATION,
  DEFAULT_SHINY_TEXT_SHIMMERING_COLOR,
  DEFAULT_SHINY_TEXT_WAVE,
  SHINY_TEXT_ANIMATE_WAVE_STATE,
  SHINY_TEXT_CHARACTER_STYLE,
  SHINY_TEXT_COLOR_SEQUENCE,
  SHINY_TEXT_INITIAL_WAVE_STATE,
  SHINY_TEXT_REPEAT_DELAY_FACTOR,
  SHINY_TEXT_TRANSITION_EASE,
  SHINY_TEXT_WRAPPER_STYLE
}

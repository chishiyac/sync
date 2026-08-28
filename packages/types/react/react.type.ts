import type { EmptyObject } from '../generics'

/**
 * React state setter function.
 *
 * @example
 *   type SetCount = UseState<number>
 */
type UseState<T> = React.Dispatch<React.SetStateAction<T>>

/**
 * Optional `as` prop for polymorphic components.
 *
 * @example
 *   type LinkProps = As<'a'>
 */
type As<T extends React.ElementType> = {
  as?: T
}

/**
 * React ref for a given element type.
 *
 * @example
 *   type ButtonRef = ElementRef<'button'>
 */
type ElementRef<T extends React.ElementType> = React.ComponentRef<T>

/**
 * Polymorphic component props with an optional `as` prop.
 *
 * @example
 *   type ButtonProps = PolymorphicProps<'button', { variant?: 'primary' }>
 */
type PolymorphicProps<
  T extends React.ElementType,
  P = EmptyObject
> = P &
  As<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>

/**
 * Polymorphic component props that mirror the rendered element.
 *
 * @example
 *   type StackProps = Isomorphic<'section', { gap?: number }>
 */
type Isomorphic<T extends React.ElementType, P = EmptyObject> = P &
  As<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>

/**
 * React synthetic event alias.
 *
 * @example
 *   type ClickEvent = SyntheticEvent
 */
type SyntheticEvent = React.SyntheticEvent

/**
 * React keyboard event alias.
 *
 * @example
 *   type KeyEvent = KeyboardEvent
 */
type KeyboardEvent = React.KeyboardEvent

/**
 * React mouse event alias.
 *
 * @example
 *   type ClickEvent = MouseEvent
 */
type MouseEvent = React.MouseEvent

/**
 * React clipboard event alias.
 *
 * @example
 *   type CopyEvent = ClipboardEvent
 */
type ClipboardEvent = React.ClipboardEvent

/**
 * Input change event for text-based fields.
 *
 * @example
 *   type TextChange = InputChangeEvent
 */
type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

/**
 * Input change event for file inputs.
 *
 * @example
 *   type FileChange = InputFileChangeEvent
 */
type InputFileChangeEvent = React.ChangeEvent<HTMLInputElement>

export type {
  As,
  ClipboardEvent,
  ElementRef,
  InputChangeEvent,
  InputFileChangeEvent,
  Isomorphic,
  KeyboardEvent,
  MouseEvent,
  PolymorphicProps,
  SyntheticEvent,
  UseState
}

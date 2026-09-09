/**
 * Returns a context value or throws when a provider is missing.
 *
 * @example
 *   requiredContext(context, 'Session')
 */
function requiredContext<T>(
  context: T | null | undefined,
  entityName: string
): T {
  if (!context) {
    const normalizedName =
      entityName.charAt(0).toUpperCase() + entityName.slice(1)

    throw new Error(
      `use${normalizedName} must be used within a ${normalizedName}Provider`
    )
  }

  return context
}

export const errors = () => ({
  requiredContext
})

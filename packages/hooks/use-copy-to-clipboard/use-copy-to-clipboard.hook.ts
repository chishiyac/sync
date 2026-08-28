import { useCallback, useState } from 'react'

type UseCopyToClipboardCopiedValue = string | null

type UseCopyToClipboardCopyFn = (input: string) => Promise<boolean>

type UseCopyToClipboardReturn = [
  UseCopyToClipboardCopiedValue,
  UseCopyToClipboardCopyFn
]

/**
 * Returns the last copied text and a helper to copy strings to the
 * clipboard.
 *
 * The hook falls back gracefully when the Clipboard API is
 * unavailable and returns `false` from the copy function in that
 * case.
 */
function useCopyToClipboard(): UseCopyToClipboardReturn {
  const [copiedText, setCopiedText] =
    useState<UseCopyToClipboardCopiedValue>(null)

  const copy: UseCopyToClipboardCopyFn = useCallback(
    async (input: string) => {
      if (!navigator?.clipboard) {
        console.warn('Clipboard not supported')
        return false
      }

      try {
        await navigator.clipboard.writeText(input)
        setCopiedText(input)
        return true
      } catch (error) {
        console.warn('Copy failed', error)
        setCopiedText(null)
        return false
      }
    },
    []
  )

  return [copiedText, copy]
}

export { useCopyToClipboard }

export type {
  UseCopyToClipboardCopyFn,
  UseCopyToClipboardCopiedValue,
  UseCopyToClipboardReturn
}

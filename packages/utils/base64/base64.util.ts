function encode(value: string): string {
  const bytes = new TextEncoder().encode(value)

  return btoa(String.fromCodePoint(...bytes))
}

function decode(value: string): string {
  const bytes = Uint8Array.from(
    atob(value),
    (character) => character.codePointAt(0) ?? 0
  )

  return new TextDecoder().decode(bytes)
}

export const base64 = () => ({
  decode,
  encode
})

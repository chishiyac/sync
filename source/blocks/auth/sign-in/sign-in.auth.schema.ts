import { z } from 'zod'

const formSchema = z.object({
  value: z.string().trim().min(1, 'SSH private key is required')
})

type FormSchema = z.infer<typeof formSchema>

export { formSchema as formSignInAuthSchema }

export type { FormSchema as FormSignInAuthSchema }

import { z } from 'zod'

export type CardFormValues = z.infer<typeof cardFormSchema>
export const cardFormSchema = z.object({
  answer: z.string().min(3).max(30),
  question: z.string().min(3).max(30),
})

import { z } from 'zod'

export type LearnFormValues = z.infer<typeof LearnFormGradeSchema>
export const LearnFormGradeSchema = z.object({
  grade: z.string(),
})

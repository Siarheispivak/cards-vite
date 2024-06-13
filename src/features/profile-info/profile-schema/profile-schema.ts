import { z } from 'zod'

export const profileSchema = z.object({
  name: z.string().trim().min(2, { message: 'Must be at least 2 characters' }),
})

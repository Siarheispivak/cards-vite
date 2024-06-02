import z from 'zod'

export const RecoveryPasswordSchema = z.object({
  password: z.string().min(5).max(30),
})

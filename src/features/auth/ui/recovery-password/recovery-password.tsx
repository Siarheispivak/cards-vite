import { useForm } from 'react-hook-form'

import { RecoveryPasswordSchema } from '@/features/auth'
import { Button, Card, ControlledInput, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'

import s from './recovery-password.module.scss'

type RecoveryPasswordType = z.infer<typeof RecoveryPasswordSchema>

type Props = {
  onSubmit: (data: RecoveryPasswordType) => void
}

export const RecoveryPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { password: '' },
    resolver: zodResolver(RecoveryPasswordSchema),
  })

  return (
    <Card>
      <Typography className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <div className={s.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput control={control} error={errors.password?.message} name={'password'} />
          <Typography className={s.instructions} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.button}>Create New Password</Button>
        </form>
      </div>
    </Card>
  )
}

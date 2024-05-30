import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ForgotPasswordSchema } from '@/features/auth'
import { routes } from '@/shared/const'
import { Button, Card, ControlledInput, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password-form.module.scss'

type ForgotPasswordType = z.infer<typeof ForgotPasswordSchema>
type Props = {
  onSubmit: (data: ForgotPasswordType) => void
}

export const ForgotPasswordForm = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: '' },
    resolver: zodResolver(ForgotPasswordSchema),
  })

  return (
    <Card>
      <Typography className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <div className={s.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            control={control}
            error={errors.email?.message}
            label={'Email'}
            name={'email'}
          />
          <Typography className={s.instructions} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        <Typography as={'a'} className={s.alreadyHaveAnAccount} variant={'body2'}>
          Did you remember your password?
        </Typography>
        <Typography as={Link} className={s.singIn} to={routes.AUTH.SING_IN} variant={'link1'}>
          Try to logging in
        </Typography>
      </div>
    </Card>
  )
}

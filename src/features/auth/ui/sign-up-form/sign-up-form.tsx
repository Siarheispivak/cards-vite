import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signUpSchema } from '@/features/auth'
import { routes } from '@/shared/const'
import { Button, Card, ControlledTextField, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up-form.module.scss'

export type SignUpFormType = z.infer<typeof signUpSchema>
type Props = {
  onSubmit: (data: SignUpFormType) => void
}
export const SignUpForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { email: '', password: '', passwordConfirmation: '' },
    mode: 'onSubmit',
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card>
      <div className={s.formContainer}>
        <Typography className={s.title} variant={'large'}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <ControlledTextField
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
          />
          <ControlledTextField
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <ControlledTextField
            control={control}
            errorMessage={errors.password?.message}
            label={'Confirm Password'}
            name={'passwordConfirmation'}
            type={'password'}
          />
          <Button className={s.button} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography as={'a'} className={s.alreadyHaveAnAccount} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={Link} className={s.singIn} to={routes.AUTH.SING_IN} variant={'link1'}>
          Sign In
        </Typography>
      </div>
    </Card>
  )
}

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signInSchema } from '@/features/auth'
import { routes } from '@/shared/const'
import { Button, Card, Typography } from '@/shared/ui'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

export type SignInFormType = z.infer<typeof signInSchema>
type Props = {
  onSubmit: (data: SignInFormType) => void
}
export const SignInForm = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormType>({
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onSubmit',
    resolver: zodResolver(signInSchema),
  })

  return (
    <Card>
      <div className={s.formContainer}>
        <Typography className={s.title} variant={'large'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <div className={s.form}>
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
            <ControlledCheckbox
              className={s.rememberMe}
              control={control}
              label={'Remember Me'}
              name={'rememberMe'}
            />
            <Typography
              as={Link}
              className={s.recoveryPassword}
              to={routes.AUTH.FORGOT_PASSWORD}
              variant={'link1'}
            >
              Forgot Password?
            </Typography>
            <Button className={s.button} fullWidth type={'submit'}>
              Sign In
            </Button>
          </div>
        </form>
        <Typography as={'a'} className={s.dontHaveAnAccount} variant={'body2'}>
          Dont have an account?
        </Typography>
        <Typography as={Link} className={s.singUp} to={routes.AUTH.SIGN_UP} variant={'link1'}>
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}

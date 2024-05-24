import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { signInSchema } from '@/features/auth'
import { routes } from '@/shared/const'
import { Button, Card, Typography } from '@/shared/ui'
import { ControlledCheckbox, ControlledInput } from '@/shared/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in-form.module.scss'

export type SignInFormType = z.infer<typeof signInSchema>
type Props = {
  onSubmit: (data: SignInFormType) => void
}
export const SignInForm = (props: Props) => {
  const { control, handleSubmit } = useForm<SignInFormType>({
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
            <ControlledInput control={control} label={'Email'} name={'email'} />
            <ControlledInput
              control={control}
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
            <Typography as={Link} className={s.recoveryPassword} to={'someWere'} variant={'link1'}>
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

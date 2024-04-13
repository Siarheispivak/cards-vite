import { Card } from '@/shared/ui/card'
import { Typography } from '@/shared/ui/typography'

import s from './sign-in-form.module.scss'

export const SignInForm = () => {
  return (
    <>
      <Card className={s.card}>
        <div className={s.formContainer}>
          <Typography className={s.formTitle} variant={'large'}>
            Sign In
          </Typography>
          <form></form>
        </div>
      </Card>
    </>
  )
}

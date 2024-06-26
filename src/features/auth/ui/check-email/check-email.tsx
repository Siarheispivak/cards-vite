import { Link } from 'react-router-dom'

import { Email } from '@/shared/assets'
import { routes } from '@/shared/const'
import { Button, Card, Typography } from '@/shared/ui'

import s from './check-email.module.scss'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card>
      <div className={s.formContainer}>
        <Typography variant={'large'}>Check Email</Typography>
        <Email className={s.emailIcon} />
        <Typography className={s.instructions} variant={'body2'}>
          We’ve sent an Email with instructions to {email}
        </Typography>
        <Typography as={Link} className={s.signIn} to={routes.AUTH.SING_IN} variant={'link1'}>
          <Button className={s.button} fullWidth type={'submit'}>
            Back to sign in
          </Button>
        </Typography>
      </div>
    </Card>
  )
}

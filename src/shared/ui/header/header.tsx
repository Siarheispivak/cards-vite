import { Link } from 'react-router-dom'

import { LogoIncubator } from '@/shared/assets'
import { routes } from '@/shared/const'
import { useAuthMeQuery } from '@/shared/services/auth-api/auth-api'
import { Button, Typography } from '@/shared/ui'
import { MenuHeader } from '@/shared/ui/menu-header'

import s from './header.module.scss'

export const Header = () => {
  const { data, isLoading } = useAuthMeQuery()

  if (isLoading) {
    return <div>LOADING...</div>
  }

  return (
    <header className={s.header}>
      <LogoIncubator />
      {data && <MenuHeader email={data.email} name={data.name} src={data.avatar} />}
      {!data && (
        <Button variant={'primary'}>
          <Typography as={Link} className={s.signIn} to={routes.AUTH.SING_IN} variant={'link1'}>
            Sign In
          </Typography>
        </Button>
      )}
    </header>
  )
}

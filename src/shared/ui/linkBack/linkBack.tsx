import { Link, To } from 'react-router-dom'

import { Icon, Typography } from '@/shared/ui'

import s from './linkBack.module.scss'

type LinkBackProps = {
  text?: string
  to?: To
}
export const LinkBack = ({ text = 'Back to previous page', to }: LinkBackProps) => {
  const link = to ? to : '-1'

  return (
    <>
      <div className={s.container}>
        <Icon iconId={'arrow_back_outline'} />
        <Typography as={Link} className={s.linkBack} to={link} variant={'body2'}>
          {text}
        </Typography>
      </div>
    </>
  )
}

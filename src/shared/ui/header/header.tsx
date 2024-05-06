import { LogoIncubator } from '@/shared/assets'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <LogoIncubator />
    </header>
  )
}

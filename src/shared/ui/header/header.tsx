import { LogoIncubator } from '@/shared/assets'

import s from './header.module.scss'

export const Header = () => {
  //хук для отрисовки кнопки или менюшки
  return (
    <header className={s.header}>
      <LogoIncubator />
    </header>
  )
}

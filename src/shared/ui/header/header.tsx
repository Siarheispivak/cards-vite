import { LogoIncubator } from '@/shared/assets'
import { MenuHeader } from '@/shared/ui/menu-header'

import s from './header.module.scss'

export const Header = () => {
  //хук для отрисовки кнопки или менюшки
  return (
    <header className={s.header}>
      <LogoIncubator />
      <MenuHeader email={'Spivak@gmail.com'} name={'Spivak'} />
      {/*<Button variant={'primary'}>Sign In</Button>*/}
    </header>
  )
}

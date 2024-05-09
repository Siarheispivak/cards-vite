import { LogoIncubator } from '@/shared/assets'
import { Button } from '@/shared/ui'
import { MenuHeader } from '@/shared/ui/menu-header'

import s from './header.module.scss'

export const Header = () => {
  //хук для отрисовки кнопки или менюшки
  // const [data, setData] = useState(false)
  const data = true

  return (
    <header className={s.header}>
      <LogoIncubator />
      {/*//src={data.avatar}*/}
      {data && <MenuHeader email={'Spivak@gmail.com'} name={'Spivak'} />}
      {!data && <Button variant={'primary'}>Sign In</Button>}
    </header>
  )
}

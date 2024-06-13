import { Link, useNavigate } from 'react-router-dom'

import { ProfileIcon, SignOutIcon } from '@/shared/assets'
import { routes } from '@/shared/const'
import { useLogoutMutation } from '@/shared/services'
import { Typography } from '@/shared/ui'
import { Avatar } from '@/shared/ui/avatar'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/shared/ui/drop-down'

import s from './menu-header.module.scss'

type Props = {
  email: string
  name: string
  src?: string
}

export const MenuHeader = ({ email, name, src }: Props) => {
  const [logout] = useLogoutMutation()
  const navigate = useNavigate()
  const trigger = (
    <div className={s.trigger}>
      <Avatar name={name} src={src} />
    </div>
  )

  const handleGoToProfile = () => {
    navigate('/profile')
  }

  return (
    <div className={s.container}>
      <Typography as={Link} className={s.nickName} to={routes.PROFILE}>
        {name}
      </Typography>
      <Dropdown trigger={trigger}>
        <DropdownItem className={s.itemInformation}>
          <Avatar name={name} src={src} />
          <div>
            <Typography variant={'subtitle2'}>{name}</Typography>
            <Typography variant={'caption'}>{email}</Typography>
          </div>
        </DropdownItem>
        <DropdownItemWithIcon
          icon={<ProfileIcon />}
          onClick={handleGoToProfile}
          text={'My profile'}
        />
        <DropdownItemWithIcon icon={<SignOutIcon />} onClick={() => logout()} text={'Sign Out'} />
      </Dropdown>
    </div>
  )
}

import { Button, Typography } from '@/shared/ui'
import { Icon } from '@/shared/ui/icon'
import { ProfileType } from '@/shared/ui/profile/profile'

import s from '@/features/profile-info/static-info/static-info.module.scss'

type StaticInfoProps = { editModeCallback: () => void } & Pick<
  ProfileType,
  'email' | 'name' | 'onLogout'
>
export const StaticInfo = ({ editModeCallback, email, name, onLogout }: StaticInfoProps) => {
  return (
    <>
      <div className={s.nameContainer}>
        <div className={s.name}>
          <Typography onDoubleClick={editModeCallback} variant={'h1'}>
            {name}
          </Typography>
          <div className={s.icon} onClick={editModeCallback}>
            <Icon height={'30'} iconId={'edit'} viewBox={'0 0 18 18'} width={'30'} />
          </div>
        </div>
      </div>
      <Typography variant={'body2'}>{email}</Typography>
      <Button onClick={onLogout} variant={'secondary'}>
        <Icon height={'20'} iconId={'logout'} width={'20'} />
        Logout
      </Button>
    </>
  )
}

import { Navigate } from 'react-router-dom'

import { routes } from '@/shared/const'
import { useAuthMeQuery, useLogoutMutation, useUpdateUserMutation } from '@/shared/services'
import { Profile } from '@/shared/ui'

import s from './profile-page.module.scss'

export const ProfilePage = () => {
  const [logOut] = useLogoutMutation()
  const [updateInfo] = useUpdateUserMutation()
  const { data } = useAuthMeQuery()

  const onNameChange = (newName: string) => {
    const formData = new FormData()

    formData.append('name', newName)
    updateInfo(formData)
  }

  const onAvatarChange = (newAvatar: File) => {
    const formData = new FormData()

    formData.append('avatar', newAvatar)
    updateInfo(formData)
  }

  if (!data) {
    return <Navigate to={routes.AUTH.SING_IN} />
  } else {
    return (
      <div className={s.container}>
        <Profile
          avatar={data?.avatar}
          email={data?.email}
          name={data?.name}
          onAvatarChange={onAvatarChange}
          onLogout={logOut}
          onNameChange={onNameChange}
        />
      </div>
    )
  }
}

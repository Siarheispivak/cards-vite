import { ChangeEvent, useState } from 'react'

import { ProfileForm } from '@/features/profile-info'
import { Avatar, Button, Card, Typography } from '@/shared/ui'
import { Icon } from '@/shared/ui/icon'

import s from './profile.module.scss'

export type ProfileType = {
  avatar: string
  email: string
  name: string
  onAvatarChange: (fileData: File) => void
  onLogout: () => void
  onNameChange: (value: string) => void
}

export const Profile = ({
  avatar,
  email,
  name,
  onAvatarChange,
  onLogout,
  onNameChange,
}: ProfileType) => {
  const [editMode, setEditMode] = useState<boolean>(false)

  const updateNickNameHandler = (data: { name: string }) => {
    if (data.name === name) {
      alert('You write the same Nickname')

      return setEditMode(false)
    }
    onNameChange(data.name)
    setEditMode(false)
  }
  const updateAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      onAvatarChange(file)
    }
  }
  const editModeOn = () => {
    setEditMode(true)
  }

  return (
    <Card>
      <div className={s.container}>
        <Typography className={s.personalInfo} variant={'large'}>
          Personal Information
        </Typography>
        <div className={s.photoContainer}>
          <Avatar name={name} size={100} src={avatar} />
          {!editMode && (
            <Button as={'label'} variant={'secondary'}>
              <Icon height={'30'} iconId={'camera'} width={'30'} />
              <input
                aria-label={'Change avatar'}
                className={s.avtarInput}
                onChange={updateAvatarHandler}
                type={'file'}
              />
            </Button>
          )}
        </div>
        <ProfileForm
          editMode={editMode}
          email={email}
          name={name}
          onLogout={onLogout}
          onSubmit={updateNickNameHandler}
          setEditMode={editModeOn}
        />
      </div>
    </Card>
  )
}

import { ChangeEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Avatar, Button, Card, ControlledInput, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './profile.module.scss'

export const profileSchema = z.object({
  name: z.string().trim().min(2, { message: 'Must be at least 2 characters' }),
})

type FormValues = z.infer<typeof profileSchema>
type ProfileType = {
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
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { name: name },
    mode: 'onSubmit',
    resolver: zodResolver(profileSchema),
  })

  const updateNickNameHandler = (data: { name: string }) => {
    if ((data.name = name)) {
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

  const formRef = useRef<HTMLFormElement>(null)
  const infoForm = editMode ? (
    <form onSubmit={handleSubmit(updateNickNameHandler)} ref={formRef} style={{ width: '100%' }}>
      <ControlledInput
        autoFocus
        className={s.profileName}
        control={control}
        defaultValue={name}
        error={errors.name?.message}
        label={'NickName'}
        name={'name'}
      />
      <Button className={s.saveChanges} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  ) : (
    <StaticInfo editModeCallback={editModeOn} email={email} name={name} onLogout={onLogout} />
  )

  return (
    <Card>
      <Typography className={s.personalInfo} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.photoContainer}>
        <Avatar name={name} size={100} src={avatar} />
        {!editMode && (
          <Button as={'label'} className={s.editAvatarButton} variant={'secondary'}>
            {/*CAMERA*/}
            <input
              aria-label={'Change avatar'}
              className={s.avtarInput}
              onChange={updateAvatarHandler}
              type={'file'}
            />
          </Button>
        )}
      </div>
      {infoForm}
    </Card>
  )
}
type StaticInfoProps = { editModeCallback: () => void } & Pick<
  ProfileType,
  'email' | 'name' | 'onLogout'
>
const StaticInfo = ({ editModeCallback, email, name, onLogout }: StaticInfoProps) => {
  return (
    <>
      <div className={s.nameContainer}>
        <div className={s.name}>
          <Typography onDoubleClick={editModeCallback} variant={'h1'}>
            {name}
          </Typography>
          {/*//Edit icon*/}
        </div>
      </div>
      <Typography variant={'body2'}>{email}</Typography>
      <Button onClick={onLogout} variant={'secondary'}>
        {/*logout icon*/}
        Logout
      </Button>
    </>
  )
}

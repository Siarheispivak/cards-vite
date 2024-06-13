import { useForm } from 'react-hook-form'

import { StaticInfo } from '@/features/profile-info'
import { profileSchema } from '@/features/profile-info/profile-schema'
import { Button, ControlledInput } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/features/profile-info/profile-form/profile-form.module.scss'

type FormValues = z.infer<typeof profileSchema>
type Props = {
  editMode: boolean
  email: string
  name: string
  onLogout: () => void
  onSubmit: (data: FormValues) => void
  setEditMode: () => void
}

export const ProfileForm = ({ editMode, email, name, onLogout, onSubmit, setEditMode }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { name: name },
    mode: 'onSubmit',
    resolver: zodResolver(profileSchema),
  })

  return editMode ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        autoFocus
        className={s.profileName}
        control={control}
        error={errors.name?.message}
        label={'NickName'}
        name={'name'}
      />
      <Button className={s.saveChanges} fullWidth variant={'primary'}>
        Save Changes
      </Button>
    </form>
  ) : (
    <StaticInfo editModeCallback={setEditMode} email={email} name={name} onLogout={onLogout} />
  )
}

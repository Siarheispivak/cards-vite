import { Profile } from '@/shared/ui'

export const ProfilePage = () => {
  // хуки,изменения авы и ника через formData.apend
  return (
    <Profile
      avatar={''}
      email={''}
      name={''}
      onAvatarChange={() => {}}
      onLogout={() => {}}
      onNameChange={() => {}}
    />
  )
}

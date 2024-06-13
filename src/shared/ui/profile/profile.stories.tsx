import { Profile } from '@/shared/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Components/UI/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const EmptyAvatar: Story = {
  args: {
    avatar: 'url',
    email: 'your_email@domain.com',
    name: 'John',
    onAvatarChange: () => {
      alert('avatar changed!')
    },
    onLogout: () => {},
    onNameChange: () => {
      alert('name changed!')
    },
  },
}
export const NormalAvatar: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/siarheispivak?v=4',
    email: 'sspivka@gmail.com',
    name: 'Peter Parker',
    onAvatarChange: () => {
      alert('avatar changed!')
    },
    onLogout: () => {},
    onNameChange: () => {
      alert('name changed!')
    },
  },
}
export const BrokenAvatar: Story = {
  args: {
    avatar: 'httpps://avatars.githubusercontent.com/siarheispivak?v=4',
    email: 'sspivka@gmail.com',
    name: 'Peter Parker',
    onAvatarChange: () => {
      alert('avatar changed!')
    },
    onLogout: () => {},
    onNameChange: () => {
      alert('name changed!')
    },
  },
}

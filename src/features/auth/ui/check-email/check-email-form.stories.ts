import { CheckEmail } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: CheckEmail,
  tags: ['autodocs'],
  title: 'Auth/Check Email',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    email: 'your email',
  },
}

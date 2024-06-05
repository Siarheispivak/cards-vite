import { RecoveryPasswordForm } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: RecoveryPasswordForm,
  tags: ['autodocs'],
  title: 'Auth/Reset Password',
} satisfies Meta<typeof RecoveryPasswordForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}

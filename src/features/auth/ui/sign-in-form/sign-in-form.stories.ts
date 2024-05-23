import { SignInForm } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/Sign In',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}

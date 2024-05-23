import { SignUpForm } from '@/features/auth/ui/sign-up-form/sign-up-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUpForm,
  tags: ['autodocs'],
  title: 'Auth/Sign Up',
} satisfies Meta<typeof SignUpForm>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}

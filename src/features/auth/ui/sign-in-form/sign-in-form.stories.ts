import type { Meta, StoryObj } from '@storybook/react'

import { SignInForm } from '@/features/auth/ui'

const meta: Meta<typeof SignInForm> = {
  component: SignInForm,
  tags: ['autodocs'],
  title: 'Auth/Sign In',
} satisfies Meta<typeof SignInForm>

export default meta
type Story = StoryObj<typeof SignInForm>
export const Default: Story = {
  args: {
    onSubmit: () => {},
  },
}

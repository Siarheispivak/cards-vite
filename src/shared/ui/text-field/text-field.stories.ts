import { TextField } from '@/shared/ui/text-field/text-field'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placholder',
  },
}
export const Password: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placholder',
    type: 'password',
  },
}
export const Error: Story = {
  args: {
    errorMessage: 'Error message',
    label: 'Input with error',
    value: 'Wrong value',
  },
}

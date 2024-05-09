import { MenuHeader } from '@/shared/ui/menu-header/menu-header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: MenuHeader,
  tags: ['autodocs'],
  title: 'Layout/MenuHeader',
} satisfies Meta<typeof MenuHeader>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    email: 'Ivanov@gmail.com',
    name: 'Ivan',
  },
}

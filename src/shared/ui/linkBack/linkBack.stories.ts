import { LinkBack } from '@/shared/ui/linkBack/linkBack'
import { Meta, type StoryObj } from '@storybook/react'

const meta = {
  component: LinkBack,
  tags: ['autodocs'],
  title: 'Components/ui/LinkBack',
} satisfies Meta<typeof LinkBack>

export default meta
type Story = StoryObj<typeof meta>

export const LinkBackStory: Story = {
  args: {
    text: 'Back to previous page',
    to: 'redirect to previous or other page',
  },
}
//TODO

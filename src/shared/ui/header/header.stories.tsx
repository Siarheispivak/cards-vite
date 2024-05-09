import type { Meta, StoryObj } from '@storybook/react'

import { MemoryRouter } from 'react-router-dom'

import { Header } from './'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Layout/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    data: true,
    isAuth: true,
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
}

export const NotAuthorized: Story = {
  args: {
    data: false,
    isAuth: false,
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
}

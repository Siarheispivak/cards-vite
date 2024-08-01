import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/shared/ui'

const meta = {
  argTypes: {
    onChange: { action: 'value changed to' },
    options: [],
  },
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  { id: '1', label: 'React', value: 'react' },
  { id: '2', label: 'Redux', value: 'redux' },
  { id: '3', label: 'TypeScript', value: 'typescript' },
  { id: '4', label: 'JavaScript', value: 'javascript' },
]

export const NotSelectedValue: Story = {
  args: {
    onChange: () => {
      // Ваша логика обработки изменения значения
    },
    options: data,
    value: '',
  },
}

export const SelectedValue: Story = {
  args: {
    onChange: () => {
      // Ваша логика обработки изменения значения
    },
    options: data,
    value: 'typescript',
  },
}

export const WithErrorMessage: Story = {
  args: {
    errorMessage: 'Some error message example',
    onChange: () => {
      // Ваша логика обработки изменения значения
    },
    options: data,
    value: '',
  },
}

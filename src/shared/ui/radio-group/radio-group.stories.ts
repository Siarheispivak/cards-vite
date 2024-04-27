import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radio-group'

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
  { label: 'React', value: 'react' },
  { label: 'Redux', value: 'redux' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
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
    value: 'redux',
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

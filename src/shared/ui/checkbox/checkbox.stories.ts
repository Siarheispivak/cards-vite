import { Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  argTypes: {
    onClick: { action: 'checked/unchecked' },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export const Default = {
  // TODO: вмонтировать onclick на изменение состояния  checked/unchecked!
  args: {
    disabled: false,
    label: 'Click here',
  },
}

export const Checked = {
  args: {
    checked: true,
    disabled: false,
    label: 'Click here',
  },
}
export const DisabledChecked = {
  args: {
    checked: true,
    disabled: true,
    label: 'Click here',
  },
}
export const DisabledUnChecked = {
  args: {
    checked: false,
    disabled: true,
    label: 'Click here',
  },
}

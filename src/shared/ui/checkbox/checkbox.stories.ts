import { Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export const Default = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}

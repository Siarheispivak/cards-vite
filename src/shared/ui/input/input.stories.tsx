import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '@/shared/ui'

import { Input } from './input'

const meta = {
  argTypes: {
    disabled: {
      defaultValue: false,
      type: 'boolean',
    },
    error: {
      type: 'string',
    },
    variant: {
      options: ['eyeDecoration', 'searchDecoration', 'withoutDecoration'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Ui/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const EyeDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'eyeDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
  },
}

export const SearchDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'searchDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
  },
}

export const WithoutDecoration: Story = {
  render() {
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(false)

    return (
      <>
        <Input
          clearField={() => setValue('')}
          disabled={disabled}
          label={'label'}
          onChange={e => setValue(e.currentTarget.value)}
          value={value}
          variant={'withoutDecoration'}
        />
        <Button onClick={() => setDisabled(!disabled)} style={{ margin: '30px' }}>
          disabled
        </Button>
      </>
    )
  },
}

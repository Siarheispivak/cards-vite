import { FC } from 'react'

import { Typography } from '@/shared/ui'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export type RadioItem = {
  label: string
  value: string
}

export type RadioGroupProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  name?: string
  onChange: (value: string) => void
  options: RadioItem[]
  required?: boolean
  value: string
}

export const RadioGroup: FC<RadioGroupProps> = props => {
  const { disabled, errorMessage, onChange, options, value, ...rest } = props

  return (
    <RadixRadioGroup.Root
      className={s.root}
      disabled={disabled}
      onValueChange={onChange}
      value={value}
      {...rest}
    >
      {options.map((e, i) => (
        <div className={s.container} key={i}>
          <RadixRadioGroup.Item className={s.item} value={e.value}>
            <RadixRadioGroup.Indicator className={s.indicator} />
          </RadixRadioGroup.Item>
          <label className={s.label}>{e.label}</label>
        </div>
      ))}
      {errorMessage && <Typography variant={'error'}>{errorMessage}</Typography>}
    </RadixRadioGroup.Root>
  )
}

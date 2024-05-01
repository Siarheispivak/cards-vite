import { ReactNode } from 'react'

import { ArrowDownIcon } from '@/shared/assets'
import { Typography } from '@/shared/ui'
import * as Label from '@radix-ui/react-label'
import * as SelectRadixUI from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type SelectOptionsProps = {
  disabled?: boolean
  label: string
  value: string
}

type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  placeholder?: ReactNode
  selectOptions: SelectOptionsProps[]
  value?: string
  variant?: 'default' | 'pagination'
}

export const Select = (props: SelectProps) => {
  const {
    className,
    defaultValue,
    disabled,
    label,
    onValueChange,
    placeholder,
    selectOptions,
    value,
    variant = 'DEFAULT',
  } = props

  return (
    <Label.Root>
      <Typography
        as={'label'}
        className={`${s.label} ${disabled && s.labelDisabled}`}
        variant={'body2'}
      >
        {label}
      </Typography>
      <SelectRadixUI.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required
        value={value}
      >
        <SelectRadixUI.Trigger className={clsx(s.trigger, className, s[variant])}>
          <SelectRadixUI.Value placeholder={placeholder} />
          <ArrowDownIcon className={s.icon} />
        </SelectRadixUI.Trigger>

        <SelectRadixUI.Portal>
          <SelectRadixUI.Content className={s.content} position={'popper'}>
            <SelectRadixUI.Viewport>
              {selectOptions.map(option => {
                return (
                  <SelectRadixUI.Item
                    className={s.item}
                    disabled={option.disabled}
                    key={option.value}
                    value={option.label}
                  >
                    <SelectRadixUI.ItemText>{option.value}</SelectRadixUI.ItemText>
                  </SelectRadixUI.Item>
                )
              })}
            </SelectRadixUI.Viewport>
          </SelectRadixUI.Content>
        </SelectRadixUI.Portal>
      </SelectRadixUI.Root>
    </Label.Root>
  )
}

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/shared/ui'
import {
  Content,
  Portal,
  Root,
  Icon as SelectIcon,
  Trigger,
  Value,
  Viewport,
} from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Icon } from '../icon'
import { SelectItem } from './select-item/select-item'

export type OptionsSelectProps = {
  title: string
  value: string
}

type SelectProps = {
  className?: string
  label?: string
  options?: OptionsSelectProps[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof Root>

export const Select = forwardRef<ElementRef<typeof Root>, SelectProps>(
  (
    { className, disabled, label, onValueChange, options, placeholder, value, ...restProps },
    ref
  ) => {
    const classNames = {
      label: clsx(s.label, disabled && s.disabled),
      trigger: clsx(s.trigger, className),
    }

    return (
      <Root
        disabled={disabled}
        onValueChange={onValueChange}
        required={restProps.required}
        value={value}
      >
        {label && (
          <Typography className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <Trigger aria-label={'select'} className={classNames.trigger}>
          <Value placeholder={placeholder} />
          <SelectIcon className={s.icon}>
            <Icon iconId={'arrow_down'} />
          </SelectIcon>
        </Trigger>
        <Portal>
          <Content className={s.content} position={'popper'}>
            <Viewport>
              {options?.map(option => (
                <SelectItem key={option.value} ref={ref} value={option.value}>
                  {option.title}
                </SelectItem>
              ))}
            </Viewport>
          </Content>
        </Portal>
      </Root>
    )
  }
)

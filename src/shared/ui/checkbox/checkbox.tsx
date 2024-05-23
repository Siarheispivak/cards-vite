import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Check } from '@/shared/assets'
import { Typography } from '@/shared/ui'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import clsx from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
  position?: 'right'
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox: FC<CheckboxProps> = forwardRef<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckboxProps
>(({ checked, className, disabled, label, position, ...rest }, ref) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'right' && s.left),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root asChild>
        <Typography as={'label'} className={classNames.label} variant={'body2'}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root className={classNames.root} ref={ref} {...rest}>
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
})

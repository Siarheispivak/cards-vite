import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { CloseIcon, Eye, VisibilityOff } from '@/shared/assets'
import Search from '@/shared/assets/icons/search'
import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from '@/shared/ui/text-field/text-field.module.scss'

export type TextFieldProps = {
  containerProps?: ComponentProps<'div'>
  errorMessage?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onClearInput?: () => void
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      containerProps,
      errorMessage,
      label,
      labelProps,
      onChange,
      onClearInput,
      onValueChange,
      placeholder,
      type,
      value,
      ...restProps
    },
    ref
  ) => {
    const classNames = {
      input: clsx(s.input, !!errorMessage && s.error, className),
      inputContainer: clsx(s.inputContainer, !!errorMessage && s.error),
      inputWrapper: clsx(s.inputWrapper),
      label: clsx(s.label),
      root: clsx(s.root),
    }

    const [showPassword, setShowPassword] = useState(false)
    const isShowPasswordButtonShown = type === 'password'
    const finalType = getFinalType(type, showPassword)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const clearInputHandler = () => {
      onValueChange?.('')
      onClearInput?.()
    }

    return (
      <div className={classNames.root}>
        {label && (
          <Typography as={'label'} className={classNames.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classNames.inputContainer}>
          {type === 'search' && <Search />}
          <div className={classNames.inputWrapper}>
            <input
              className={classNames.input}
              onChange={handleChange}
              placeholder={placeholder}
              ref={ref}
              type={finalType}
              {...restProps}
            />
          </div>
          {isShowPasswordButtonShown && (
            <button
              className={s.showPassword}
              onClick={() => {
                setShowPassword(prev => !prev)
              }}
              type={'button'}
            >
              {showPassword ? <VisibilityOff /> : <Eye />}
            </button>
          )}
          {type === 'search' && value && (
            <button className={s.rightIcon} onClick={clearInputHandler} type={'button'}>
              <CloseIcon className={s.closeOutlineIcon} />
            </button>
          )}
        </div>
        <Typography className={s.errorLabel} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)

function getFinalType(type: ComponentProps<'input'>['type'], showPassword: boolean) {
  if (type === 'password' && showPassword) {
    return 'text'
  }

  return type
}

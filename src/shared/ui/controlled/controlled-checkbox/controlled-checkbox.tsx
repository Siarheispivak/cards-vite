import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/shared/ui'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'defaultValue' | 'rules'> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox {...rest} {...field} checked={value} disabled={disabled} onCheckedChange={onChange} />
  )
}

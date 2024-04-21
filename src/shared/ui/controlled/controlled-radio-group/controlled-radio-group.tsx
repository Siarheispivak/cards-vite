import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/shared/ui/radio-group'

type Props<T extends FieldValues> = Omit<UseControllerProps<T>, 'defaultValue' | 'rules'> &
  Omit<RadioGroupProps, 'onChange'> // TODO:понять надо ли в Омит прокидывать 'value'

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, disabled, name, shouldUnregister })

  return <RadioGroup {...rest} disabled={disabled} name={name} onChange={onChange} value={value} />
}

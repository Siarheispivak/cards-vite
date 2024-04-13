import { useState } from 'react'

import { Checkbox } from '@/shared/ui/checkbox'

import s from './shared/ui/checkbox/checkbox.module.scss'

export function App() {
  const [checked, setChecked] = useState(false)

  const onValueChange = () => {
    setChecked(!checked)
  }

  console.log(checked)

  return (
    <div>
      <Checkbox
        checked={checked}
        className={s.checkbox}
        disabled={false}
        id={'345bgv'}
        onValueChange={onValueChange}
        position={'left'}
      />
    </div>
  )
}

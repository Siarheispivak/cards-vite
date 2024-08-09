import { Icon, Typography } from '@/shared/ui'
import { Close } from '@radix-ui/react-dialog'

import s from './modalHeader.module.scss'

type Props = {
  title: string
}
export const ModalHeader = ({ title }: Props) => {
  return (
    <div className={s.root}>
      <Typography variant={'h3'}>{title}</Typography>
      <Close asChild>
        <button aria-label={'Close'} className={s.button}>
          <Icon height={'24'} iconId={'close'} viewBox={'3 3 18 18'} width={'24'} />
        </button>
      </Close>
    </div>
  )
}

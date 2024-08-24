import { Button } from '@/shared/ui'

import s from './modalFooter.module.scss'

type Props = {
  onCloseModal: (value: boolean) => void
  title?: string | undefined
}
export const ModalFooter = ({ onCloseModal, title }: Props) => {
  return (
    <div className={s.buttonWrapper}>
      <Button onClick={() => onCloseModal(false)} type={'button'} variant={'secondary'}>
        Close
      </Button>
      <Button type={'submit'}>{title}</Button>
    </div>
  )
}

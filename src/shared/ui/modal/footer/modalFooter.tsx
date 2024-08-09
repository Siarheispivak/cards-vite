import { Button } from '@/shared/ui'

import s from './modalFooter.module.scss'

type Props = {
  title: string
}
export const ModalFooter = ({ title }: Props) => {
  return (
    <div className={s.buttonWrapper}>
      <Button onClick={() => {}} type={'button'} variant={'secondary'}>
        Close
      </Button>
      <Button type={'submit'}>{title}</Button>
    </div>
  )
}

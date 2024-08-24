import { useDeleteCardMutation } from '@/shared/services/card-api'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './deleteCard.module.scss'

type DeleteCardProps = {
  id: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}

export const DeleteCard = ({ id, isOpen, onOpenChange, title }: DeleteCardProps) => {
  const [deleteCard] = useDeleteCardMutation()
  const onSubmitDeleteCard = async () => {
    deleteCard({ id })
  }
  const onClose = () => {
    onOpenChange(false)
  }

  return (
    <Modal className={s.wrapper} onOpenChange={onOpenChange} open={isOpen} title={title}>
      <Typography className={s.text}>Do you really want to remove this card?</Typography>
      <div className={s.buttonWrapper}>
        <Button onClick={onClose} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={onSubmitDeleteCard}>{title}</Button>
      </div>
    </Modal>
  )
}

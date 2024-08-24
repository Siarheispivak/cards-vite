import { CardForm } from '@/features/card'
import { EditValues } from '@/features/card/ui/cardForm/cardForm'
import { useUpdateCardMutation } from '@/shared/services/card-api'

type UpdateCardProps = {
  answer: string
  cardId: string | undefined
  coverAnswer: File | null | string
  coverQuestion: File | null | string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  question: string
  title: string
}
export const UpdateCard = ({
  answer,
  cardId,
  coverAnswer,
  coverQuestion,
  isOpen,
  onOpenChange,
  question,
  title,
}: UpdateCardProps) => {
  const [updateCard] = useUpdateCardMutation()
  const onSubmitForm = async (data: FormData) => {
    await updateCard({ data: data, id: cardId })
  }
  const editValues: EditValues = {
    answer,
    coverAnswer,
    coverQuestion,
    question,
  }

  return (
    <CardForm
      editValues={editValues}
      footerButtonTitle={'Update Card'}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}

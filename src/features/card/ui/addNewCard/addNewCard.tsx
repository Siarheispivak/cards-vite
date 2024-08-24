import { CardForm } from '@/features/card/ui'
import { useCreateCardMutation } from '@/shared/services/card-api'

type AddNewCardProps = {
  deckId: string
  footerButtonTitle: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  title: string
}
export const AddNewCard = ({
  deckId,
  footerButtonTitle,
  isOpen,
  onOpenChange,
  title,
}: AddNewCardProps) => {
  const [createCard] = useCreateCardMutation()

  const onSubmitForm = async (data: FormData) => {
    await createCard({ data: data, id: deckId })
    //TODO: добавить тостифай для наглядности
  }

  return (
    <CardForm
      footerButtonTitle={footerButtonTitle}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onSubmitForm={onSubmitForm}
      title={title}
    />
  )
}

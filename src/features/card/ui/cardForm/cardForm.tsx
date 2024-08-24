import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { CardFormValues } from '@/features/card/lib/schemas/card-form-schema'
import { cardFormSchema } from '@/features/card/lib/schemas/card-form-schema/card-form-schema'
import { ControlledInput, Modal, Typography } from '@/shared/ui'
import { ImageContainer } from '@/shared/ui/imageContainer/imageContainer'
import { ModalFooter } from '@/shared/ui/modal/footer'
import { zodResolver } from '@hookform/resolvers/zod'

type cardFormProps = {
  editValues?: EditValues
  footerButtonTitle?: string
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onSubmitForm: (data: FormData) => void
  title: string
}
type AddNewCardArgs = {
  answer: string
  cover?: File | null | string
  question: string
}
type CoverStateArgs = {
  answer: File | null | string
  question: File | null | string
}
export type EditValues = {
  answer: string
  coverAnswer: File | null | string | undefined
  coverQuestion: File | null | string | undefined
  question: string
}
export const CardForm = ({
  editValues,
  footerButtonTitle,
  isOpen,
  onOpenChange,
  onSubmitForm,
  title,
}: cardFormProps) => {
  const { control, handleSubmit, reset, resetField } = useForm<CardFormValues>({
    defaultValues: {
      answer: editValues?.answer ?? '',
      question: editValues?.question ?? '',
    },
    resolver: zodResolver(cardFormSchema),
  })

  const [coverState, setCoverState] = useState<CoverStateArgs>({
    answer: editValues?.coverAnswer ?? null,
    question: editValues?.coverQuestion ?? null,
  })

  useEffect(() => {
    resetField('question', { defaultValue: editValues?.question })
    resetField('answer', { defaultValue: editValues?.answer })

    setCoverState({
      answer: editValues?.coverAnswer ?? null,
      question: editValues?.coverQuestion ?? null,
    })
  }, [editValues, resetField])

  const handleSaveCover = (key: keyof CoverStateArgs) => (file: File | undefined) => {
    setCoverState(prevState => ({
      ...prevState,
      [key]: file || null,
    }))
  }

  const handleDeleteCover = (key: keyof CoverStateArgs) => () => {
    setCoverState(prevState => ({
      ...prevState,
      [key]: null,
    }))
  }

  const onSubmit = (data: AddNewCardArgs) => {
    onOpenChange(false)
    const formData = new FormData()

    formData.append('questionImg', coverState.question instanceof File ? coverState.question : '')
    formData.append('answerImg', coverState.answer instanceof File ? coverState.answer : '')
    formData.append('question', data.question)
    formData.append('answer', data.answer)

    setCoverState({ answer: null, question: null })
    reset()
    onSubmitForm(formData)
  }

  const onClosedModal = (value: boolean) => {
    if (!value) {
      setCoverState({ answer: null, question: null })
      reset()
    }
    onOpenChange(value)
  }

  const compileToImage = (file: File | null | string | undefined) => {
    return file instanceof File ? URL.createObjectURL(file) : file
  }

  return (
    <Modal
      footerButtonTitle={footerButtonTitle}
      onOpenChange={onOpenChange}
      open={isOpen}
      title={title}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h4'}>Question:</Typography>
        <ControlledInput control={control} label={'Question'} name={'question'} />
        <ImageContainer
          handleDeleteCover={handleDeleteCover('question')}
          handleSaveFile={handleSaveCover('question')}
          imageUrl={compileToImage(coverState.question)}
        />
        <br />
        <br />
        <Typography variant={'h4'}>Answer</Typography>
        <ControlledInput control={control} label={'Answer'} name={'answer'} />
        <ImageContainer
          handleDeleteCover={handleDeleteCover('answer')}
          handleSaveFile={handleSaveCover('answer')}
          imageUrl={compileToImage(coverState.answer)}
        />
        <ModalFooter onCloseModal={onClosedModal} title={footerButtonTitle} />
      </form>
    </Modal>
  )
}

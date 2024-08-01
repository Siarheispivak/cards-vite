import { useForm } from 'react-hook-form'

import { LearnFormGradeSchema, LearnFormValues } from '@/features/learn-info'
import { Button, ControlledRadioGroup, RadioItem, Typography } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'

import s from './learn-form.module.scss'

type Props = {
  onSubmit: (grade: string) => void
}
export const LearnForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<LearnFormValues>({
    defaultValues: {
      grade: '1',
    },
    resolver: zodResolver(LearnFormGradeSchema),
  })

  const onSubmitForm = handleSubmit(data => {
    onSubmit(data.grade)
  })

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <Typography variant={'subtitle1'}>Rate yourself:</Typography>
        <ControlledRadioGroup control={control} name={'grade'} options={grade} value={'3'} />
        <Button type={'submit'}>Next Question</Button>
      </form>
    </>
  )
}
const grade: RadioItem[] = [
  { id: '1', label: 'Did not know', value: '1' },
  { id: '2', label: 'Forgot', value: '2' },
  { id: '3', label: 'A lot of thought', value: '3' },
  { id: '4', label: 'Confused', value: '4' },
  { id: '5', label: 'Knew the answer', value: '5' },
]

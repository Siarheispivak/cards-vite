import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { LearnForm, LearnImage } from '@/features/learn-info'
import { useGetDeckQuery, useGetLearnCardQuery } from '@/shared/services/learn-api'
import { Button, Card, LinkBack, Typography } from '@/shared/ui'

import s from './learn-page.module.scss'

export const LearnPage = () => {
  const [show, setShow] = useState(false)
  const { deckId } = useParams()

  const { data: learnData, isLoading } = useGetLearnCardQuery({
    id: deckId || '',
  })
  const { data: deckData } = useGetDeckQuery({
    id: deckId || '',
  })

  const onSubmit = () => {
    // useCreateLearnGradeMutation
    //code
  }

  //не понимаю почему и там и там deckId,по логике должно быть чтото типо cardId
  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <div className={s.container}>
      <LinkBack />
      <Card>
        <Typography className={s.title} variant={'large'}>
          Learn {deckData?.name}
        </Typography>
        <LearnImage
          image={learnData?.questionImg}
          subtitle={learnData?.question}
          title={'Question:'}
        />
        <Typography className={s.count} variant={'body2'}>
          Count of attempts: {learnData?.shots}
        </Typography>
        {!show && (
          <Button
            fullWidth
            onClick={() => {
              setShow(true)
            }}
          >
            Show Answer
          </Button>
        )}
        {show && (
          <>
            <LearnImage
              image={learnData?.answerImg}
              subtitle={learnData?.answer}
              title={'Answer:'}
            />
            <LearnForm onSubmit={onSubmit} />
          </>
        )}
      </Card>
    </div>
  )
}

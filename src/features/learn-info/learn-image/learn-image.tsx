import { Typography } from '@/shared/ui'

import s from './learn-image.module.scss'

type Props = {
  image?: string
  subtitle?: string
  title: string
}
export const LearnImage = ({ image, subtitle, title }: Props) => {
  return (
    <>
      <div className={s.container}>
        <Typography className={s.title} variant={'subtitle1'}>
          {title}
        </Typography>
        <Typography className={s.subTitle} variant={'body1'}>
          {subtitle}
        </Typography>
      </div>
      <div className={s.imageWrapper}>
        {image && <img alt={'image'} className={s.image} src={image} />}
      </div>
    </>
  )
}

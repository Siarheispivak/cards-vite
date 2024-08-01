import { Icon } from '@/shared/ui'

import s from './ratingStar.module.scss'

type Props = {
  rating: number
}
export const RatingStar = ({ rating }: Props) => {
  const maxStars = 5

  const stars = Array(maxStars)
    .fill(null)
    .map((_, index) => {
      const isFilled = index < rating
      const iconId = isFilled ? 'star' : 'star_outline'

      return <Icon className={s.grade} iconId={iconId} key={index} />
    })

  return <span>{stars}</span>
}

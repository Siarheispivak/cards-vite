import sprite from './sprite/sprite.svg'

type Props = {
  className?: string
  height?: string
  iconId:
    | 'arrow_back_outline'
    | 'arrow_down'
    | 'arrow_up'
    | 'camera'
    | 'close'
    | 'edit'
    | 'eye_off_outline'
    | 'eye_outline'
    | 'logout'
    | 'search'
    | 'star'
    | 'star_outline'
  viewBox?: string
  width?: string
}

export const Icon = ({ className, height, iconId, viewBox, width }: Props) => {
  return (
    <svg
      className={className}
      height={height || '16'}
      viewBox={viewBox || '2 2 20 20'}
      width={width || '16'}
    >
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  )
}

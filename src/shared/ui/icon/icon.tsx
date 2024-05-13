import sprite from './sprite/sprite.svg'

type Props = {
  className?: string
  height?: string
  iconId: 'arrow_down' | 'arrow_up'
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

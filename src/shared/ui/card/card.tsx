import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<ElementRef<'div'>, CardProps>(({ className, ...restProps }, ref) => {
  return <div className={s.root} ref={ref} {...restProps}></div>
})

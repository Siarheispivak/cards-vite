import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './modalContent.module.scss'

type Props = {
  children: ReactNode
  className?: string
}
export const ModalContent = ({ children, className }: Props) => {
  const classNames = {
    section: clsx(s.section, className),
  }

  return <section className={classNames.section}>{children}</section>
}

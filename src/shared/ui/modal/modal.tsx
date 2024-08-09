import { ReactNode } from 'react'

import { Card } from '@/shared/ui'
import { ModalContent } from '@/shared/ui/modal/content'
import { ModalFooter } from '@/shared/ui/modal/footer'
import { ModalHeader } from '@/shared/ui/modal/header'
import * as RadixDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

import s from './modal.module.scss'

type Props = {
  children: ReactNode
  className?: string
  footerButtonTitle: string
  onOpenChange: (value: boolean) => void
  open: boolean
  // scroll?: string  // ?? дл прокрутки контента модалки
  title: string
}
export const Modal = ({
  children,
  className,
  footerButtonTitle,
  onOpenChange,
  open,
  title,
}: Props) => {
  const classNames = {
    content: clsx(s.content, className),
    overlay: clsx(s.overlay),
  }

  return (
    <>
      <RadixDialog.Root onOpenChange={onOpenChange} open={open}>
        <RadixDialog.Portal>
          <RadixDialog.Overlay className={classNames.overlay}>
            <RadixDialog.Content className={classNames.content}>
              <Card>
                <ModalHeader title={title} />
                <ModalContent>{children}</ModalContent> {/*scroll classname*/}
                <ModalFooter title={footerButtonTitle} />
              </Card>
            </RadixDialog.Content>
          </RadixDialog.Overlay>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    </>
  )
}

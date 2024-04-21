import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      table: clsx(className, s.table),
    }

    return <table className={classNames.table} ref={ref} {...rest} />
  }
)

export const TableHead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const classNames = {
      head: clsx(className, s.head),
    }

    return <thead className={classNames.head} ref={ref} {...rest}></thead>
  }
)

export const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ ...rest }, ref) => {
    return <tbody ref={ref} {...rest}></tbody>
  }
)
export const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref}></tr>
  }
)

export const TableHeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      th: clsx(className, s.th),
    }

    return (
      <th className={classNames.th} ref={ref} {...rest}>
        <span>{children}</span>
      </th>
    )
  }
)

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      td: clsx(className, s.td),
    }

    return (
      <td className={classNames.td} ref={ref} {...rest}>
        <span>{children}</span>
      </td>
    )
  }
)

export const TableEmpty: FC<ComponentProps<'div'> & { mb?: string; mt?: string }> = ({
  className,
  mb,
  mt = '89px',
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography
      className={classNames.empty}
      style={{ marginBottom: mb, marginTop: mt }}
      variant={'h2'}
    >
      There are still no data!
    </Typography>
  )
}

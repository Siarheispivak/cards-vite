import { ComponentProps, ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from 'react'

import { Chevron } from '@/shared/assets'
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
      head: clsx(className, s.headCell),
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
      headCell: clsx(s.headCell),
    }

    return (
      <th className={classNames.headCell} ref={ref} {...rest}>
        <span>{children}</span>
      </th>
    )
  }
)

export const TableCell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ children, className, ...rest }, ref) => {
    const classNames = {
      cell: clsx(s.tableCell),
    }

    return (
      <td className={classNames.cell} ref={ref} {...rest}>
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
export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null
export type Column = {
  key: string
  sortable?: boolean
  title: string
}
type Props = Omit<
  {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  } & ComponentPropsWithoutRef<'thead'>,
  'children'
>

export const HeaderTable = (props: Props) => {
  const { columns, onSort, sort, ...restProps } = props
  /*
   Объявляем функцию handleSort, которая возвращает другую функцию.
   Это сделано для обработки клика на заголовок столбца и запуска функции сортировки.
   Принимает два параметра: key - ключ столбца, и sortable - флаг, указывающий, может ли столбец быть отсортирован.
   */
  const handleSort = (key: string, sortable?: boolean) => () => {
    /*
    Проверяем, существует ли функция onSort и может ли столбец быть отсортирован.
    Если нет, то прерываем выполнение функции.
    */
    if (!onSort || !sortable) {
      return
    }
    /*
    Проверяем, если текущая колонка не совпадает с колонкой, по которой уже производится сортировка (если такая есть).
    Если условие выполняется, вызываем функцию onSort с объектом, указывающим начать сортировку по этой колонке в порядке возрастания.
    */

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }
    /*
     Проверяем, если текущее направление сортировки установлено как 'desc' (по убыванию).
     Если это так, то вызываем функцию onSort с null, что означает отключить сортировку.
     */
    if (sort.direction === 'desc') {
      return onSort(null)
    }

    /*
    Если предыдущие условия не выполняются, значит, текущая колонка уже участвует в сортировке.
    В этом случае меняем направление сортировки на противоположное и
    вызываем функцию onSort с обновленными параметрами сортировки.
     */
    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <TableHead {...restProps}>
      <TableRow>
        {columns.map(({ key, sortable, title }) => (
          <TableHeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort?.key === key ? <Chevron className={s.chevron} /> : ''}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

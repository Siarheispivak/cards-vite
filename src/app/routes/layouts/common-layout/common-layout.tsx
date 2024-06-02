import { Outlet } from 'react-router-dom'

import { Header } from '@/shared/ui/header'

import s from './common-layout.module.scss'

export const CommonLayout = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <Outlet />
      </div>
    </>
  )
}

import { CheckEmail } from '@/features/auth'
import { useAppSelector } from '@/shared/lib/hooks'

import s from '@/pages/profile-page/profile-page.module.scss'

export const CheckEmailPage = () => {
  const email = useAppSelector(state => state.app.email)

  return (
    <div className={s.container}>
      <CheckEmail email={email} />
    </div>
  )
}

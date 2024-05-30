import { CheckEmail } from '@/features/auth'
import { useAppSelector } from '@/shared/lib/hooks'

export const CheckEmailPage = () => {
  const email = useAppSelector(state => state.app.email)

  return (
    <>
      <CheckEmail email={email} />
    </>
  )
}

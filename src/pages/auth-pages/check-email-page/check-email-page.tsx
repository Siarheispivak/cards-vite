import { CheckEmailForm } from '@/features/auth'
import { useAppSelector } from '@/shared/lib/hooks'

export const CheckEmailPage = () => {
  const email = useAppSelector(state => state.app.email)

  return (
    <>
      <CheckEmailForm email={email} />
    </>
  )
}

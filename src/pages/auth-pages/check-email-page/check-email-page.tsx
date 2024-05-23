import { CheckEmailForm } from '@/features/auth'

export const CheckEmailPage = () => {
  //получить мэйл с глобального стейта
  return (
    <>
      <CheckEmailForm email={'test@gmail.com'} />
    </>
  )
}

import { CheckEmail } from '@/features/auth'

export const CheckEmailPage = () => {
  //получить мэйл с глобального стейта
  return <CheckEmail email={'test@gmail.com'} />
}

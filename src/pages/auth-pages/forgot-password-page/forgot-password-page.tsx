import { useNavigate } from 'react-router-dom'

import { ForgotPasswordForm } from '@/features/auth'
import { routes } from '@/shared/const'
import { useActions } from '@/shared/lib'
import { useRecoveryPasswordMutation } from '@/shared/services'

import { appAction } from '../../../shared/modal'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const { setEmail } = useActions(appAction)
  const navigate = useNavigate()
  const handleResetPassword = async (args: { email: string }) => {
    try {
      await recoveryPassword(args)
      setEmail(args)
      navigate(routes.AUTH.CHECK_EMAIL)
    } catch (e) {
      console.error(e)
    }
  }

  return <ForgotPasswordForm onSubmit={handleResetPassword} />
}

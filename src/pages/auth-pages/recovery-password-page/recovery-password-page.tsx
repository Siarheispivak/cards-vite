import { useNavigate, useParams } from 'react-router-dom'

import { RecoveryPasswordForm } from '@/features/auth/ui/recovery-password-form/recovery-password-form'
import { routes } from '@/shared/const'
import { SignUpArgs, useResetPasswordMutation } from '@/shared/services'

export const RecoveryPasswordPage = () => {
  const [resetPassword] = useResetPasswordMutation()
  const { token } = useParams()
  const navigate = useNavigate()

  const resetPasswordHandler = async (data: Pick<SignUpArgs, 'password'>) => {
    try {
      await resetPassword({
        password: data.password,
        token: token ?? '',
      })
      navigate(routes.AUTH.SING_IN)
    } catch (e) {
      console.error(e)
    }
  }

  return <RecoveryPasswordForm onSubmit={resetPasswordHandler} />
}

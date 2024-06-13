import { useNavigate, useParams } from 'react-router-dom'

import { RecoveryPasswordForm } from '@/features/auth/ui/recovery-password-form/recovery-password-form'
import { routes } from '@/shared/const'
import { SignUpArgs, useResetPasswordMutation } from '@/shared/services'

import s from '@/pages/profile-page/profile-page.module.scss'

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

  return (
    <div className={s.container}>
      <RecoveryPasswordForm onSubmit={resetPasswordHandler} />
    </div>
  )
}

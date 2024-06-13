import { useNavigate } from 'react-router-dom'

import { ForgotPasswordForm } from '@/features/auth'
import { emailMessage } from '@/pages/auth-pages/forgot-password-page/email-message'
import { routes } from '@/shared/const'
import { useActions } from '@/shared/lib'
import { appAction } from '@/shared/modal'
import { VerificationEmailArgs, useRecoveryPasswordMutation } from '@/shared/services'

import s from '@/pages/profile-page/profile-page.module.scss'

export const ForgotPasswordPage = () => {
  const [recoveryPassword] = useRecoveryPasswordMutation()
  const { setEmail } = useActions(appAction)
  const navigate = useNavigate()
  const handleResetPassword = async (args: VerificationEmailArgs) => {
    try {
      await recoveryPassword({
        email: args.email,
        html: emailMessage,
      })
      setEmail(args)
      navigate(routes.AUTH.CHECK_EMAIL)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={s.container}>
      <ForgotPasswordForm onSubmit={handleResetPassword} />
    </div>
  )
}

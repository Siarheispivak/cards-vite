import { useNavigate } from 'react-router-dom'

import { SignUpForm, SignUpFormType } from '@/features/auth'
import { routes } from '@/shared/const'
import { useSignUpMutation } from '@/shared/services'

import s from '@/pages/profile-page/profile-page.module.scss'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()

  const handleSignUp = async (args: SignUpFormType) => {
    try {
      await signUp(args)
      navigate(routes.AUTH.CHECK_EMAIL)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={s.container}>
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  )
}

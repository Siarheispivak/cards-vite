import { useNavigate } from 'react-router-dom'

import { SignInForm, SignInFormType } from '@/features/auth/ui'
import { useSignInMutation } from '@/shared/services'

import s from '@/pages/profile-page/profile-page.module.scss'

export const SignInPage = () => {
  const [signIn] = useSignInMutation()
  const navigate = useNavigate()

  const handleSignIn = async (args: SignInFormType) => {
    try {
      await signIn(args)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className={s.container}>
      <SignInForm onSubmit={handleSignIn} />
    </div>
  )
}

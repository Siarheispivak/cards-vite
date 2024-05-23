import { useNavigate } from 'react-router-dom'

import { SignInForm } from '@/features/auth/ui'
import { LoginArgs, useSignInMutation } from '@/shared/services'

export const SignInPage = () => {
  const [signIn] = useSignInMutation()
  const navigate = useNavigate()

  const handleSignIn = async (args: LoginArgs) => {
    try {
      await signIn(args)
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <SignInForm onSubmit={handleSignIn} />
    </>
  )
}
